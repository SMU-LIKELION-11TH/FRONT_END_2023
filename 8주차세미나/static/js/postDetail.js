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
var postId = localStorage.getItem('postId');

function createNewComment(){
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8000/comment/create/',
        contentType: 'application/json',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
          },
        data: JSON.stringify({
            'content' : $('#commentInput').val(),
            'post' : localStorage.getItem("postId")
        }),
        success: function(data){
            alert('댓글이 등록되었습니다.');
            location.reload()
        },error: function(data){
            alert('댓글을 등록하지 못했습니다.');
            location.href = "/account/user/login/"
        }
    })
}

function deletePost(id){
console.log(id)
    $.ajax({
        type: 'DELETE',
        url: 'http://127.0.0.1:8000/post/delete/' + localStorage.getItem("postId") + '/',
        contentType: 'application/json',
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
          },
        success: function(data){
            alert('성공적으로 삭제되었습니다.');
            window.location ='/post/list/cbv/';
        },error: function(data){
            alert('삭제하지 못했습니다.');
        }
    })
}

function moveEditPost(id){
    window.location = '/post/update/'+localStorage.getItem("postId")+"/";
}


