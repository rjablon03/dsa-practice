def simplify_path(path):
    stack = []

    for directory in path.split("/"):
        if directory == "." or directory == "":
            pass
        elif directory == "..":
            if stack:
                stack.pop()
        else:
            stack.append(directory)

    return "/" + "/".join(stack)

print(simplify_path("/home/../../tmp//./"))