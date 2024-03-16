import '../style.css';
import '../modal/RestaurantAddModal/RestaurantAddModal';
import '../root/NavigationBar/NavigationBar';
import '../root/RestaurantListTab/RestaurantListTab';
import '../root/RestaurantItem/RestaurantItem';

import RestaurantService from '../../service/RestaurantService';
import RestaurantListFilter from '../root/RestaurantListFilter/RestaurantListFilter';
import RestaurantList from '../root/RestaurantList/RestaurantList';
import RestaurantAddModal from '../modal/RestaurantAddModal/RestaurantAddModal';
import { Category, SortOrder, Tab } from '../../enum/enums';
import { RestaurantDataType } from '../../type/restaurantDataType';
import { $ } from '../../util/domSelector';

export default class AppController {
  private sortOrder: SortOrder;
  private category: Category | '';
  private tab: Tab;
  private restaurantService: RestaurantService;
  private restaurantListFilter: RestaurantListFilter;
  private restaurantList: RestaurantList;
  private restaurantAddModal: RestaurantAddModal;

  constructor() {
    this.sortOrder = SortOrder.이름순;
    this.category = '';
    this.tab = Tab['모든 음식점'];
    this.restaurantService = new RestaurantService();
    this.restaurantListFilter = new RestaurantListFilter();
    this.restaurantList = new RestaurantList(this.restaurantService.getRestaurants(this.sortOrder));
    this.restaurantAddModal = new RestaurantAddModal({
      title: '음식점 추가하기',
      id: 'add-restaurant-modal',
      onSubmit: this.addNewRestaurant.bind(this),
    });
  }

  initializeApp() {
    this.initiateNavBar();
    this.initiateRestaurantListTab();
    this.initiateRestaurantListFilter();
    this.initiateRestaurantList();
    this.initiateAddRestaurantModal();
  }

  private changeTab(event: Event) {
    if (event instanceof CustomEvent) {
      const changedTab: Tab = event.detail;
      this.tab = Tab[changedTab];
    }
    this.updateRestaurantList();
  }

  private changeCategory(event: Event) {
    if (event instanceof CustomEvent) {
      const category: Category = event.detail;
      this.category = category;
      this.updateRestaurantList();
    }
  }

  private changeSortOrder(event: Event) {
    if (event instanceof CustomEvent) {
      const sortOrder: SortOrder = event.detail;
      this.sortOrder = sortOrder;
      this.updateRestaurantList();
    }
  }

  private updateRestaurantFavorite(event: Event) {
    if (event instanceof CustomEvent) {
      const { name, isFavorited } = event.detail;
      this.restaurantService.updateRestaurantFavorite(name, isFavorited);
    }
  }

  private initiateNavBar() {
    $('nav-bar').addEventListener('showAddRestaurantModal', this.showAddRestaurantModal.bind(this));
  }

  private initiateRestaurantListTab() {
    $('restaurant-list-tab').addEventListener('changeTab', this.changeTab.bind(this));
  }

  private initiateRestaurantListFilter() {
    this.restaurantListFilter.addEventListener('changeCategory', this.changeCategory.bind(this));
    this.restaurantListFilter.addEventListener('changeSortOrder', this.changeSortOrder.bind(this));
    $('#restaurant-list').appendChild(this.restaurantListFilter);
  }

  private initiateRestaurantList() {
    this.restaurantList.addEventListener('updateRestaurantFavorite', this.updateRestaurantFavorite.bind(this));
    $('#restaurant-list').appendChild(this.restaurantList);
  }

  private initiateAddRestaurantModal() {
    document.body.appendChild(this.restaurantAddModal.render());
  }

  private updateRestaurantList() {
    const category = this.category === '' ? undefined : this.category;
    const isFavoriteList = this.tab === Tab['자주 가는 음식점'];
    const restaurantList = isFavoriteList
      ? this.restaurantService.getFavoriteRestaurants()
      : this.restaurantService.getRestaurants(this.sortOrder, category);
    this.toggleRestaurantListFilter();
    this.restaurantList.updateRestaurantList(restaurantList);
  }

  private toggleRestaurantListFilter() {
    if (this.tab === Tab['자주 가는 음식점']) {
      this.restaurantListFilter.hide();
      return;
    }
    this.restaurantListFilter.show();
  }

  private showAddRestaurantModal() {
    this.restaurantAddModal.showModal();
  }

  private addNewRestaurant(newRestaurantData: RestaurantDataType) {
    this.restaurantService.addRestaurant(newRestaurantData);
    this.updateRestaurantList();
  }
}
