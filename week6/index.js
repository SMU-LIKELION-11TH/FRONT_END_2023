var num=1;


function start() {
    $("#main").hide();
    $("#qna").show();
    next();
}

function next(){
    $(".progress-bar").attr("style","width: calc(100 / 12 * " + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}

//버튼 클릭시 점수 계산
$("#A").click(function () {
    if(num == 13){
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
        var type = $("#type").val();
        var preValue = $("#" + type).val();
        $("#" + type).val(parseInt(preValue) + 1);
        next();
    }
});
$("#B").click(function () {
    if(num == 13){
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
        next();
    }
});


function shareURL(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.")
}


function shareMessage() {
    if (!Kakao.isInitialized())Kakao.init('26866234d1065d4d0c257728098ef13b');

    Kakao.Share.sendDefault({
    // container: ".kakao-link", // 공유하기 기능을 부여할 DOM container
    objectType: "feed", // 피드타입
    content: {
      title: "아기사자 MBTI 테스트",
      description:
        "나는 어떤 아기사자일까요? 지금 당장 자신의 아기사자 유형을 알아보아요!🦁",
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODAxMjRfMjYz/MDAxNTE2ODA1Mzc0MzM4.kahHWMDOExmPXTUTLlp1rMp2iodn2fNbT6vnrlfNmugg.Yc-KvgokQXx7gRiTG-mrLlflABh8Z75AGkuMBnbMaBUg.JPEG.eguitar97/F22A7CDF-40E0-490E-80B9-93A713DADDB4.jpeg?type=w2",
      link: {
        mobileWebUrl: 'https://cozy-mooncake-f08876.netlify.app',// 카카오 앱에서 확인할 때 연결될 웹 url
        webUrl: 'https://cozy-mooncake-f08876.netlify.app', // 카카오 PC에서 확인할 때 연결될 웹 url
         
      },
    },
    buttons: [
        {
          title: '검사하러 가기',
          link: {
            mobileWebUrl: 'https://cozy-mooncake-f08876.netlify.app',
            webUrl: 'https://cozy-mooncake-f08876.netlify.app',
          },
        },
      ],
  });
}
