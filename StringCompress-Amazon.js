// function Hi(){
//     return 'Hi there Pal'
// }
// console.log(Hi());

// PROBLEM STATEMENT - AMAZON
// Given a string "aaabbbcc", compress it, = "a3b3c2" . 
//Given  that output string's length is always smaller than input string, 
//you have do it inplace. No extra space

function compress(a){
var split  = a.split('');
return split.reduce((acc,itr)=>{

    const check = acc.filter(exists => exists.itr === itr)[0]
    // const val =acc.filter(exists => console.log(exists))[0]
    // console.log('val' + val  + 'itr ' + itr)
    check !== undefined
     ? check.times++
     : acc.push({itr, times:1})
   //  console.log('....'+acc.map(a=>a.itr))
    return acc
},[])

}

const output = compress('aaabbbcc');
var str='';
output.map( ({itr,times})=>str+=(itr+times))
console.log(str)

// str outputs a3b3c2