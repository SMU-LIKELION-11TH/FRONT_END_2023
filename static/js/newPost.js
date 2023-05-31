function completeNewPost(){
    $.ajax({
        type: '',
        url: '',
        contentType: 'application/json',
        data: JSON.stringify({
        }),
        success: function(data){
        }, error: function(){
        }
    })
}

function completeNewPost_cbv(){
    $("#form_submit").trigger("click")
}
