var btn = document.getElementById("btn1");
var w = document.getElementById("btn1").style.width;
var h = document.getElementById("btn1").style.height;
var tSize = document.getElementById("btn1").style.fontSize;
var btnTxt = document.getElementById("btnTxt");
var bText = document.getElementById("bText");
var iText = document.getElementById("iText");
var bBtn = document.getElementById("bBtn");
var borderDropdown = document.getElementById("borderDropdown");
var pixelDrop = document.getElementById("pixelDrop");
var percentDrop = document.getElementById("percentDrop");
var b = document.getElementById("btn1").style.borderWidth;
var btnColor = document.getElementById("btnColor");
var btnw = 10;
var btnh = 5;
var sPer = document.getElementById("sPer");
var topColor = document.getElementById("topColor");
var botColor = document.getElementById("botColor");
var hcolor = document.getElementById("hcolor");
var gradAngle = 0;
var grad1 = document.getElementById("grad1");
var grad2 = document.getElementById("grad2");
var sog = document.getElementById("sog");
var solidDrop = document.getElementById("solidDrop");
var gradientDrop = document.getElementById("gradientDrop");
var noBack = document.getElementById("noBack");
var btnOpacity = document.getElementById("btnOpacity");
var btnO = "";
var bOpacity;
var btnString;

function buttonOpacity(input) {
	bOpacity = input.value / 10;
	btnString = btn.style.background;
	if (btnO.charAt(3) == "a") {
		btn.style.background = btnO + ", " + bOpacity + ")";
		$("#bBackground").text("background: " + btnO + ", " + bOpacity + ");");
	} else {
		btnO = btnString.toString();
		btnO = btnO.substring(0, btnO.length - 1);
		btnO = btnO.substr(0, 3) + "a" + btnO.substr(3);
		btn.style.background = btnO + ", " + bOpacity + ")";
		$("#bBackground").text("background: " + btn.style.background + ";");
	}
}

function btnWidth(input) {
	btn.style.width = input.value * 5 + btnw;
	$("#bWidth").text("width: " + btn.style.width + ";");

};
function btnHeight(input) {
	btn.style.height = input.value * 5 + btnh;
	$("#bHeight").text("height: " + btn.style.height + ";");
};
function changeBackgroundColor(input) {
	if (noBack.checked != true) {
		btn.style.background = input.value;
		btnString = btn.style.background;
		btnO = btnString.toString();
		if (btnO.charAt(3) == "a") {
			$("#bBackground").text("background: " + btnO + ", " + bOpacity + ");");
		} else {
			$("#bBackground").text("background: " + btn.style.background + ";");
		}
	}
};
function changeFontColor(input) {
	btn.style.color = input.value;
	$("#bColor").text("color: " + btn.style.color + ";");
};
function textSize(input) {
	btn.style.fontSize = tSize + input.value + "px";
	$("#bTextSize").text("font-size: " + btn.style.fontSize + ";");

};
function boldText() {
	if (bText.checked == true) {
		btnTxt.style.fontWeight = "bold";
		$("#bBold").text("font-weight: " + btnTxt.style.fontWeight + ";")
	} else {
		btnTxt.style.fontWeight = "normal";
		$("#bBold").text("font-weight: " + btnTxt.style.fontWeight + ";")
	}
};
function italicText() {
	if (iText.checked == true) {
		btnTxt.style.fontStyle = "italic";
		$("#bItalic").text("font-style: " + btnTxt.style.fontStyle + ";")
	} else {
		btnTxt.style.fontStyle = "normal";
		$("#bItalic").text("font-style: " + btnTxt.style.fontStyle + ";")
	}
};
function borderBtn(input) {
	if (input.checked == true) {
		borderDropdown.style.display = "block";
	} else {
		borderDropdown.style.display = "none";
		$("#bBorderStyle").text("");
	$("#bBorderWidth").text("");
	$("#bBorderColor").text("");
		btn.style.borderWidth = 0;
	}
};
function percentOrPixel(input) {
	if (input == percent) {
		percentDrop.style.display = "block";
		pixelDrop.style.display = "none";
		btnw = w + "%";
		btnh = h + "%";

	} else {
		pixelDrop.style.display = "block";
		percentDrop.style.display = "none";
		btnw = w + "px";
		btnh = h + "px";
	}
};

function borderWidth(input) {
	btn.style.borderWidth = b + input.value + "px";
	btn.style.borderStyle = "solid";
	btn.style.borderColor = "#303030";
	$("#bBorderStyle").text("border-style: solid;");
	$("#bBorderWidth").text("border-width: " + btn.style.borderWidth + ";");
};

function borderColor(input) {
	btn.style.borderColor = input.value;
	$("#bBorderColor").text("border-color: " + btn.style.borderColor + ";");
};

function borderCurve(input) {
	btn.style.borderRadius = input.value + "px";
	$("#bRadius").text("border-radius: " + btn.style.borderRadius + ";");
};

function noBackground(input) {
	if (input.checked == true) {
		btn.style.background = "none";
		$("#bBackground").text("background: none;");
	} else {
	}
};

function slantBtn(input) {
	if (input.checked == true) {
		btn.classList.add("slant");
		sPercent.style.display = "block";
	} else {
		btn.classList.remove("slant");
		sPercent.style.display = "none";
	}
}

function btnGradient() {
	if (noBack.checked != true) {
		btn.style.background = "linear-gradient(" + gradAngle + "deg," + grad1.value + ", " + grad2.value + ")";
		$("#bBackground").text("background: linear-gradient(" + gradAngle + "deg, " + grad1.value + ", " + grad2.value + ");");
	}
}

function gradientAngle(input) {
	gradAngle = input.value;
	btnGradient();
}

function solidOrGradient(input) {
	if (input == gradient) {
		solidDrop.style.display = "none";
		gradientDrop.style.display = "block";
	} else if (input == solid) {
		solidDrop.style.display = "block";
		gradientDrop.style.display = "none";
	} else {
		solidDrop.style.display = "none";
		gradientDrop.style.display = "none";
	}
}

$(".slideLink").click(function(i) {
    i.preventDefault();
    var x = $(this).attr("href");
    $('html,body').animate({scrollTop: $(x).offset().top},'slow');
});
