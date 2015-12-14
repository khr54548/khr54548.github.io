//the following codes in the html file are quoted from http://jscolor.com/
//	<script src="jscolor.js"/></script>
//<input class="jscolor" value="ab2567"></td>



function theDate(){
	document.getElementById("para").innerHTML=Date();
}


function usopinion(){

	var anOpinion = document.getElementById("opinion").value;
	console.log(anOpinion);
}

function iweat(){
	var eat =document.getElementById("eat").value;
	console.log(eat);
}


function count(){
	var count=document.getElementsByClassName("food").value;
}

function background(){
	var color=document.getElementsByClassName('jscolor').value;
}

function first(){
	var first=alert("Welcome!");
}

//the following codes are quoted frem class material of week 10
function Time()
{
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	document.getElementById("clock").innerHTML=hours+":"+minutes+":"+seconds;

	clock=setTimeout(function(){Time()},500);
}

function addZero(digit)
{	if (digit<=9)
	  {		digit="0" + digit;
	  }
	return digit;
}

//the following codes are quoted from: http://www.sivamdesign.com/scripts/dwld/countdw1.txt
//Copyright 2001, Sandeep Gangadharan
function count1() {

itIs = document.month3.count.value + ' ' + document.date3.count.value + ' ' + document.year3.count.value

	now3=new Date();
	setdate=new Date(itIs);

	timer = (setdate - now3) / 1000 / 60 / 60 / 24;
	timer = Math.round(timer);

  document.days3.count.value = timer;
  }
