const sto = function(num){
	if (num===0){
		return '';
	}
return "*" + sto(num-1);
}
const prob = function(a){
	if(a===0){

return '';	
}

return "" + prob(a-1);
}
const AllTogether = function(st,sp,a){
	console.log(prob(sp) + sto(st+1));
	AllTogether((a-1)*2,0,a);
}
triangleStars(4);


const pow = function(got,b){
	if(b ===1){
		return got;
	}
		return got * pow(got, n - 1);
}
pow(2,3);


const reverse = function(text){
	const val = function(text1,num){
		if(num === 0){
			return '';
		}
		return text1[num-1] + val(text1,num-1)
	}
	return val(text,text.length)
}
const newString = reverse("result");
console.log(newString); 


const skizb = function(num,num2,num3){
	if(num===0){
		return;
	}
	return num2 + num3 + skizb(num-2,num2,num3);
}
const xor = function(num,erk){
	if(num===0){
		return;
	}
	console.log(skizb(erk,"*"," "));
	console.log(skizb(erk," ", "*"));
	return xor(num-2,erk);
}
const checkerboard = function(b){
	xor(b,b);
}
checkerboard(8);

