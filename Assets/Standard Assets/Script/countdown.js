//variavel Texto (Caixa de texto)
    var Text : GUIText;
//variavel privado inicar Tempo (desligado)
    private var starttime = false;
//função iniciar
    function Start()
    {
    //inicirar tempo (ligado)
    starttime = true;
    //se iniciar tempo for igual a ligado
    if (starttime == true)
    {
   //iniciar contagem regressiva 
    StartCoroutine("CountDown");
    }
    }
     //função contagem regressiva
    function CountDown()
    {
    //espearar 1 segundo
    yield WaitForSeconds(1);
    //mostra texto caractere 1
    Text.text = "1";
    //esperar 1 segundo
    yield WaitForSeconds(1);
    //mostra texto caractere Go
    Text.text = "GO!";
    }