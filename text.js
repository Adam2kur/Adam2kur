

function funct(fun,arg)
{
    return  fun(arg)
}
function fun(x)
{
    return Math.floor((x * 100)/5)
}
 cout = console.log

cout((funct(fun,3)))


 arr = [1,2,3,4,5,6,7]
p = arr.sort(sum);
function sum(a,b){
    return b +  a 
}
console.log(p)