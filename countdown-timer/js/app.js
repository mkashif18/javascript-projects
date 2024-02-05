const end_date = "01 January 2034 12:00 AM";

document.getElementById('end-date').innerText = end_date;
const inputs = document.querySelectorAll('input');

// Arrow function
const clock = () => {
	const end = new Date(end_date);
	// console.log(end);

	const now = new Date();
	// console.log(now);

	const diff = ((end - now)/1000);
	// console.log(diff);

	if(diff < 0)return;
	
	const days = Math.floor(diff/24/60/60);
	// console.log(days);
	inputs[0].value = days;

	const hrs = Math.floor(diff/60/60)%24;
	// console.log(hrs);
	inputs[1].value = hrs;

	const mins = Math.floor(diff/60)%60;
	// console.log(mins);
	inputs[2].value = mins;

	const sec = Math.floor(diff)%60;
	// console.log(sec);
	inputs[3].value = sec;

}

clock();

// 1 day = 24 hrs
// 1 hr = 60 mins
// 1 min = 60 sec

// Arrow function or anonymous function without function keyword
setInterval(() => {
	clock();
}, 1000)

// Anonymous function with function key word
// setInterval(function(){
// 	clock();
// }, 1000);