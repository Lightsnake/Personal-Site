function goldenExperience( hobby ,startYears, startMonth){
    /* I wanna do something with this but i'm not sure yet.*/
        const month = { "January":1,
            "Feburary":2,
            "March":3,
            "April":4,
            "May":5,
            "June":6,
            "July":7,
            "August":8,
            "September":9,
            "October":10,
            "November":11,
            "December":12
}
	/* Calculating for months */ 
	
	var expMonth = 0;
	var currentMonth = new Date().getMonth()+1;
	
	var expM = 0;
	expMonth = month[startMonth];
	for ( var i = 0; i < 12; i++){
		console.log(i);
    	if( expMonth === currentMonth){ 
		expM = i;
		break; 
		}else{
			expMonth++;
			if( expMonth > 12){ expMonth = 1; }
        }
	}

    /* Calculates years */
    
	var currentYear = new Date().getFullYear();
	var expYear = currentYear - startYears;
	if( expM != 0 ){
		expYear --;	
	}
   if ( startYears > currentYear){
    return `Hmm you're a time traveler I see...`
   }

	var statement = `I've been ${hobby} for ${expYear} year ${expM} months!`;
	 
	document.getElementById('skillLength').innerHTML = statement;
		
}



/* Input starting year and month as a string */

goldenExperience( "programming" , 2018, "July");



