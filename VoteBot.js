//Developped by Ebium © on 09/03/2022


function vote(item){
	var timetowait = 7440000;

	let name = "";
	
	if (item.nick) {
		name = item.nick;
	}

	document.getElementsByName("username")[0].value=name;
	document.querySelectorAll('input[value="VOTER"]')[0].click();
    document.getElementsByClassName('website')[0].click();
    
	setTimeout(() => {
		var testerror = document.getElementById('website-error').getElementsByClassName('alert alert-danger');

		if (testerror.length > 0){
			timetowait = 0;
			var errortxt = document.getElementById('website-error').textContent;
			var hou = 0;
         	var min = 0;
            var sec = 0;
			
			if (errortxt.includes("heure")){

                		hou = parseInt(errortxt.substr(68, 5));
                		timetowait+=(hou * 60 * 60 * 1000)
            
                		if (errortxt.includes("minute")){
                    			min = parseInt(errortxt.substr(79, 5));
                    			timetowait+=(min*60*1000)
                		}
                		else{
                    			sec = parseInt(errortxt.substr(79, 5));
                    			timetowait+=(sec*1000)
                		}
                
                		if (errortxt.includes("seconde")){
                    			sec = parseInt(errortxt.substr(90, 5));
                    			timetowait+=(sec*1000)
                		}
            		}
            		else {
                		if (errortxt.includes("minute")){
                    			min = parseInt(errortxt.substr(68, 5));
                    			timetowait+=(min*60*1000)
                		}
                		else{
                    			sec = parseInt(errortxt.substr(68, 5));
                    			timetowait+=(sec*1000)
                		}
                
                		if (errortxt.includes("seconde")){
                    			sec = parseInt(errortxt.substr(80, 5));
                    			timetowait+=(sec*1000)
                		}
            		}
        	}
        
		else {
			setTimeout(() => {  //attend 15 secondes avant de récup
				document.getElementsByClassName('btn-block get-reward')[0].click();
			}, 15*1000)

		}
        
		setTimeout(() => {  //attend 2 heures et 4 minutes
			document.querySelectorAll('a[href="/vote"]')[0].click();
		}, timetowait);
		
	}, 1000)
}

function onError(error) {
	console.log("Unknown Error");
}
  
let getting = browser.storage.sync.get("nick");
getting.then(vote, onError);

