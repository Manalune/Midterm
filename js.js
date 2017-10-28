var bgImg = "";
var TInp = "";
var ColInp = "";

function expandmenu(){
	document.getElementById("Background").style.top = "0px";
	document.getElementById("Background").style.left = "0px";
	document.getElementById("Background").style.height = "300px";
	document.getElementById("BackgroundImageInput").style.bottom = "150px";
	document.getElementById("TitleInput").style.bottom = "120px";
	document.getElementById("DescriptionInput").style.bottom = "90px";
	document.getElementById("ColorsInput").style.bottom = "60px";
	document.getElementById("NewComps").style.bottom = "30px";
	document.getElementById("Menu").style.bottom = "180px";
}

function changeBG(){		
		bgImg = document.getElementById("BackgroundImageInput").value;
		if (bgImg.indexOf("epic") !== -1){
		document.getElementById("Background").style.backgroundImage = "url(img/bg4.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		}
		  else if(bgImg == "bg1"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg1.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		} else if(bgImg == "horse"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg1.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		}else if(bgImg == "bg2"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg2.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		} else if(bgImg == "night"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg2.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		}
		else if(bgImg == "bg3"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg3.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		} else if(bgImg == "mountain"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg3.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		}
		else if(bgImg == "bg4"){
		document.getElementById("Background").style.backgroundImage = "url(img/bg4.jpg)";
		document.getElementById("BackgroundImageInput").value = "";
		}
}	

function changeTitle(){
	TInp = document.getElementById("TitleInput").value;
		document.getElementById("Title").innerHTML = TInp;
		document.getElementById("TitleInput").addEventListener("keyup",function(ev){
		if(ev.keyCode == 13){
		document.getElementById("TitleInput").value = "";
		}
	})
};

function changeDescription(){
	DInp = document.getElementById("DescriptionInput").value;
		document.getElementById("Description").innerHTML = DInp;
		document.getElementById("DescriptionInput").addEventListener("keyup",function(ev){
		if(ev.keyCode == 13){
		document.getElementById("DescriptionInput").value = "";
		}
	})
};


function changeColor(){
	ColInp = document.getElementById("ColorsInput").value;
    document.getElementById("Title").style.color = ColInp;
    document.getElementById("Description").style.color = ColInp;
}



function moveBG(){
	document.getElementById("BackgroundImageInput").addEventListener("keydown", function(ev){
	if(ev.keyCode == 40){
    document.getElementById("Background").style.top =parseInt(document.getElementById("Background").style.top) + 5 + 'px';
} else if(ev.keyCode == 38){
    document.getElementById("Background").style.top =parseInt(document.getElementById("Background").style.top) - 5 + 'px';
	} else if(ev.keyCode == 37){
    document.getElementById("Background").style.left =parseInt(document.getElementById("Background").style.left) - 5 + 'px';
	} else if(ev.keyCode == 39){
    document.getElementById("Background").style.left =parseInt(document.getElementById("Background").style.left) + 5 + 'px';
	} else if(ev.keyCode == 107){
    document.getElementById("Background").style.height = 
    parseInt(document.getElementById("Background").style.height) + 5 + 'px';
	document.getElementById("BackgroundImageInput").value = "";	
	} else if(ev.keyCode == 109){
    document.getElementById("Background").style.height = 
    parseInt(document.getElementById("Background").style.height) - 5 + 'px';
	document.getElementById("BackgroundImageInput").value = "";	
	}
}) ;}


function createBG(Bg){
	var div = document.getElementById("display"),
		
    clone = div.cloneNode(true);
clone.id = "Bg1";
document.getElementById("display").appendChild(clone);
Bg1.class="col-xs-12 col-sm-6 md-4 col-lg-3"
}







document.getElementById("Menu").addEventListener("click", function () {
expandmenu()
	});

document.getElementById("BackgroundImageInput").addEventListener("keyup",function(ev){
	if(ev.keyCode == 13){
changeBG()
}});

document.getElementById("TitleInput").addEventListener("input",function(){
changeTitle()	
	});

document.getElementById("DescriptionInput").addEventListener("input",function(){
changeDescription()	
	});

document.getElementById("ColorsInput").addEventListener("change", function () {	
	changeColor()	
});


document.getElementById("BackgroundImageInput").addEventListener("keydown", function(ev){
moveBG()	
});

document.getElementById("NewComps").addEventListener("click", function () {
createBG()

	});