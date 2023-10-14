class Animal:
    
    def __init__(self, sound,legs) -> None:
          self.sound = sound
          self.legs = legs
    def s(self,s,p):
        self.s = s
        self.p = p
        
class Dog(Animal):
    def __init__(self, sound, legs) -> None:
         super.__init__(sound,legs)
         print('another',legs)
          
Dog(23,'meow')