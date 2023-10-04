
class Number :
    def __init__(self, data : str, id : int) :
        if data == 'Adamsy' :
            print(data +' welcome your id is ' + str(id))
        else :
            print('access not granted')
            
Number('Adamsy', 123)
name = input(int(6))
print(name) 