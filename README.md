# javascript-lunch

우아한테크코스 레벨1 점심 뭐 먹지 미션

## 1단계 구현 사항

### domain

- [x] Restaurant: 각 음식점에 대한 개별 객체
  - [x] 각 음식점은 카테고리, 이름, 거리(도보 이동 시간), 설명, 참고 링크의 5가지 필드값을 가진다.
    - [x] 카테고리, 이름, 거리는 필수 입력 사항이다.
    - [x] 설명, 참고 링크는 선택 입력 사항이다.
    - [x] 카테고리는 "한식", "중식", "일식", "아시안", "양식", "기타" 중 하나여야 한다.
    - [x] 거리는 5, 10, 15, 20, 30 중 하나여야 한다.
  - [x] 음식점은 자신의 카테고리, 이름, 거리, 설명, 참고 링크를 반환할 수 있다.
  - [x] 음식점은 특정 카테고리에 대한 해당 여부를 반환할 수 있다.

### Validator

- [x] 음식점 이름이 1글자 이상 20글자 이하인지 검증한다.

### utils

- [x] fetchLocalData: 로컬 데이터를 서비스에 제공하는 함수(선택사항).
- [x] $, $$: DOM 요소 선택 함수

### service

- [x] RestaurantService: 전체 음식점 리스트 관리 및 CRUD 담당
  - [x] localStorage에서 받은 데이터가 음식점 데이터인지 확인 후 배열로 저장한다.
  - [x] 전체 음식점 목록을 반환할 수 있다.
  - [x] 주어진 카테고리에 해당하는 음식점 목록을 반환할 수 있다.
  - [x] localStorage의 음식점 리스트에 음식점을 추가한다.
  - [x] 주어진 음식점 배열을 이름순(오름차순)으로 정렬한다.
  - [x] 주어진 음식점 배열을 거리순(오름차순)으로 정렬한다.

### UI

- [x] 음식점 목록
  - [x] 음식점 목록을 확인할 수 있다.
  - [x] 카테고리별로 필터링해서 확인할 수 있다.
  - [x] 이름순/거리순으로 정렬해서 확인할 수 있다.
- [x] 음식점 추가
  - [x] 카테고리, 거리는 셀렉트 박스, 이름/설명/참고 링크는 텍스트 인풋을 사용한다.
  - [x] 카테고리, 이름, 거리는 입력 필수.

### web

- [x] css 파일 작성
- [x] html 탬플릿 작성
  - [x] 음식점 목록 페이지
  - [x] 음식점 추가 입력 폼 페이지

## 2단계 구현 사항

### 기능 구현 사항

- [x] 음식점 상세 정보를 확인할 수 있다.
  - [x] 카테고리, 이름, 거리, 설명, 참고 링크를 확인할 수 있다.
  - [ ] 해당 음식점을 자주 가는 음식점으로 추가하거나 해제할 수 있다.
  - [x] 음식점을 삭제할 수 있다.
- [x] 자주 가는 음식점을 추가하고 목록으로 확인할 수 있다.
  - [x] 자주 가는 음식점 탭에서 추가한 음식점 목록을 확인할 수 있다.
  - [x] 음식점 목록에서 특정 음식점을 자주 가는 음식점으로 추가하거나 해제할 수 있다.
- [x] 새로고침해도 추가한 정보들이 유지되어야 한다.

### Domain: Restaurant

- [x] 각 음식점은 기존에 부여된 정보에 더하여 '자주 가는 음식점'에 대한 boolean 정보값을 추가로 가진다.
- [x] 각 음식점 객체는 '자주 가는 음식점'의 해당 여부를 반환할 수 있다.

### Service : RestaurantList

- [x] '자주 가는 음식점'으로 분류된 음식점들의 목록을 반환할 수 있다.
- [x] '자주 가는 음식점'이 추가되거나 삭제되었을 때 업데이트 된 목록을 localStorage에 저장한다.

### UI

- [x] 모든 음식점 / 자주 가는 음식점으로 구분된 탭 버튼 영역을 구현한다.

  - [x] 각 탭을 클릭하면 해당하는 유형의 음식점 목록을 생성하여 하단에 노출한다.

- [x] 음식점 목록에 각 음식점 별로 자주 가는 음식점을 등록하거나 뺄 수 있는 버튼을 구현한다.

  - [x] 자주 가는 음식점인 경우, 색칠된 별 모양의 아이콘을 노출한다.
  - [x] 자주 가는 음식점이 아닌 경우, 외곽선만 있는 별 모양의 아이콘을 노출한다.
  - [x] 버튼을 누르면 해당 음식점을 자주 가는 음식점으로 추가하거나 뺄 수 있다.
  - [x] 버튼을 눌렀을 때, 해당 음식점의 정보 변경과 아이콘 변경이 새로고침 없이 바로 적용되어야 한다.

- [x] 개별 음식점의 상세 정보 모달을 구현한다.

  - [x] 음식점 목록에서 특정 음식점을 클릭하면 해당 음식점의 상세 정보를 담은 모달을 보여준다.
  - [x] 모달 안에는 음식점의 카테고리, 이름, 거리, 설명, 참고링크, 자주 가는 음식점 해당 여부가 출력된다.
  - [x] 모달 하단부에 '삭제하기', '닫기' 버튼이 위치한다.
    - [x] '삭제하기'를 누르면 해당 음식점의 정보를 삭제하고 모달을 닫은 뒤 음식점 목록을 갱신하여 출력한다.
    - [x] '닫기' 버튼을 누르면 모달을 닫고 기존의 음식점 목록 화면으로 돌아간다.
  - [x] 모달은 '닫기' 버튼, 모달 바깥의 배경 영역이나 ESC키를 눌러 닫을 수 있다.
