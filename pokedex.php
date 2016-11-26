<html>
<head><title>Pokemon Go Dex</title></head>
<script src="constDefine.js?v=1.0.2" type="text/javascript"></script>
<script src="pokemon.js?v=1.0.0" type="text/javascript"></script>
<script src="chineseName.js?v=1.0.0" type="text/javascript"></script>
<body>
<div id="pmList" align="center"></div>
<script>
var pmTableText = "<table border='1' style='font-size: 12px;'><tr>";

for(var i=1;i<=PokemonTotalSize;i++){
	pmTableText += "<td align='center'><img src='pm/" + paddingLeft((i) + "", PokemonNumberSize) + ".png'><br>";
	pmTableText += Pokemon[i].name + "<br>" + PokemonChinese[i].name + "<br>";
	
	//取得屬性
	var strType = switchPMType(Pokemon[i].type1)
	if(Pokemon[i].type2){
		strType += " + " + switchPMType(Pokemon[i].type2);
	}
	pmTableText += "屬性：" + strType + "<br>";
	
	//取得進化所需糖果
	var needCandy = 0;
	if(Pokemon[i].candy)
		needCandy = Pokemon[i].candy;
	pmTableText += "進化所需糖果：" + needCandy + "<br>";
	
	//基本能力值
	pmTableText += "<table border='1' cellspacing='0' style='font-size: 12px;' width='90%'>";
		pmTableText += "<tr align='center'><td width='33%' bgcolor='#FF2D2D'>攻</td><td width='34%' bgcolor='#00FFFF'>防</td><td bgcolor='#28FF28'>體</td></tr>";
		pmTableText += "<tr align='center'><td>" + Pokemon[i].stats.attack + "</td><td>" + Pokemon[i].stats.defense + "</td><td>" + Pokemon[i].stats.stamina + "</td></tr>";
	pmTableText +="</table>";
	
	pmTableText += "</td>";
	
	if(i%PokemonDexTableWrapSize == 0) pmTableText += "</tr><tr>";
}
pmTableText += "</tr></table>"

document.getElementById("pmList").innerHTML = pmTableText;
</script>
<br>
<font size="1">Powered by <a href="https://www.facebook.com/elegant.eleka" target="_blank"><font color="blue">Elegant</font></a>
, 2016 , <a href="updateHistory.php"><font color="blue">Update History</font></a></font>
</body>
</html>