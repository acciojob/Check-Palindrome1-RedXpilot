// complete the given function

function palindrome(str){
	let strNew = str.toLowerCase();
	let i=0, j=str.length-1;
	while(i<j)
		{
			if(strNew[i++]!=strNew[j--])
				return false;
		}
	return true;
}
module.exports = palindrome
