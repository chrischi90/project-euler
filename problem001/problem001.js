var sum = 0;
var n = 1000;

while ( n < 1000) {
	n--;
	if (n % 3 === 0 || n % 5 === 0) {
		sum += n;
	}

	console.log(sum);
	return sum;
}

