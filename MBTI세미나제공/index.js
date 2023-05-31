var num = 1;

function start() {
    $("#main").hide();
    $("#qna").show();
    next();
}

function next() {
    $(".progress-bar").attr("style", "width: calc(100 / 12 * " + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}

$("#A").click(function () {
    if(num == 13) {
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
$("#B").click(function () {
    if(num == 13) {
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

function shareMessage() {
  if (!Kakao.isInitialized()) Kakao.init('e000a03e99ca848d594bad81dfb6cf88');

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '아기사자 MBTI 테스트',
      description: 'mbti 테스트',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.dongascience.com%2Fnews.php%3Fidx%3D21095&psig=AOvVaw2PDkzt5Ef-5fCN-KbfxKTj&ust=1685610114680000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPj25JKZn_8CFQAAAAAdAAAAABAE',
      link: {
        mobileWebUrl: 'https://dashing-hamster-4e36ef.netlify.app',
        webUrl: 'https://dashing-hamster-4e36ef.netlify.app',
      },
    },
    buttons: [
      {
        title: '실행하기',
        link: {
          mobileWebUrl: 'https://dashing-hamster-4e36ef.netlify.app',
          webUrl: 'https://dashing-hamster-4e36ef.netlify.app',
        },
      },
    ],
  });
}
