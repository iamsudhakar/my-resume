function myFunction() {
	alert("Hello! Thank You for looking into my profile. Currently am not looking for any job change.");
}

today = new Date()
start = new Date(2014,06,04) // remember this is equivalent to 07 04 2010
//dates in js are counted from 0, so 06 is july
doj = new Date (2024,01,01)

function mn(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
	var y = Math.floor(days/365);
	var ndays = days-(365*y)
	var m = Math.floor(ndays/30);

	if (y == 0){
	}else if(y == 1){
		document.write(y +" year and ");
	}else{
		document.write(y +" years and ");
	}
	
	if (m == 0){
		document.write(m + " month");
	}else if(m == 1){
		document.write(m + " month");
	}else{
		document.write(m + " months");
	}
}