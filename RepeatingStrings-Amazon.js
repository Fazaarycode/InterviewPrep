function displayMostRepeatedString(apple){
    var count = apple.split(' ');

    return count.reduce((acc,itr)=>{
        const check = acc.filter(exists => exists.itr===itr)[0]

        check !==undefined
        ? check.times++
        :acc.push({itr, times:1})
        return acc;
    },[])
}



const apple = 'Apple is my favorite fruit. Apple has many great benefits. Apple a day, keep doctor away'

const output = displayMostRepeatedString(apple);
var max = output.reduce((prev,current)=>{
    return (prev.times>current.times) ? prev : current
})

console.log(max.itr); //Apple
//max return object { itr: 'Apple', times: 3 }