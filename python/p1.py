def ask(name="111"):
    print(name)


class Person:
    def __init__(self):
        print("init")


def decorate_de():
    print("dec start")
    return ask


asktest = decorate_de()
asktest("aaa")
obj_list = []
obj_list.append(ask)
obj_list.append(Person)
for item in obj_list:
    print(item())

# my_func = ask
# my_func("zhengqiang")
