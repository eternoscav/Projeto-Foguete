//variavel Minuto tipo inteiro
var min : int;
//variavel Segundo tipo inteiro
var sec : int;
//variavel fração tipo inteiro
var fraction : int;
//variavel Contar Tempo tipo float
var timecount : float;
//variavel iniciar tempo tipo float
var starttime : float;
//variavel contador tempo (Caixa Texto)
var timeCounter : GUIText;

//funcao iniciar
function Start ()
{
starttime = Time.time;
}
//esperar 3 segundos
yield WaitForSeconds(3);
//funcao atualizar
function Update () {
timecount = Time.time - starttime;
min = (timecount/60f);
sec = (timecount % 60f);
fraction = ((timecount * 10) %10);
timeCounter.text = String.Format("{0}:{1}:{2}",min,sec,fraction);
}