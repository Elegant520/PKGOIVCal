<html>
<head><title>Pokemon Go IV Calculator</title></head>
<script src="constDefine.js?v=1.0.2" type="text/javascript"></script>
<script src="pokemon.js?v=1.0.0" type="text/javascript"></script>
<script src="chineseName.js?v=1.0.0" type="text/javascript"></script>
<script src="dustLevel.js?v=1.0.2" type="text/javascript"></script>
<script type="text/javascript">
function ValidateNumber(e, pnumber){
    if (!/^\d+$/.test(pnumber)){
        var newValue =/^\d+/.exec(e.value);
        if (newValue != null){
            e.value = newValue;
        } else {
            e.value = "";
        }
    }
	return false;
}
</script>
<body>
<div id="pmTable" align="center"></div>
<form action="getIV.php" method="post">
使用說明：<br>
1.先由下拉式選單選取要計算的寶可夢，點開下拉式選單後可按下寶可夢的英文名字即會自動跳到該行；或是點選寶可夢圖片即會出現全圖鑑，點選圖鑑進行選擇要計算的寶可夢。<br>
2.在CP、HP欄位輸入要計算的寶可夢的CP、HP值。<br>
3.Dust欄位指的是要升級此寶可夢所需消耗Dust數量，此欄位將會用來推估這隻寶可夢的可能等級。<br>
<br>
注意：Pokemon GO系統內定CP和HP最低為10，若根據公式算出來的值低於10，會被系統自動進位成10，因此若要計算的寶可夢的值為10，將會無法算出可能的IV值，請至少先將寶可夢進行Power Up到數值成為10以上再進行計算。<br>
<br>
<table border="1" align="center" style="font-size: 12px;">
<tr align="center">
<td>
選取PM :<div id='selectPM_1_img'></div><select name="selectPM_1" id="selectPM_1" onchange="setPMImg('selectPM_1_img', 'selectPM_1')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_1"></select><br>
</td>
<td>
選取PM :<div id='selectPM_2_img'></div><select name="selectPM_2" id="selectPM_2" onchange="setPMImg('selectPM_2_img', 'selectPM_2')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_2"></select><br>
</td>
<td>
選取PM :<div id='selectPM_3_img'></div><select name="selectPM_3" id="selectPM_3" onchange="setPMImg('selectPM_3_img', 'selectPM_3')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_3"></select><br>
</td>
</tr>
<tr align="center">
<td>
選取PM :<div id='selectPM_4_img'></div><select name="selectPM_4" id="selectPM_4" onchange="setPMImg('selectPM_4_img', 'selectPM_4')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_4"></select><br>
</td>
<td>
選取PM :<div id='selectPM_5_img'></div><select name="selectPM_5" id="selectPM_5" onchange="setPMImg('selectPM_5_img', 'selectPM_5')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_5"></select><br>
</td>
<td>
選取PM :<div id='selectPM_6_img'></div><select name="selectPM_6" id="selectPM_6" onchange="setPMImg('selectPM_6_img', 'selectPM_6')"></select><br>
CP : <input type="text" name="finalCP[]" size="3" maxlength="4" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)">
HP : <input type="text" name="finalHP[]" size="3" maxlength="3" style="ime-mode:disabled" onkeyup="return ValidateNumber(this,value)"><br>
Dust : <select name="needDust[]" id="needDust_6"></select><br>
</td>
</tr>
<tr height="70"><td colspan="3" align="center"><input type="submit" value="計算 IV 值" style="width: 150px; height: 50px; font-size: 16px;"></td></tr>
</table>
</form>
<br>
本計算系統使用公式：<br>
HP = (Base Stam + Stam IV) * Lvl(CPScalar)<br>
CP = (Base Atk + Atk IV) * (Base Def + Def IV)^0.5 * (Base Stam + Stam IV)^0.5 * Lvl(CPScalar)^2 / 10<br>
<a href="pokedex.php" target="_blank"><font color="#0000ff">第一世代全圖鑑表</font></a>
<br>

<script>
function setPMImg(imgDiv, selDiv){
	var selPMId = document.getElementById(selDiv).selectedIndex;
	var strImg = "<a href='#'><img src='pm/" + paddingLeft((selPMId) + "", PokemonNumberSize) + ".png' onclick='openPMTable(\"" + imgDiv + "\",\"" + selDiv + "\");'></a>";
	document.getElementById(imgDiv).innerHTML = strImg;
}

function setSelectPM(selPMId, imgDiv, selDiv){
	var strImg = "<a href='#'><img src='pm/" + paddingLeft((selPMId) + "", PokemonNumberSize) + ".png' onclick='openPMTable(\"" + imgDiv + "\",\"" + selDiv + "\");'></a>";
	document.getElementById(imgDiv).innerHTML = strImg;
	document.getElementById(selDiv).selectedIndex = selPMId;
}

function openPMTable(imgDiv, selDiv){
	var pmTableText = "<table border='1'><tr>";
	for(var i=0;i<=PokemonTotalSize;i++){
		pmTableText += "<td align='center'>";
		pmTableText += "<a href='#'><img src='pm/" + paddingLeft((i) + "", PokemonNumberSize) + ".png' onclick='closePMTable(" + i + ",\"" + imgDiv + "\",\"" + selDiv + "\")'></a><br>";
		pmTableText += Pokemon[i].name + "<br>" + PokemonChinese[i].name + "</td>";
		
		if(i%PokemonTableWrapSize == 0) pmTableText += "</tr><tr>";
	}
	pmTableText += "</tr></table>"
	
	document.getElementById("pmTable").innerHTML = pmTableText;
}

function closePMTable(selPMId, imgDiv, selDiv){
	document.getElementById("pmTable").innerHTML = "";
	setSelectPM(selPMId, imgDiv, selDiv);
}

for(var i=0;i<=PokemonTotalSize;i++){
	var txt = Pokemon[i].name + " (" + PokemonChinese[i].name + ")";
	var val = i + "";
	
	document.getElementById("selectPM_1").options.add(new Option(txt, val));
	document.getElementById("selectPM_2").options.add(new Option(txt, val));
	document.getElementById("selectPM_3").options.add(new Option(txt, val));
	document.getElementById("selectPM_4").options.add(new Option(txt, val));
	document.getElementById("selectPM_5").options.add(new Option(txt, val));
	document.getElementById("selectPM_6").options.add(new Option(txt, val));
}

var dustArr = getDustArray();
for(var i=1;i<=MAX_INPUT_CALC_PM_NUM;i++){
	setSelectPM(0, "selectPM_" + i + "_img", "selectPM_" + i);
	for(var key in dustArr){
		document.getElementById("needDust_" + i).options.add(new Option(key, key));
	}
}

</script>
<br>
<font size="1">Powered by <a href="https://www.facebook.com/elegant.eleka" target="_blank"><font color="blue">Elegant</font></a>
, 2016 , v1.0.2 , <a href="updateHistory.php"><font color="blue">Update History</font></a></font>
</body>
</html>