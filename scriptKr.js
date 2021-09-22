//Numer 1
const Name = "Yana";
//Numer 2
const BirthDay=10.2002;
//Numer 4
function range(start,end) {
	let result =[];
	let index = 0;
	for(let i=start;i<=end;i++,index++)
		result[index]=i;
	return result
	
}
//Numer 5
function rangeOdd(start,end){
	let result = range(start,end);
	for(let i=0;i<result.length;i++)
	{
		if (result[i]%2===1)
		{
			result.splice(i,1);
			i--;
		}
	}
}

//Numer 6
function average(a,b){
	return(a+b)/2;
}

//Numer 7
function square(x){
	return(x*x);
}
//Numer 8
function cube(x){
	return((x*x*x)-(x*x));
}



alert('Задание 1 = '+Name);
alert('Задание 2 = '+BirthDay);
let arr=range(-15,15);
alert('Задание 4 = '+arr);
arr=rangeOdd(-15,15);
alert('Задание 5 = '+arr)
alert('Задание 6 = '+average(6,10));
alert('Задание 7 = '+square(6));
alert('Задание 8 = '+cube(4));



