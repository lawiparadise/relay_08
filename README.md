## [Relay08] 3주차 구현 💌
- 이미지 업로드 기능
- <b>[컴퓨터 비전]</b> 이미지를 업로드하면 비슷한 사람을 찾아주고, 유사도를 측정해준다.
- <b>[컴퓨터 비전]</b> 이미지를 업로드하면 몇 십년 후의 모습을 보여준다.

<br>

## 체크포인트 ✅
1. ✅ 상단 메뉴의 **사진 찾기**를 통해 사진 찾기 페이지로 이동한다.
2. ✅ 좌측의 사진 **이미지를 클릭**하면 로컬에서 사진을 등록할 수 있다.
3. ✅ 사진을 등록하고 **변환하기** 버튼을 누르면, 변환된 사진이 우측에 표시된다.
4. ✅ 사진을 등록하고 변환하기 버튼을 누르면, 해당 사진과 유사한 사람의 이름과 유사도가 표시된다. 👏👏
5. ✅ 사진을 등록하고 변환하기 버튼을 누르면, 해당 사진과 비슷한 사람들의 사진이 표시된다. 👏👏 <br/><br/>
  - ![image](https://user-images.githubusercontent.com/48747221/90347123-401c3600-e069-11ea-8791-3b559cb307c4.png)
  - ![image](https://user-images.githubusercontent.com/13073517/90347827-99866400-e06d-11ea-8af4-74d040319001.png)

<br>

## 데모 URL 🌈
* https://choijunsik.github.io/boostcamp_relay08/
<br>

## 예외처리 🤩
- 유사한 사람이 없는 경우, 예외처리 진행
  - ![image](https://user-images.githubusercontent.com/13073517/90349275-3cda7780-e074-11ea-8601-cc6981a07102.png) 
<br>

<hr/>

## 이미지를 업로드하면 몇 십년 후의 모습 반환 😘 -> 😎
1. ✅ 상단 메뉴의 **파일 선택**을 통해 사진을 선택한다.
2. ✅ **이미지 업로드** 버튼을 클릭한다.
3. ✅ POST 결과 확인 <br/>
   Chrome의 경우, 개발자 도구 F12의 Network-Name탭의 fast-aging POST를 선택하면 responce에서 확인할 수 있다.
4. ✅ 결과 주소창에 붙여넣기하면 노화된 사진을 확인할 수 있다. 👏👏 <br/><br/>
  - ![image](https://user-images.githubusercontent.com/13073517/90349191-e10fee80-e073-11ea-8941-a4829031ecd8.png)

<br>

## 데모 URL 🌈
* http://101.101.209.224/
<br>

## 아쉬운 점 😥
- 이미지를 업로드하면 몇 십년 후의 모습 반환하는 기능은 구현이 되었는데, 메인 웹 UI와 연동하지 못했습니다.
<br>

## 시스템 흐름도 😎
* ![image](https://user-images.githubusercontent.com/13073517/90348144-778de100-e06f-11ea-82c8-79097b66af2f.png)
<br>

## 참여자 🎈 
* J207 최준식, J114 양예진, J046 김예진
* J132 이건홍, J018 권예지, J068 문석암, J101 신동민
* J060 김해람, J100 시경덕, J171 임채욱, J021 김경민, J007 강용범

<br/>

<hr/>


# relay_08

## 1주차

### J15

1. 김예진(J047)
2. 김은빈(J050)
3. 김정환(J051)
4. 김종원(J052)
5. 김종은(J053)
6. 김진관(J054)

### J16

1. 김진성(J055)
2. 김창윤(J056)
3. 김태은(J057)
4. 김하균(J058)
5. 김학준(J059)
6. 김해람(J060)

## 2주차

- 참가자

  - J015*권순주
    J016*권영길
    J053*김종은
    J054*김진관
    J089*박지홍
    J090*박진영
    J126*유진우
    J127*유현우
    J164*이청명
    J165*이한주
    J202*차효준
    J203*최기환

[2주차 프로젝트 링크](https://github.com/boostcamp-2020/relay_08/blob/master/2nd_week/WEEK_2.md)
