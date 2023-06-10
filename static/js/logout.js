function logout(){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/account/user/logout/',
        contentType: 'application/json',
        success: function(data){
            alert('로그아웃 성공');
            window.location ='/';
        },error: function(){
            alert('로그아웃 실패');
        }
    })
}