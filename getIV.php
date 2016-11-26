<html>
<head><title>Pokemon Go IV Calculator</title></head>
<script src="constDefine.js?v=1.0.2" type="text/javascript"></script>
<script src="pokemon.js?v=1.0.0" type="text/javascript"></script>
<script src="chineseName.js?v=1.0.0" type="text/javascript"></script>
<script src="dustLevel.js?v=1.0.2" type="text/javascript"></script>
<script src="cpmLevel.js?v=1.0.0" type="text/javascript"></script>
<script src="calcIV.js?v=1.0.2" type="text/javascript"></script>
<body>
<div id="pmTable" align="center"></div>
<?php
$defaultNonePMId = 0;
$defaultCP = 10;
$defaultHP = 10;
$defaultDust = 200;

$selPM = array($_POST['selectPM_1'], 
			   $_POST['selectPM_2'], 
			   $_POST['selectPM_3'], 
			   $_POST['selectPM_4'], 
			   $_POST['selectPM_5'], 
			   $_POST['selectPM_6']);

$finalCP = $_POST['finalCP'];
$strCP = array();

$finalHP = $_POST['finalHP'];
$strHP = array();

$needDust = $_POST['needDust'];
$strDust = array();

for($i=0;$i<6;$i++){
	//cp
	if($finalCP[$i] == "" || !is_numeric($finalCP[$i]))
		$finalCP[$i] = $defaultCP;
		
	if($selPM[$i] == $defaultNonePMId)
		$strCP[$i] = "--";
	else
		$strCP[$i] = $finalCP[$i];
	
	//hp
	if($finalHP[$i] == "" || !is_numeric($finalHP[$i]))
		$finalHP[$i] = $defaultHP;
		
	if($selPM[$i] == $defaultNonePMId)
		$strHP[$i] = "--";
	else
		$strHP[$i] = $finalHP[$i];
	
	//dust
	if($needDust[$i] == "" || !is_numeric($needDust[$i]))
		$needDust[$i] = $defaultDust;
	
	if($selPM[$i] == $defaultNonePMId)
		$strDust[$i] = "--";
	else
		$strDust[$i] = $needDust[$i];
}
?>
<form method="post">
以下是根據你輸入的寶可夢數值推算出來的可能IV值：<br>
<br>
注意：Pokemon GO系統內定CP和HP最低為10，若根據公式算出來的值低於10，會被系統自動進位成10，因此若要計算的寶可夢的值為10，將會無法算出可能的IV值，請至少先將寶可夢進行Power Up到數值成為10以上再進行計算。<br>
<br>
<table border="1" align="center" style="font-size: 14px;">
<tr align="center">
<td width="245">
選取PM :<div id='selectPM_1_img'></div><div id="selectPM_1"></div>
CP : <?php echo $strCP[0]; ?> 
HP : <?php echo $strHP[0]; ?><br>
Dust : <?php echo $strDust[0]; ?><br>
基本能力值：<br>
<div id="baseState_1"></div>
<div id="possibleIV_1"></div>
</td>
<td width="245">
選取PM :<div id='selectPM_2_img'></div><div id="selectPM_2"></div>
CP : <?php echo $strCP[1]; ?> 
HP : <?php echo $strHP[1]; ?><br>
Dust : <?php echo $strDust[1]; ?><br>
基本能力值：<br>
<div id="baseState_2"></div>
<div id="possibleIV_2"></div>
</td>
<td width="245">
選取PM :<div id='selectPM_3_img'></div><div id="selectPM_3"></div>
CP : <?php echo $strCP[2]; ?> 
HP : <?php echo $strHP[2]; ?><br>
Dust : <?php echo $strDust[2]; ?><br>
基本能力值：<br>
<div id="baseState_3"></div>
<div id="possibleIV_3"></div>
</td>
</tr>
<tr align="center">
<td width="245">
選取PM :<div id='selectPM_4_img'></div><div id="selectPM_4"></div>
CP : <?php echo $strCP[3]; ?> 
HP : <?php echo $strHP[3]; ?><br>
Dust : <?php echo $strDust[3]; ?><br>
基本能力值：<br>
<div id="baseState_4"></div>
<div id="possibleIV_4"></div>
</td>
<td width="245">
選取PM :<div id='selectPM_5_img'></div><div id="selectPM_5"></div>
CP : <?php echo $strCP[4]; ?> 
HP : <?php echo $strHP[4]; ?><br>
Dust : <?php echo $strDust[4]; ?><br>
基本能力值：<br>
<div id="baseState_5"></div>
<div id="possibleIV_5"></div>
</td>
<td width="245">
選取PM :<div id='selectPM_6_img'></div><div id="selectPM_6"></div>
CP : <?php echo $strCP[5]; ?> 
HP : <?php echo $strHP[5]; ?><br>
Dust : <?php echo $strDust[5]; ?><br>
基本能力值：<br>
<div id="baseState_6"></div>
<div id="possibleIV_6"></div>
</td>
</tr>
<tr height="70"><td colspan="3" align="center"><input type="button" value="計算其他寶可夢" style="width: 150px; height: 50px; font-size: 16px;" onclick="history.back()"></td></tr>
</table>
</form>
<br>
本計算系統使用公式：<br>
HP = (Base Stam + Stam IV) * Lvl(CPScalar)<br>
CP = (Base Atk + Atk IV) * (Base Def + Def IV)^0.5 * (Base Stam + Stam IV)^0.5 * Lvl(CPScalar)^2 / 10<br>
<a href="pokedex.php" target="_blank"><font color="#0000ff">第一世代全圖鑑表</font></a>
<br>

<script>
function setSelectPM(selPMId, imgDiv, selDiv){
	var txt = Pokemon[selPMId].name + " (" + PokemonChinese[selPMId].name + ")";
	var strImg = "<img src='pm/" + paddingLeft((selPMId) + "", PokemonNumberSize) + ".png'>";
	document.getElementById(imgDiv).innerHTML = strImg;
	document.getElementById(selDiv).innerHTML = txt;
}

var selPMId = [ <?php echo $selPM[0] . ", " . $selPM[1] . ", " . $selPM[2] . ", " . $selPM[3] . ", " . $selPM[4] . ", " . $selPM[5]; ?> ];
var finalCP = [ <?php echo $finalCP[0] . ", " . $finalCP[1] . ", " . $finalCP[2] . ", " . $finalCP[3] . ", " . $finalCP[4] . ", " . $finalCP[5]; ?> ];
var finalHP = [ <?php echo $finalHP[0] . ", " . $finalHP[1] . ", " . $finalHP[2] . ", " . $finalHP[3] . ", " . $finalHP[4] . ", " . $finalHP[5]; ?> ];
var needDust = [ <?php echo $needDust[0] . ", " . $needDust[1] . ", " . $needDust[2] . ", " . $needDust[3] . ", " . $needDust[4] . ", " . $needDust[5]; ?> ];

setSelectPM(selPMId[0], "selectPM_1_img", "selectPM_1");
setSelectPM(selPMId[1], "selectPM_2_img", "selectPM_2");
setSelectPM(selPMId[2], "selectPM_3_img", "selectPM_3");
setSelectPM(selPMId[3], "selectPM_4_img", "selectPM_4");
setSelectPM(selPMId[4], "selectPM_5_img", "selectPM_5");
setSelectPM(selPMId[5], "selectPM_6_img", "selectPM_6");

var strOpenIVTable = "展開詳細列表";
var strCloseIVTable = "摺疊詳細列表";

function setTableDisplay(tableId, btn){
	if(document.getElementById(tableId).style.display == "none"){
		document.getElementById(tableId).style.display = "table";
		btn.value = strCloseIVTable;
	}else{
		document.getElementById(tableId).style.display = "none";
		btn.value = strOpenIVTable;
	}
}

for(var i=0;i<MAX_INPUT_CALC_PM_NUM;i++){
	var iCalcIndex = i+1;
	var strBaseState = "";
	var strPossIV = "-無法計算-";
	
	if(selPMId[i] != DEFAULT_NONE_PM_ID){
		strBaseState += "<table border='1' cellspacing='0' style='font-size: 14px;' width='90%'>";
		strBaseState += "<tr align='center'><td width='33%' bgcolor='#FF2D2D'>攻</td><td width='34%' bgcolor='#00FFFF'>防</td><td bgcolor='#28FF28'>體</td></tr>";
		strBaseState += "<tr align='center'><td>" + Pokemon[selPMId[i]].stats.attack + "</td><td>" + Pokemon[selPMId[i]].stats.defense + "</td><td>" + Pokemon[selPMId[i]].stats.stamina + "</td></tr>";
		strBaseState +="</table>";
	
		var finalIVSet = getIVSet(selPMId[i], finalCP[i], finalHP[i], needDust[i]);
		
		if(finalIVSet.length > 0){
			var maxIVSet = finalIVSet[0];
			var minIVSet = finalIVSet[0];
			
			var maxHP = finalIVSet[0].maxHP;
			var minHP = finalIVSet[0].maxHP;
			
			var maxCP = finalIVSet[0].maxCP;
			var minCP = finalIVSet[0].maxCP;
			
			var avgPers = 0.0;
			
			var strIVTableId = "ivTable_" + iCalcIndex ;
		
			strPossIV  = "<table border='0' width='90%' style='font-size: 14px;'><tr align='center'><td>可能的IV值：<br>"
			strPossIV += "<input type='button' value='" + strOpenIVTable + "' onclick='setTableDisplay(\"" + strIVTableId + "\", this)'>"
			strPossIV += "<table border='1' cellspacing='0' style='font-size: 14px; display: none;' width='100%' id='" + strIVTableId + "'>";
			strPossIV += "<tr align='center'><td bgcolor='#FFFF37'>LV</td><td bgcolor='#FF2D2D'>攻</td><td bgcolor='#00FFFF'>防</td><td bgcolor='#28FF28'>體</td><td bgcolor='#BEBEBE'>Pers</td></tr>";
			for(var ivIdx=0; ivIdx<finalIVSet.length; ivIdx++){
				var ivSet = finalIVSet[ivIdx];
				var fIVPers = parseFloat(ivSet.pers);
				var fIVMaxHP = parseFloat(ivSet.maxHP);
				var fIVMaxCP = parseFloat(ivSet.maxCP);
				
				if(fIVPers > parseFloat(maxIVSet.pers)){
					maxIVSet = ivSet;
				}else if(fIVPers < parseFloat(minIVSet.pers)){
					minIVSet = ivSet;
				}
				
				if(fIVMaxHP > parseFloat(maxHP)){
					maxHP = ivSet.maxHP;
				}else if(fIVMaxHP < parseFloat(minHP)){
					minHP = ivSet.maxHP;
				}
				
				if(fIVMaxCP > parseFloat(maxCP)){
					maxCP = ivSet.maxCP;
				}else if(fIVMaxCP < parseFloat(minCP)){
					minCP = ivSet.maxCP;
				}
				
				avgPers += fIVPers;
				
				strPossIV += "<tr align='center'><td>" + ivSet.lv + "</td><td>" + ivSet.att + "</td><td>" + ivSet.def + "</td><td>" + ivSet.sta + "</td><td>" + ivSet.pers + "%</td></tr>";
			}
			strPossIV += "</table>";
			
			strPossIV += "</td></tr></table><br>";
			
			avgPers = (avgPers / finalIVSet.length).toFixed(2);
			
			strPossIV += "<table border='1' cellspacing='0' style='font-size: 14px;' width='90%'>";
			strPossIV += "<tr align='center'><td> </td><td bgcolor='#FFFF37'>LV</td><td bgcolor='#FF2D2D'>攻</td><td bgcolor='#00FFFF'>防</td><td bgcolor='#28FF28'>體</td><td bgcolor='#BEBEBE'>Pers</td></tr>";
			strPossIV += "<tr align='center'><td>Max</td><td>" + maxIVSet.lv + "</td><td>" + maxIVSet.att + "</td><td>" + maxIVSet.def + "</td><td>" + maxIVSet.sta + "</td><td>" + maxIVSet.pers + "%</td></tr>";
			strPossIV += "<tr align='center'><td>Avg</td><td>--</td><td>--</td><td>--</td><td>--</td><td>" + avgPers + "%</td></tr>";
			strPossIV += "<tr align='center'><td>Min</td><td>" + minIVSet.lv + "</td><td>" + minIVSet.att + "</td><td>" + minIVSet.def + "</td><td>" + minIVSet.sta + "</td><td>" + minIVSet.pers + "%</td></tr>";
			strPossIV += "</table><br>";
			
			strPossIV += "練滿等級時HP可能值 : " + minHP + " ~ " + maxHP + "<br>";
			strPossIV += "練滿等級時CP可能值 : " + minCP + " ~ " + maxCP + "<br>";
		}
	}
	
	document.getElementById("baseState_" + iCalcIndex).innerHTML = strBaseState;
	document.getElementById("possibleIV_" + iCalcIndex).innerHTML = strPossIV;
}
</script>
<br>
<font size="1">Powered by <a href="https://www.facebook.com/elegant.eleka" target="_blank"><font color="blue">Elegant</font></a>
, 2016 , <a href="updateHistory.php"><font color="blue">Update History</font></a></font>
</body>
</html>