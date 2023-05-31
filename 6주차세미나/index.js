var num = 1;

function start() {
  $("#main").hide();
  $("#qna").show();
  next();
}

function next() {
  if (num == 13) {
    //결과 계산
    $("#qna").hide();
    $("#result").show();

    var mbti = "";
    $("#EI").val() < 2 ? (mbti += "I") : (mbti += "E");
    $("#SN").val() < 2 ? (mbti += "N") : (mbti += "S");
    $("#TF").val() < 2 ? (mbti += "F") : (mbti += "T");
    $("#JP").val() < 2 ? (mbti += "P") : (mbti += "J");

    console.log(mbti);
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else {
    $(".progress-bar").attr("style", "width:calc(100/12*" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").valueOf(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
  }
}

$("#A").click(function () {
  var type = $("#type").val();
  var preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next();
});
$("#B").click(function () {
  next();
});

function shareURL() {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);

  const url = window.document.location.href;
  dummy.value = url;

  navigator.clipboard
    .writeText(dummy.value)
    .then(() => {
      alert("복사가 완료되었습니다.");
    })
    .catch((err) => {
      console.log("err:", err);
    });

  document.body.removeChild(dummy);
}

// SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init("28f92757dcdcca2dc9db19f9611de7bd");

// SDK 초기화 여부를 판단합니다.
console.log(Kakao.isInitialized());

function shareMessage() {
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "아기사자 MBTI 테스트",
      description:
        "나는 어떤 아기사자일까요? MBTI 기반으로 알아보는 아기사자 테스트",
      imageUrl: "./image/ESFJ.png",
      link: {
        mobileWebUrl: "http://127.0.0.1:5500/index.html",
        webUrl: "http://127.0.0.1:5500/index.html",
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "http://127.0.0.1:5500/index.html",
          webUrl: "http://127.0.0.1:5500/index.html",
        },
      },
    ],
    // 카카오톡 미설치 시 카카오톡 설치 경로이동
    installTalk: true,
  });
}
