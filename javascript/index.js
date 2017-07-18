function grados(){
	var grados=document.getElementById("grados");
	var a=document.getElementById("celsius").value;
	
	var b=(9/5)*a+32;
	//alert("la temperatura"+b);
	document.getElementById("respuesta").innerHTML=b;
}