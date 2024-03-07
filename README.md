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

- [ ] fetchLocalData: 로컬 데이터를 서비스에 제공하는 함수(선택사항).
- [x] $, $$: DOM 요소 선택 함수

### service

- [ ] RestaurantService: 전체 음식점 리스트 관리 및 CRUD 담당
  - [x] localStorage에서 받은 데이터가 음식점 데이터인지 확인 후 배열로 저장한다.
  - [x] 전체 음식점 목록을 반환할 수 있다.
  - [x] 주어진 카테고리에 해당하는 음식점 목록을 반환할 수 있다.
  - [x] localStorage의 음식점 리스트에 음식점을 추가한다.
  - [x] 주어진 음식점 배열을 이름순(오름차순)으로 정렬한다.
  - [x] 주어진 음식점 배열을 거리순(오름차순)으로 정렬한다.

### UI

- [ ] 음식점 목록
  - [ ] 음식점 목록을 확인할 수 있다.
  - [ ] 카테고리별로 필터링해서 확인할 수 있다.
  - [ ] 이름순/거리순으로 정렬해서 확인할 수 있다.
- [ ] 음식점 추가
  - [ ] 카테고리, 거리는 셀렉트 박스, 이름/설명/참고 링크는 텍스트 인풋을 사용한다.
  - [ ] 카테고리, 이름, 거리는 입력 필수.

### web

- [ ] css 파일 작성
- [ ] html 탬플릿 작성
  - [ ] 음식점 목록 페이지
  - [ ] 음식점 추가 입력 폼 페이지
