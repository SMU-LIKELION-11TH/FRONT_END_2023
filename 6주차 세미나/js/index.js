var num = 1;

function start() {
  $('#main').hide();
  $('#qna').show();
  next();
}

function next() {
  if (num == 13) {
    // Result calculation
    $('#qna').hide();
    $('#result').show();

    var mbti = '';
    $('#EI').val() < 2 ? (mbti += 'I') : (mbti += 'E');
    $('#SN').val() < 2 ? (mbti += 'N') : (mbti += 'S');
    $('#TF').val() < 2 ? (mbti += 'F') : (mbti += 'T');
    $('#JP').val() < 2 ? (mbti += 'P') : (mbti += 'J');

    console.log(mbti);

    // Display the result
    $('.subtitle').html(result[mbti]['subtitle']);
    $('.explain').html(result[mbti]['explain']);

    // Set the image source dynamically
    var imgFolder = '../6주차 세미나/img/';
    var imgFileName = result[mbti]['img'];
    var imgPath = imgFolder + imgFileName;
    imgPath = imgPath.replace('image/', ''); // Remove 'image/' from the path
    resultImg = imgPath;
    $('#result_img').attr('src', imgPath);
  } else {
    $('.progress-bar').attr('style', 'width: calc(100 / 12 *' + num + '%)');
    $('#title').html(q[num]['title']);
    $('#type').val(q[num]['type']);
    $('#A').html(q[num]['A']);
    $('#B').html(q[num]['B']);
    num++;
  }
}

//버튼 클릭시 점수 계산
$('#A').click(function () {
  var type = $('#type').val();
  var preValue = $('#' + type).val();
  $('#' + type).val(parseInt(preValue) + 1);
  next();
});
$('#B').click(function () {
  next();
});

//URL 복사 기능
function shareURL() {
  var url = '';
  var textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('URL이 복사되었습니다.');
}

// 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
function shareMessage() {
  // KaKao API Key
  Kakao.init('e541ca1877d33ec65761880e01d6ef40');

  // local 등록
  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '아기사자 MBTI테스트 결과',
      // MBTI결과값 이미지로 설정
      imageUrl: 'https://t1.daumcdn.net/cfile/tistory/999B7336600CEE9E14',
      link: {
        mobileWebUrl: window.document.location.href,
        webUrl: window.document.location.href,
      },
    },
    buttons: [
      {
        title: 'MBTI 테스트 해보기!',
        link: {
          mobileWebUrl: window.document.location.href,
          webUrl: window.document.location.href,
        },
      },
    ],
  });
}
