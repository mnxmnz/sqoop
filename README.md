<p align="center">
    <img src="https://user-images.githubusercontent.com/55784772/103595413-af25f880-4f3e-11eb-8821-8119d6b213cb.gif" alt="Logo" width="150" height="150">
    <br />
    <h1 align="center">sqoop</h1>
    <p align="center">질문을 통해 돌아보는 대학생 경험 정리 가이드</p>
    <br />
    <p align="center">
        <a href="https://youtu.be/RW2UhtJsazM">Promotional Video</a>
        ·
        <a href="https://drive.google.com/file/d/1ITXltZXabLJ2drhkhHRwUt31j1TX_VbS/view?usp=share_link">Final Presentation</a>
    </p align="center">
</p>

<br />
<br />

## ✨ 주요 기능

### ⚪️ 메인 홈

![메인 홈](https://user-images.githubusercontent.com/55784772/104731707-73c9cc00-577f-11eb-8157-c7bfe1cc6fdd.PNG)

💡 메인 헤더

- [1] 홈, 모아보기, 마이 페이지로 이동

💡 사용자 인사말

- [1] 활동 제안 (F5시 무작위로 바뀜)

- [2] 새 활동 추가 버튼으로 활동 추가

💡 활동 불러오기

- [1] 기간 선택 버튼 (년도)

- [2] 활동 카드를 통해 활동 이미지, 활동 제목, 기간, 해시태그, 사용자 경험을 요약해서 보여줌

- [3] 활동 카드를 클릭하면 개별 활동 뷰로 이동

- [4] 활동이 없는 월은 타임라인 숫자 비활성화

### ⚪️ 새 활동 추가

![새 활동 추가](https://user-images.githubusercontent.com/55784772/104733740-809bef00-5782-11eb-8a9b-1bbf42a7eacc.PNG)

💡 활동 내용 입력받기

- [1] 제목, 소속 단체, 직무 태그, 역량 태그, 한 줄 설명

- [2] 입력차 hover 시 스타일 변경

💡 저장 완료 버튼

- [1] 제목, 직무 태그, 역량 태그 입력 시 버튼 활성화

- [2] 활성화된 경우 hover 시 스타일 변경

💡 저장 완료 시 팝업 (모달)

- [1] `활동을 자세히 돌아볼까요?`에서 `네` 선택 시 활동 돌아보기로 이동

- [2] `다음에 할래요` 선택 시 홈으로 이동

💡 사진과 파일 입력받기

- [1] 사진, 파일 formData로 서버에 전송

### ⚪️ 활동 돌아보기

![활동 돌아보기](https://user-images.githubusercontent.com/55784772/104732024-ec308d00-577f-11eb-9129-cffbcb6f4685.PNG)

💡 헤더

- [1] 활동 이름 표시

- [2] 이미 저장된 답변이 있을 때만 좌우 버튼으로 이동 가능

💡 현재 질문 카드

- [1] 카드 index에 따라 질문 표시

- [2] 답변 작성 영역(중복 공백 불가능, 최대 1000자)

- [3] 답변 수정 중 이전카드 또는 좌우 버튼 클릭 시 저장 안내 모달 표시

💡 스쿱 저장 버튼

- [1] 답변이 빈 문자열일 경우 비활성화

- [2] 답변이 존재하는 경우 활성화

- [3] 활성화된 경우 hover 시 스타일 변경

- [4] 활성화된 경우 클릭 시 답변 저장 후 다음 카드로 넘어감

💡 이전 질문 카드

- [1] 이전 질문과 저장된 답변 내용 표시

- [2] hover 시 스타일 변경

- [3] 클릭 시 해당 카드의 수정 페이지로 넘어감

💡 다음 질문 카드

- [1] 다음 질문 내용 표시

💡 스쿱 진행률 애니메이션

- [1] 답변 작성률에 따라 진행률 표시 및 애니메이션 효과

- [2] 답변 작성률에 따라 청크 메세지 표시

💡 작성 완료 카드

- [1] 10개의 답변 모두 작성완료 시 표시

- [2] 활동 돌아보기 버튼 클릭 시 미리 보기 뷰로 넘어감

### ⚪️ 개별 활동 보기

![개별 활동 보기](https://user-images.githubusercontent.com/55784772/104731835-a1af1080-577f-11eb-8840-68c007bfbcb2.PNG)

💡 헤더

- [1] 새 활동 추가에서 입력한 제목 표시

- [2] 즐겨찾기 버튼으로 활동 즐겨 찾기 목록에 추가

- [3] 수정 버튼으로 작성 내용 수정

- [4] 새 활동 추가에서 입력한 제목 표시

💡 활동 내용 확인하기

- [1] 활동 추가와 활동 카드에서 작성한 내용 확인

- [2] 등록한 내용이 없는 영역은 빈칸으로 표시

- [3] 사진을 등록하지 않았을 때 기본 사진 표시

💡 활동 내용 수정하기

- [1] 활동 추가와 활동 카드에서 입력한 내용 수정

- [2] 입력차 hover 시 스타일 변경

- [3] 사용자가 값을 수정한 후 수정 완료 버튼 클릭

- [4] 사진, 파일 formData로 서버에 전송

💡 사용자 답변 상태에 따라 4가지 다른 뷰 제공

- [1] 활동 추가하기로 기본 정보만 입력하고 활동 카드에서 작성한 내용은 없을 때
- [2] 활동 카드에서 작성한 내용이 있으나 10번까지 완성하지 않았을 경우

- [3] 10번까지 모든 질문 카드 작성했을 경우

- [4] 사용자가 10번까지 질문 카드를 작성한 직후 미리 보기 화면

### ⚪️ 활동 모아보기

![활동 모아보기](https://user-images.githubusercontent.com/55784772/104731769-8b08b980-577f-11eb-8d9b-0541295d8bfd.PNG)

💡 활동 모아보기/즐겨찾기/작성 중인 활동 선택

- [1] 활동 모아보기 : 필터링 가능, 처음에는 전체 활동

- [2] 즐겨찾기 : 즐겨찾기 등록한 활동

- [3] 작성 중인 활동 : 아직 작성이 완료되지 않은 활동

💡 필터

- [1] 활동 기간 선택

- [2] 관련 직무 태그 선택

- [3] 핵심 역량 태그 선택

- [4] 확인 버튼 클릭 시 해당하는 활동만 조회

💡 활동 클릭 시

- [1] 개별 활동 조회 페이지로 이동

### ⚪️ 로그인

![로그인](https://user-images.githubusercontent.com/55784772/104748991-a8e11900-5795-11eb-92c2-bff921b3bc3b.PNG)

💡 이메일 입력

💡 비밀번호 입력

💡 로그인

- [1] 로그인 성공 시 홈으로 이동

- [2] 실패 시 경고문 출력

## 🗂 프로젝트 구조

```
src
 ┣ assets
 ┃ ┣ icons
 ┃ ┃ ┣ AniBall.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ UserPhoto.svg
 ┃ ┗ images
 ┃ ┃ ┣ CardImg.svg
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ stepCardImage.png
 ┣ components
 ┃ ┣ activityOne
 ┃ ┃ ┣ default
 ┃ ┃ ┃ ┣ DefaultWrap.js
 ┃ ┃ ┃ ┣ Photo.js
 ┃ ┃ ┃ ┗ UserData.js
 ┃ ┃ ┣ edit
 ┃ ┃ ┃ ┣ DateSelector.js
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ UserEdit.js
 ┃ ┃ ┣ global
 ┃ ┃ ┃ ┣ ActivityReviewButton.js
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ FavoritesButton.js
 ┃ ┃ ┣ notFinished
 ┃ ┃ ┃ ┣ NotFinished.js
 ┃ ┃ ┃ ┣ NotFinishedEdit.js
 ┃ ┃ ┃ ┗ NotFinishedWrap.js
 ┃ ┃ ┣ notStarting
 ┃ ┃ ┃ ┣ NotStarting.js
 ┃ ┃ ┃ ┣ NotStartingEdit.js
 ┃ ┃ ┃ ┗ NotStartingWrap.js
 ┃ ┃ ┗ review
 ┃ ┣ common
 ┃ ┃ ┣ Loading.js
 ┃ ┃ ┗ MainHeader.js
 ┃ ┣ createActivity
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Title.js
 ┃ ┣ filterActivities
 ┃ ┃ ┣ Button.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Tag.js
 ┃ ┣ home
 ┃ ┃ ┣ ActivityTemplate.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Year.js
 ┃ ┣ myPage
 ┃ ┃ ┣ InterestInfo.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ UserInfo.js
 ┃ ┣ signIn
 ┃ ┃ ┣ Block.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ WarnMessage.js
 ┃ ┗ stepCard
 ┃ ┃ ┣ CurrentCard.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ StepHeader.js
 ┣ containers
 ┃ ┣ activityOne
 ┃ ┃ ┣ default
 ┃ ┃ ┃ ┣ BasicData.container.js
 ┃ ┃ ┃ ┣ Title.container.js
 ┃ ┃ ┃ ┗ UserAnswer.container.js
 ┃ ┃ ┗ edit
 ┃ ┃ ┃ ┣ BasicData.container.js
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ UserAnswer.container.js
 ┃ ┣ createActivity
 ┃ ┃ ┣ Button.container.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Title.container.js
 ┃ ┣ filterActivities
 ┃ ┃ ┣ Button.container.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ SkillTag.container.js
 ┃ ┣ home
 ┃ ┃ ┗ CardList.container.js
 ┃ ┣ signIn
 ┃ ┃ ┣ Button.container.js
 ┃ ┃ ┣ Input.container.js
 ┃ ┃ ┗ WarnMessage.container.js
 ┃ ┗ stepCard
 ┃ ┃ ┣ CurrentCard.container.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ StepHeader.container.js
 ┣ font
 ┃ ┣ NotoSansKR-Bold.otf
 ┃ ┣ ...
 ┃ ┗ Quicksand-Bold.ttf
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ activityOne
 ┃ ┃ ┃ ┣ answer.js
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ user.js
 ┃ ┃ ┣ home
 ┃ ┃ ┃ ┣ cardAPI.js
 ┃ ┃ ┃ ┗ userAPI.js
 ┃ ┃ ┣ activity.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ stepCard.js
 ┃ ┣ styles
 ┃ ┃ ┗ palette.js
 ┃ ┗ createRequestSaga.js
 ┣ pages
 ┃ ┣ activityOne
 ┃ ┃ ┣ ActivityOneDefault.js
 ┃ ┃ ┗ ActivityOneEdit.js
 ┃ ┣ createActivity
 ┃ ┃ ┗ CreateActivity.js
 ┃ ┣ error
 ┃ ┣ filterActivities
 ┃ ┃ ┗ FilterActivities.js
 ┃ ┣ home
 ┃ ┃ ┗ home.js
 ┃ ┣ myPage
 ┃ ┃ ┗ MyPage.js
 ┃ ┣ signin
 ┃ ┃ ┗ SignIn.js
 ┃ ┗ stepCard
 ┃ ┃ ┗ StepCard.js
 ┣ store
 ┃ ┣ modules
 ┃ ┃ ┣ activities.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ userdata.js
 ┃ ┗ index.js
 ┣ App.css
 ┣ App.js
 ┣ index.js
 ┗ serviceWorker.js
```

## 🛠 사용 기술

| Front-End                    | Back-End              | DataBase | Front-Server | Back-Server | Tool                            |
| ---------------------------- | --------------------- | -------- | ------------ | ----------- | ------------------------------- |
| JavaScript<br>React<br>Redux | JavaScript<br>Node.js | MySQL    | AWS S3       | AWS EC2     | Git<br>Figma<br>Slack<br>Notion |

```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "antd": "^4.10.1",
    "axios": "^0.21.1",
    "global": "^4.4.0",
    "immer": "^8.0.0",
    "prettier": "^2.2.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-icons": "^4.1.0",
    "react-redux": "^7.2.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "redux": "^4.0.5",
    "redux-actions": "^2.6.5",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.2.1",
    "web-vitals": "^0.2.4",
    "yarn": "^1.22.10"
  },
"devDependencies": {
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.3.0",
    "react-textarea-autosize": "^8.3.0",
    "redux-devtools-extension": "^2.13.8"
  }
```

## 🖥 Local 실행 방법

#### [1] Yarn 설치

[Yarn 설치 바로가기](https://classic.yarnpkg.com/en/docs/install#windows-stable)

#### [2] Clone the Repo

```sh
git clone https://github.com/mnxmnz/sqoop.git
```

```sh
cd sqoop
```

#### [3] Install Packages

```sh
yarn
```

#### [4] Run the Project

```sh
yarn start
```

## 💻 개발자

| <img src="https://avatars3.githubusercontent.com/u/70877186?s=460&u=b80382a7a0abb0acbf147217eb41720a9d3e0a38&v=4" alt="profile" width="70" height="70"><br>[권소희](https://github.com/sohee-K) | <img src="https://avatars1.githubusercontent.com/u/48766355?s=460&u=0419d273d1a31539ee4f1151cdacb6fefd45dacc&v=4" alt="profile" width="70" height="70"><br>[김민지](https://github.com/mnxmnz) | <img src="https://avatars3.githubusercontent.com/u/55784772?s=460&u=3b15b3f7c5ac71e8d20b5dbb6d34e00c89fc2f0a&v=4" alt="profile" width="70" height="70"><br>[손예지](https://github.com/yezgoget) | <img src="https://avatars1.githubusercontent.com/u/55863806?s=460&u=c65fa17d24b3d8c5603a24ea7c561879be7983ae&v=4" alt="profile" width="70" height="70"><br>[현주희](https://github.com/Hyun-juhee) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

