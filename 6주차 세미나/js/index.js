// main => question page
let num = 0;

function start() {
  $('#main').hide();
  $('#qna').show();
  next();
}

function next() {
  $('.progress-bar').attr('style', 'width: calc(100/12*' + (num + 1) + '%)');
  $('#title').html(q[num]['title']);
  $('#type').val(q[num]['type']);
  $('#A').html(q[num]['A']);
  $('#B').html(q[num]['B']);
  num++;
}

$('#A').click(function () {
  var type = $('#type').val();
  var preValue = $('#' + type).val();
  $('#' + type).val(parseInt(preValue) + 1);
  next();
});
$('#B').click(function () {
  next();
});

if (num === 13) {
  $('#qna').hide();
  $('#result').show();
  var mbti = '';
  $('#EI').val() < 2 ? (mbti += 'I') : (mbti += 'E');
  $('#SN').val() < 2 ? (mbti += 'N') : (mbti += 'S');
  $('#TF').val() < 2 ? (mbti += 'F') : (mbti += 'T');
  $('#JP').val() < 2 ? (mbti += 'P') : (mbti += 'J');

  console.log(mbti);
  $('.subtitle').html(result[mbti]['subtitle']);
  $('.explain').html(result[mbti]['explain']);
  $('#result_img').attr('src', result[mbti]['img']);
}

function shareURL() {
  const dummy = document.createElement('textarea');
  document.body.appendChild(dummy);

  const url = window.document.location.href;
  dummy.value = url;

  navigator.clipboard
    .writeText(dummy.value)
    .then(() => {
      alert('복사 완료');
    })
    .catch((err) => {
      console.log('err:', err);
    });

  document.body.removeChild(dummy);
}

function shareMessage() {
  Kakao.Share.sendScrap({
    requestUrl: 'netlify 주소',
  });
}
