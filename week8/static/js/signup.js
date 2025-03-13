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

 function onSubmitSignup(){
     var username = $('#username').val();
     var password = $('#password').val();
     var first_name = $('#first_name').val();
     var last_name = $('#last_name').val();
     var email = $('#email').val();

     $.ajax({
         type: 'post',
         url: 'http://127.0.0.1:8000/account/user/create/',
         contentType : 'application/json',
         headers: {
             'X-CSRFToken': getCookie('csrftoken')
         },
         data: JSON.stringify({
            'username' : username,
            'password' : password,
            'first_name' : first_name,
            'last_name' : last_name,
            'email' : email,
         }),
         success : function(data){
            alert('Success');
         },
         error: function(request, status, error){
            alert('Error');
         }
     })
 }
function onSubmitSignup_cbv(){
    $("#form_submit").trigger("click");
}
