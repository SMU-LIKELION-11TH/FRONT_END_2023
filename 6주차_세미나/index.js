function start() {
    $("#main").hide();
    $("#qna").show();
    next;
}

function next() {
    $(".progress-bar").attr("style", "width: calc(100 / 12 * " + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").var(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);
    num++;
}

// 버튼 클릭시 
// $("#A").click(function () {
//     var type = $("#type").val();
//     var preValue = $("#" + type).val();
//     $("#" + type).val(parseInt(preValue) + 1);
//     next();
// });
// $("#B").click(function() {
//     next();
// });