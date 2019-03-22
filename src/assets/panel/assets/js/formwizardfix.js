var curr = 0;
function avpage(){
curr++;
if(curr == 1){
	document.getElementById("paso2").style.display = "block";
	document.getElementById("paso1").style.display = "none";
	document.getElementById("paso1-1").style.display = "none";
	document.getElementById("progressbar").style.width = "66.66666666666666%";
	document.getElementById("anterior").style.display = "";
	document.getElementById("link2").className += " activo";
	document.getElementById("siguiente").disabled = true;
	document.getElementById("container").style.height = "920px";
	
	}

if(curr == 2){
	document.getElementById("paso3").style.display = "block";
	document.getElementById("paso2").style.display = "none";
	document.getElementById("paso1").style.display = "none";
	document.getElementById("paso1-1").style.display = "none";
	document.getElementById("progressbar").style.width = "99.99999999999999%";
	document.getElementById("siguiente").style.display = "none";
	document.getElementById("imprimir").style.display = "";
	document.getElementById("link3").className += " activo";
	document.getElementById("container").style.height = "580px";
	}
}

function repage (){
	curr--;
if(curr == 0){
	document.getElementById("paso2").style.display = "none";
	document.getElementById("paso3").style.display = "none";
	document.getElementById("paso1").style.display = "block";
	document.getElementById("paso1-1").style.display = "block";
	document.getElementById("progressbar").style.width = "33.33333333333333%";
	document.getElementById("anterior").style.display = "none";
	document.getElementById("link2").className = "";
	document.getElementById("siguiente").disabled = false;
	document.getElementById("container").style.height = "540px";
	}
if(curr == 1){
	document.getElementById("paso3").style.display = "none";
	document.getElementById("paso2").style.display = "block";
	document.getElementById("paso1").style.display = "none";
	document.getElementById("paso1-1").style.display = "none";
	document.getElementById("progressbar").style.width = "66.66666666666666%";
	document.getElementById("siguiente").style.display = "";
	document.getElementById("imprimir").style.display = "none";
	document.getElementById("link3").className = "";
	document.getElementById("siguiente").disabled = false;
	document.getElementById("container").style.height = "920px";
	}
	
}	

function avpagefav(){
curr++;
if(curr == 1){
	document.getElementById("paso3").style.display = "block";
	document.getElementById("paso1").style.display = "none";
	document.getElementById("paso1-1").style.display = "none";
	document.getElementById("progressbar").style.width = "99.99999999999999%";
	document.getElementById("anterior").style.display = "";
	document.getElementById("imprimir").style.display = "";
	document.getElementById("siguiente").style.display = "none";
	
	}
}

function repagefav (){
	curr--;
if(curr == 0){
	document.getElementById("paso3").style.display = "none";
	document.getElementById("paso1").style.display = "block";
	document.getElementById("paso1-1").style.display = "block";
	document.getElementById("progressbar").style.width = "50.00000000000000%";
	document.getElementById("anterior").style.display = "none";
	document.getElementById("siguiente").style.display = "";
	document.getElementById("imprimir").style.display = "none";
	}	
}	
