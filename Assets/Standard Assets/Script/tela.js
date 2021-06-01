//funcao Caixa de texto com 2 dois itens (Altura Maxima e Combustivel Vazio)
//especificando todas a parte de cores da caixa
function OnGUI(){
	GUI.Box(Rect(600, 16, 230,100),"");
	GUI.Box(Rect(600, 90, 230,25),"ALTURA MAXIMA: 85,63467");
    GUI.contentColor = Color.red;
	GUI.backgroundColor = Color.red;
	GUI.color = Color.red;
	GUI.Box(Rect(16, 16, 230, 25), "COMBUSTIVEL VAZIO");
	Debug.Log("COMBUSTIVEL VAZIO");
}	
	
	