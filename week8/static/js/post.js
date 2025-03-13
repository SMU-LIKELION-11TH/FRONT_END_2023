$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/post/list/',
        contentType: 'application/json',
        success: function(data){
            for(var i = 0; i < data.posts.length; i++){
                var newElement = document.createElement('div');
                newElement.innerHTML = "<div class='post_list' onClick='moveDetailPost(" + data.posts[i].id + ");'> <div class='post_title'><h3>" + data.posts[i].title + "</h3></div> <div class='post_time'><h3>" + data.posts[i].updated_at + "</h3></div> </div>";

                const element = document.querySelector('.post_list_wrap');
                element.appendChild(newElement);
            }
        }, error: function(){
            alert('게시글을 가져올 수 없습니다.');
        }
    })
})

function moveDetailPost(id){
    var PostId = localStorage.setItem('postId', id);
    window.location='/post/detail/'+id+"/cbv";
}

function movePost(){
    window.location = '/post/create/';
}

