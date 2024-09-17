def object_to_User(obj):
    user = dict(vars(obj))

    user['username'] = obj.username
    user['password'] = "****"
    user["first_name"] = obj.first_name
    user["last_name"] = obj.last_name
    user["email"] = obj.email

    return user
