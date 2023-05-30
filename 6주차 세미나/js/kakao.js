// // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
function shareMessage() {
  // KaKao API Key
  Kakao.init('e541ca1877d33ec65761880e01d6ef40');

  // netlify 배포를 못해서, URL등록을 못해 에러가 발생합니다.. 등록시 정상 사용가능!
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '아기사자 MBTI테스트 결과',
      imageUrl: window.document.location.origin + '/' + resultImg,
      link: {
        mobileWebUrl: window.document.location.href,
        webUrl: window.document.location.href,
      },
    },
    buttons: [
      {
        title: '테스트 결과보기',
        link: {
          mobileWebUrl: window.document.location.href,
          webUrl: window.document.location.href,
        },
      },
    ],
  });
}
