let num =1;

// 메인에서 문제로 넘어가는 함수
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

function shareURL() {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);

    const url = window.document.location.href;
    dummy.value = url;

    navigator.clipboard
        .writeText(dummy.value)
        .then(() => {
            alert("복사가 완료되었습니다");
        })
        .catch((err) => {
            console.log("err:", err);
        });

        document.body.removeChild(dummy);
} 

function shareMessage() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: 'x카카오공유하기 시 타이틀',
          description: '카카오공유하기 시 설명',
          imageUrl: './image/ENFP.png',
          link: {
            webUrl: 'https://6476288a70173a12d8dbe060--enchanting-lollipop-bf5ced.netlify.app',
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              webUrl: 'https://6476288a70173a12d8dbe060--enchanting-lollipop-bf5ced.netlify.app',
            },
          },
        ],
        // 카카오톡 미설치 시 카카오톡 설치 경로이동
        installTalk: true,
      })
    }