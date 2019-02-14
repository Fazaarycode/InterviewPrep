// function Hello(){
//     return 'Hey there, Good to see you again!'
// }
// console.log(Hello())

/* 
Single digit number
subtract from 11
add input + subtracted value eg, abs(6-11) = 5 , output = 6+5 = 11
Double digit number 
Check if already a Palindrome , then add 11 to it , 

*/
function nextDrome(a){
//var compute = a <10 ? Math.abs(11-a) : a<99 ? String(a).split('').reverse().join('') : null
var compute;
if(a<=99){
    var addedValue = (a+10);
    var modulus = addedValue%11;
    compute = addedValue-modulus
}
if(a===99){
    compute = 101;
}
// For numbers % 10 === 0
if(a%10 === 0){
var arr = String(a).split('');
arr[arr.length-1] = arr[0]
compute = arr.join('')
}

return compute;
}

const output = nextDrome(57);

console.log(output)