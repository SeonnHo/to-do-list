# TodoList with React

**배포 주소** : https://todolist-sh.netlify.app/ <br />

<img src="https://github.com/SeonnHo/to-do-list/blob/main/src/assets/page.png" width="100%"/> <br/>

### 기간

> 2024.02.01 ~ 2023.02.06

### 개발환경

> `React`<br/>`PostCSS(CSS Module)`<br/>`framer-motion`

## 프로젝트 목표 및 주요기능

### useState, useEffect, useContext 등 **리액트 훅** 사용

### **PostCSS**(CSS Module) 사용

**리스트 추가 및 삭제**

**투두리스트 제목 변경**

- 제목 옆 변경 버튼 클릭 시, 타이틀 상태 변경이 가능한 입력 폼 활성화

**투두리스트 필터링**

- 리스트 전체, 진행 중, 완료 3가지 상태의 필터링 구현
- 버튼 클릭 시, 해당 필터링 옵션에 맞는 배열로 상태 변경

**Local Storage**

- 리스트 및 제목 등 데이터들을 local storage에 저장 후 useEffect와 local storage를 사용하여<br/>mount 시 저장된 데이터들을 활용해 사용자가 입력한 상태를 다시 불러올 수 있도록 구현

**다크모드 구현**

- useContext를 사용해 다크모드 토글 버튼 클릭 시 배경 및 투두카드 색상 변경
