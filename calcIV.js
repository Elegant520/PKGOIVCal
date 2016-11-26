function getIVSet(pmId, finalCP, finalHP, needDust){
	var finalIVSet = [];
	var idx = 0;
	
	var LVs = getDustLevel(needDust);
	if(LVs.length == 0){
		return finalIVSet;
	}
	
	var pmStats = Pokemon[pmId].stats;
	
	var baseAtt = pmStats.attack;
	var baseDef = pmStats.defense;
	var baseSta = pmStats.stamina;
	
	for(var i=0; i<LVs.length; i++){
		var LV = LVs[i];
		var CPM = getCPMLevel(LV);
		
		for(var finalSta=MAX_IV_STA; finalSta>=0; finalSta--){
			//公式    HP = (Base Stam + Stam IV) * Lvl(CPScalar)
			var testHP = Math.floor((baseSta + finalSta) * CPM);
			
			if(testHP != finalHP)
				continue;
				
			//公式    (Base Stam + Stam IV)^0.5 * Lvl(CPScalar)^2 / 10
			var staEx = Math.pow((baseSta + finalSta), 0.5) * Math.pow(CPM, 2) / 10.0;
			var attAndDefs = getAttAndDefIVs(finalCP, baseAtt, baseDef, staEx);
			if(attAndDefs.length == 0)
				continue;
			
			for(var j=0; j<attAndDefs.length; j++){
				var attDef = attAndDefs[j];
				var finalAtt = attDef.att;
				var finalDef = attDef.def;
				
				var IVSet = [];
				IVSet.lv = LV;
				IVSet.att = finalAtt;
				IVSet.def = finalDef;
				IVSet.sta = finalSta;
				IVSet.pers = (((finalAtt + finalDef + finalSta) / MAX_IV_TOTAL)*100.0).toFixed(2);
				IVSet.maxHP = Math.floor((baseSta + finalSta) * getCPMLevel(MAX_POKEMON_LEVEL));
				IVSet.maxCP = Math.floor((baseAtt + finalAtt) * Math.pow((baseDef + finalDef), 0.5) * Math.pow((baseSta + finalSta), 0.5) * Math.pow(getCPMLevel(MAX_POKEMON_LEVEL), 2) / 10.0);
				
				finalIVSet[idx++] = IVSet;
			}
		}
	}
	
	return finalIVSet;
}

function getAttAndDefIVs(finalCP, baseAtt, baseDef, staEx){
	var attAndDefs = [];
	var idx = 0;
	
	for(var finalAtt=MAX_IV_ATT; finalAtt>=0; finalAtt--){
		for(var finalDef=MAX_IV_DEF; finalDef>=0; finalDef--){
			//公式    CP = (Base Atk + Atk IV) * (Base Def + Def IV)^0.5 * StaEx
			var testCP = Math.floor( (baseAtt + finalAtt) * Math.pow((baseDef + finalDef), 0.5) * staEx );
			
			if(testCP == finalCP){
				var attDef = [];
				attDef.att = finalAtt;
				attDef.def = finalDef;
				attAndDefs[idx++] = attDef;
			}
		}
	}
	
	return attAndDefs;
}