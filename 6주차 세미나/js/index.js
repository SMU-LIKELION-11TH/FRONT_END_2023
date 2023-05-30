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
