function validateForm() {
	var unq_id = document.forms["add-unq-form"]["unq_id"].value;
	unq_id = unq_id.toUpperCase();
	console.log(unq_id);
    if(unq_id == '') {
        alert("Please Enter Unique ID");
		return false;
	}
	
	else if(unq_id != 'TEAM1' && unq_id !=  'TEAM2' && unq_id !=  'TEAM3' && unq_id !=  'TEAM4' && unq_id !=  'TEAM5' && unq_id !=  'TEAM6' && unq_id !=  'TEAM7' && unq_id !=  'TEAM8' && unq_id !=  "TEAM9" && unq_id !=  "TEAM10") {
		alert("Please Enter Valid Unique ID");
		return false;
	}
	
	else if(unq_id != ''){
		localStorage.setItem("uniqueID",unq_id.toUpperCase());
		document.location.href = 'FirstRnd.html';
	}
	
}

async function ded(){
	var haha = document.getElementById('first_rnd_txt').value;
	if(haha == '') {
		alert('Please Enter Movie Name Before Proceeding');
		return false;
	}
	else if(haha != ''){
		var get_ur_minues = document.getElementById('minutes').textContent;
		var get_ur_seconds = document.getElementById('seconds').textContent;
		localStorage.setItem("minutesTot",get_ur_minues);
		localStorage.setItem("secondsTot",get_ur_seconds);
		//localStorage.setItem("first_rnd_txt",haha);
		// setTimeout(function(){url = "http://127.0.0.1:5000/api/blindCheckMovie/" + haha;window.location = url;},500);
		//url = "http://127.0.0.1:5000/api/blindCheckMovie/" + haha;

		let res = await (await fetch(localStorage.url + '/api/blindCheckMovie/' + haha.toUpperCase())).json();
		localStorage.accuracy = res.message;
		// alert(`
		// 	min: ${get_ur_minues} \n
		// 	sec: ${get_ur_seconds} \n
		// 	score: ${res.message}
		// `);
		window.location = "submit.html";
	}
}


var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  var minutesLabel = document.getElementById("minutes");
  var secondsLabel = document.getElementById("seconds");
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function alpha(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57) || k == 32);
}

function showDiffImg(){
	var getID = localStorage.getItem("uniqueID");
	if(getID.toUpperCase() == 'TEAM1'.toUpperCase()){
		document.getElementById("imageView").src="images/1.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM2'.toUpperCase()){
		document.getElementById("imageView").src="images/2.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM3'.toUpperCase()){
		document.getElementById("imageView").src="images/3.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM4'.toUpperCase()){
		document.getElementById("imageView").src="images/4.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM5'.toUpperCase()){
		document.getElementById("imageView").src="images/5.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM6'.toUpperCase()){
		document.getElementById("imageView").src="images/6.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM7'.toUpperCase()){
		document.getElementById("imageView").src="images/7.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM8'.toUpperCase()){
		document.getElementById("imageView").src="images/8.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM9'.toUpperCase()){
		document.getElementById("imageView").src="images/9.jpg";
	}
	else if(getID.toUpperCase() == 'TEAM10'.toUpperCase()){
		document.getElementById("imageView").src="images/10.jpg";
	}
	localStorage.url = "http://127.0.0.1:5000";
}

function allover(){
	document.getElementById('team_id').innerHTML = localStorage.uniqueID;
	var me_mc_hu = localStorage.minutesTot +":"+ localStorage.secondsTot;
	document.getElementById('minu_f').innerHTML = me_mc_hu;
	document.getElementById('acc_f').innerHTML = localStorage.accuracy;
}



