var num = 1;

function start() {
    $("#main").hide();
    $("#qna").show();
    next();
}

function next() {
    if (num == 13) {

        $("#qna").hide();
        $("#result").show();
    
        var mbti = "";

        $("#EI").val()<2?(mbti += "I"):(mbti += "E");
        $("#SN").val()<2?(mbti += "N"):(mbti += "S");
        $("#TF").val()<2?(mbti += "F"):(mbti += "T");
        $("#JP").val()<2?(mbti += "P"):(mbti += "J");
    
        console.log(mbti);
        $(".subtitle").html(result[mbti]["subtitle"]);
        $(".explain").html(result[mbti]["explain"]);
        $("#result_img").attr("src", result[mbti]["img"]);
    } else {
        $(".progress-bar").attr("style", "width: calc(100 / 12 * "+ num +"%)");
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
$("#A").click(function() {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
    next();   
});
$("#B").click(function() {
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
            alert("복사가 완료되었습니다");
        })
        .catch((err) => {
            console.log("err:", err);
        });

    document.body.removeChild(dummy);
}

function shareMessage() {
    if (!Kakao.isInitialized()) Kakao.init('c089c8172def97eb00c07217cae17495');
  
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '아기사자 MBTI 테스트',
        description: 'MBTI 테스트',
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.blizzard.com%2Fko-kr%2Fheroes-of-the-storm%2F23820714%2F%25ED%259E%2588%25EC%2596%25B4%25EB%25A1%259C%25EC%25A6%2588-%25EC%2598%25A4%25EB%25B8%258C-%25EB%258D%2594-%25EC%258A%25A4%25ED%2586%25B0-%25ED%258C%25A8%25EC%25B9%2598-%25EB%2585%25B8%25ED%258A%25B8-2022%25EB%2585%2584-7%25EC%259B%2594-9%25EC%259D%25BC&psig=AOvVaw2DzBGvTm3-zarUSubivzMy&ust=1685809128761000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODOr8T-pP8CFQAAAAAdAAAAABBO',
        link: {
          mobileWebUrl: '',
          webUrl: '',
        },
      },
      buttons: [
        {
          title: '실행하기',
          link: {
            mobileWebUrl: '',
            webUrl: '',
          },
        },
      ],
    });
  }