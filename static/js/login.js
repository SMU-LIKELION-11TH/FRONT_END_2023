function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

function onSubmitLogin(){
    var username = $('#username').val();
    var password = $('#password').val();

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/account/user/login/',
        contentType: 'application/json',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
          },
        data: JSON.stringify({
            'username' : username,
            'password' : password
        }),
        success : function(data){
            alert('로그인을 성공했습니다.');
            location.href = "/";
        },
        error: function(request, status, error){
            alert('로그인에 실패했습니다.');
        }
    })
}
function onSubmitLogin_cbv(){
    $("#form_submit").trigger("click")
}
