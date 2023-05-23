function completeNewPost(){
    $.ajax({
        type: 'PUT',
        url: 'http://127.0.0.1:8000/post/create/',
        contentType: 'application/json',
        data: JSON.stringify({
            'title' : $('#postTitle').val(),
            'content' : $('#postContent').val(),
        }),
        success: function(data){
            alert('글 등록을 완료했습니다.');
            window.location = './post.html';
        }, error: function(){
            alert('글 등록을 실패했습니다!!!!');
        }
    })
}