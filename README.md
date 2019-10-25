# react 라우터 변경 시 데이터 유지

## 요구 사항

1. SPA로 작업을 하다가 history back 했을 때 동일한 데이터 및 스크롤 위치가 이동되어야 한다는 이슈.
2. 브라우저 새로 고침 후에도 데이터 유지 및 history back 했을 때 데이터 유지

## 테스트 1(캐시)

처음에는 <a href="https://github.com/chayeoi/axios-api-cache-demo" target="_blank">axios-api-cache-demo</a>와 동일하게 테스트를 진행했으나,

데이터를 받아와서 setState로 변경된 최종 데이터를 가지고 있어야 했으므로, 적절하지 않다고 판단.

## 테스트 2(Context API 활용)

Context Api를 활용하여 데이터를 저장해서 가지고 오는 방식을 택했으나, 요구 사항 2번째로 인하여 브라우저 새로 고침 시 객체에 저장된 내용이 사라지므로 이 부분도 적절하지 않다고 판단.

## 테스트 3 (sessionStorage)

테스트 결과 잘 작동함.

여기서 프로젝트 적용 시에는 401이나 logout 시 axios.interceptors에서 저장한 데이터는 삭제.
