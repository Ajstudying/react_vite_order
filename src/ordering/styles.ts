import styled from "@emotion/styled";

export const OrderingContainer = styled.div`
  #ordering_main {
  }
  #ordering_main > section:nth-of-type(1) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  #orderSearch {
    display: flex;
    width: 45%;
    justify-content: space-between;
  }
  #orderSearch > form {
    display: flex;
    gap: 5px;
  }
  #orderSearch > form > input {
    border: solid 1px black;
    border-radius: 3px;
  }
  #orderList {
    display: flex;
    width: 45%;
    justify-content: space-between;
  }
  /* #orderList > span:nth-of-type(1) {
    flex: 2;
    text-align: start; */
  /* border: solid 1px crimson; */
  /* }
  #orderList > span:nth-of-type(2) {
    flex: 1; */
  /* border: solid 1px blue; */
  /* }
  #orderList > span:nth-of-type(3) {
    flex: 0.5; */
  /* border: solid 1px green; */
  /* text-align: end;
  } */
  #orderList > span:nth-of-type(3) {
    display: flex;
    justify-content: space-between;
  }
  #toggleCalendar {
    display: flex;
    gap: 1rem;
  }
  #toggleCalendar > div > button.selected {
    background: none; /* 배경 제거 */
    border: none; /* 테두리 제거 */
    padding: 0; /* 패딩 제거 */
    margin: 0; /* 마진 제거 */
    color: inherit; /* 텍스트 색상 상속 */
    font: inherit; /* 폰트 스타일 상속 */
    cursor: pointer; /* 포인터 커서 유지 */
  }
  table {
    width: 100%;
  }
  #sectionDiv {
    display: flex;
    justify-content: space-between;
    height: 69vh;
  }
  #sectionDiv > section {
    width: 45%;
    height: 100%;
    overflow-y: auto; /* 내용이 넘칠 경우 세로 스크롤 추가 */
  }
  /* #orderBtn {
    border: 1px solid white;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin-top: 50px;
    background-color: rgba(180, 154, 130);
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  svg {
    font-size: 16px;
    color: white;
    width: 38px;
    height: 50px;
    cursor: pointer;
  } */

  th,
  td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
  /* 짝수수 행의 배경색 */
  /* tr:nth-child(even) {
    background-color: #f9f9f9;
  } */
  /* 홀수 행의 배경색 */
  /* tr:nth-child(odd) {
    background-color: white;
  } */

  caption {
    font-size: 1.5em;
    margin: 10px;
    text-align: start;
  }
  #sectionDiv
    > section:nth-of-type(1)
    > table
    > tbody
    > tr
    > td:nth-of-type(1) {
    width: 1rem;
  }

  #sectionDiv
    > section:nth-of-type(1)
    > table
    > tbody
    > tr
    > td:nth-of-type(2) {
    width: 2rem;
  }

  #sectionDiv
    > section:nth-of-type(1)
    > table
    > tbody
    > tr
    > td:nth-of-type(3) {
    width: 11rem;
  }
  #sectionDiv
    > section:nth-of-type(1)
    > table
    > tbody
    > tr
    > td:nth-of-type(3)
    > img {
    width: 100%;
    height: 7rem;
  }

  .calendar-container {
    position: absolute; /* 절대 위치로 설정 */
    z-index: 1000; /* 다른 요소 위에 표시되도록 설정 */
    background: white; /* 배경색 설정 */
    border: 1px solid #ccc; /* 테두리 설정 */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    left: -10.5rem;
  }

  .amount {
    display: flex;
    gap: 10px;
    font-size: 15px;
    line-height: 2;
  }
  .amount > input {
    vertical-align: middle;
    height: 38px;
    padding-left: 8px;
  }
  .amount > div {
    /* margin-left: -9px; */
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .amount > div > img {
    cursor: pointer;
  }
`;
