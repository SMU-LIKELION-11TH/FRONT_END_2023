let num = 1;

let selectedType = '';

let eiTypeScore = 0;
let snTypeScore = 0;
let tfTypeScore = 0;
let jpTypeScore = 0;

function start() {
  $("#main").hide();
  $("#qna").show();
  next();
}

function next() {
  console.log(num);
  $(".progress-bar").attr("style", "width: calc(100 / 12 * " + num + "%)");
  $("#title").html(question[num]["title"]);
  $("#type").val(question[num]["type"]);
  $("#A").html(question[num]["A"]);
  $("#B").html(question[num]["B"]);
  num++;
}

//URL 복사 기능 - 구글링
function shareURL() {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  const url = window.document.location.href;
  dummy.value = url;
  navigator.clipboard.writeText(dummy.value)
  .then(() => {
    alert("복사가 완료되었습니다");
  })
  .catch((err) => {
    console.log("err:", err);
  });
  document.body.removeChild(dummy);
}

function shareMessage() {
  if (!Kakao.isInitialized()) Kakao.init('13549ed13612d5fe700e1accda0667f1');

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '아기사자 MBTI 테스트',
      description: '나는 어떤 아기사자일까요? MBTI 기반으로 알아보는 아기사자 테스트 🦁',
      imageUrl:
        'https://sm.ign.com/ign_kr/gallery/l/lion-king-/lion-king-trailer-comparison_fbap.jpg',
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: 'https://main--leafy-dango-e9fd54.netlify.app',
        webUrl: 'https://main--leafy-dango-e9fd54.netlify.app',
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 1045,
    },
    buttons: [
      {
        title: '지금 검사하기',
        link: {
          mobileWebUrl: 'https://main--leafy-dango-e9fd54.netlify.app',
          webUrl: 'https://main--leafy-dango-e9fd54.netlify.app',
        },
      },
    ],
  });
}

$("#A").click(function() {

  if (num === 13) {
    $("#qna").hide();
    $("#result").show();
  
    let mbti = "";
    eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
    snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
    tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
    jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
  
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else { //버튼 클릭시 점수 계산

    selectedType = question[num]['type'];

    if (selectedType === 'EI') { eiTypeScore++; }
    else if (selectedType === 'SN') { snTypeScore++; }
    else if (selectedType === 'TF') { tfTypeScore++; }
    else if (selectedType === 'JP') { jpTypeScore++; }

    next(); 
  }
});

$("#B").click(function() {
  if (num === 13) {
    $("#qna").hide();
    $("#result").show();
  
    let mbti = "";
    eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
    snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
    tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
    jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
  
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else { //버튼 클릭시 점수 계산
    next(); 
  }
});