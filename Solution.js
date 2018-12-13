function test(argument) {
	// body...
	return argument;
}

//const a = test(2);

function reverseString(str){
	// var revS = str.split('')
	// 			  .reverse()
	// 			  .join('');
	// return revS;

	var revS = '';
	for(var i = str.length-1  ; i >= 0; i--){
		//console.log(str[i]);
		revS += str[i] + '';
		//console.log(revS);
	}	
return (revS);
	
}

//const value = reverseString('Hello')

function famousFizzBuzz(number){
	if(number%3 == 0 && number % 5 == 0)
		return 'FizzBuzz';
	if(number%3 ==0 )
		return 'Fizz'
	if(number%5 ==0 )
		return 'Buzz'
	else
	 return 'Neither! Try another number';
	// console.log('Enter a number');
	// var userInput = readLine();
	// console.log(userInput); Doesn't work, need to check - readLine() specific to spiderMonkey, Firefox
}

//const value = famousFizzBuzz(7)
function Palindrome(string){
var check = '';
	for(var i = 0 ; i <string.length / 2; i++){
		if(string[i] === string[string.length-i-1]){
			check = 'Palindrome'
		}
		else
			check ='Not a Palindrome'
	}
return check;
}

//const value = Palindrome('Madam');
function makeAllFirstLettersCaps(str){
	// str.split(' ')
	//    .map(word => console.log(word[0].toUpperCase()))
	var convert = str.split(' ')
	    .map(word =>word[0].toUpperCase()+word.substring(1))
	    .join(' ')
	return convert;
} 
//const value = makeAllFirstLettersCaps('I am a student');

function createAnId(str){
	var id = '';
	var temp = str;

	for(var i = 0 ; i < temp.length ; i++){
		id += str[i];
		if(i+1 === temp.length/2){
			id += '-'
		}
		else{
			
			var rd = Math.floor((Math.random() * temp.length) + 1);
			console.log(rd);
			if(i === rd || i === rd +1 ){
				id += '^'
			}

		}
	}
	
	return id;

}
//const value = createAnId('SomeGuy');
function maxChar ( str ){
str= str.toLowerCase();
const count = {};
var maxChar = 0 ;
var maxLetter ='';
	for(var i = 0; i < str.length ; i++){
		if(count[str[i]]){
			count[str[i]]++;
			console.log(count[str[i]])
		}
		else{
			count[str[i]] = 1;
		}
		if(count[str[i]] >= maxChar){
		maxChar = count[str[i]];
		maxLetter = str[i];
		console.log(maxLetter, ' repeats ', maxChar, ' times  till now')
		}
		}
		
		return maxLetter;
}
// const value = maxChar('This-is&a-wonderful+string');
//const value = maxChar('Einstein');

function reverseAnumber(number){
var toString = String(number);
//console.log(toString.split('').reverse('').join(''));
toString = toString.split('').reverse('').join('');
return toString;
}

const value = reverseAnumber(74);
console.log(value);