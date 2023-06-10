def Comment_to_Json(queries):
    result = []
    for query in queries:
        comment = {}
        comment["id"] = query.id
        comment["author"] = query.author.get_full_name()
        comment["content"] = query.content
        comment["updated_at"] = query.updated_at.strftime('%Y-%m-%d %H:%M')
        comment["likes"] = query.likes
        result.append(comment)

    return result

def Post_to_Json(query):
        post = {}
        post["id"] = query.id
        post["title"] = query.title
        post["author"] = query.author.get_full_name()
        post["content"] = query.content
        post["image"] = query.image.url
        post["updated_at"] = query.updated_at.strftime('%Y-%m-%d %H:%M')
        post["likes"] = query.likes
        post["comment"] = Comment_to_Json(query.comment_set.all())
        return post

def PostList_to_Json(queries):
    postlist = []
    for query in queries:
        post = {}
        post["id"] = query.id
        post["title"] = query.title
        post["author"] = query.author.get_full_name()
        post["updated_at"] = query.updated_at.strftime('%Y-%m-%d %H:%M')
        post["likes"] = query.likes
        postlist.append(post)
    return postlist
