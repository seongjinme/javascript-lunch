import { Category, SortOrder } from '../../../enum/enums';
import { createOptionItems } from '../../../util/createFormElement';
import { $ } from '../../../util/domSelector';

class RestaurantListFilter extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEvent();
  }

  private addEvent() {
    $('#category-filter').addEventListener('change', this.dispatchChangeCategoryEvent.bind(this));
    $('#sorting-filter').addEventListener('change', this.dispatchChangeSortOrder.bind(this));
  }

  private dispatchChangeCategoryEvent(event: Event) {
    this.dispatchEvent(
      new CustomEvent('changeCategory', {
        detail: (event.target as HTMLSelectElement).value,
      }),
    );
  }

  private dispatchChangeSortOrder(event: Event) {
    this.dispatchEvent(
      new CustomEvent('changeSortOrder', {
        detail: (event.target as HTMLSelectElement).value,
      }),
    );
  }

  private createFilterSelectBox(type: string): HTMLSelectElement {
    const selectBox = document.createElement('select');
    selectBox.name = type;
    selectBox.id = `${type}-filter`;
    selectBox.classList.add('restaurant-filter');
    return selectBox;
  }

  private render() {
    this.classList.add('restaurant-filter-container');

    const categorySelectBox = this.createFilterSelectBox('category');
    categorySelectBox.append(...createOptionItems({ type: Category, defaultOption: '전체' }));
    this.appendChild(categorySelectBox);

    const sortingSelectBox = this.createFilterSelectBox('sorting');
    sortingSelectBox.append(...createOptionItems({ type: SortOrder }));
    this.appendChild(sortingSelectBox);
  }
}

customElements.define('restaurant-list-filter', RestaurantListFilter);