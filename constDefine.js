const PokemonTotalSize			= 151;	//PM總數量
const PokemonTableWrapSize		= 6;	//PM選取表多少隻一行
const PokemonDexTableWrapSize	= 9;	//PM圖鑑表多少隻一行
const PokemonNumberSize			= 3;	//PM總量位數

const MAX_INPUT_CALC_PM_NUM		= 6;	//一次最多可輸入計算幾隻PM
const DEFAULT_NONE_PM_ID		= 0;	//未選擇PM的ID

const MAX_IV_ATT				= 15;	//攻擊IV最大值	
const MAX_IV_DEF				= 15;	//防禦IV最大值
const MAX_IV_STA				= 15;	//體力IV最大值

const MAX_IV_TOTAL	= MAX_IV_ATT + MAX_IV_DEF + MAX_IV_STA;	//IV最大值總和

const MAX_POKEMON_LEVEL			= 40;	//PM最高等級

function paddingLeft(str,lenght){
	if(str.length >= lenght)
	return str;
	else
	return paddingLeft("0" +str,lenght);
}

function switchPMType(str){
	switch(str){
		case "NORMAL":		return "普通";
		case "FLYING":		return "飛行";
		case "ELECTRIC":	return "雷";
		case "FIRE":		return "火";
		case "WATER":		return "水";
		case "ICE":			return "冰";
		case "GRASS":		return "草";
		case "POISON":		return "毒";
		case "BUG":			return "蟲";
		case "ROCK":		return "岩";
		case "GROUND":		return "地";
		case "FIGHTING":	return "格鬥";
		case "PSYCHIC":		return "超能";
		case "GHOST":		return "幽靈";
		case "DRAGON":		return "龍";
		case "STEEL":		return "鋼";
		case "DARK":		return "惡";
		case "FAIRY":		return "妖精";
	}
	
	return str;
}