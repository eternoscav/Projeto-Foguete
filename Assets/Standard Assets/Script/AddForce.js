//variavel timer
var timer : float = 0;
//variavel privada maxima altura
private var maxHeight: float = 0;
//variavel iniciar posição 
private var startPosition: Vector3;
//variavel primeiro GameObject
var primeiro: GameObject;
//variavel segundo GameObject
var segundo: GameObject;

//função iniciar
function Start() {
startPosition = transform.position;
}
    function OnGUI(){
    //Caixa de Texto Calculavel (Calcula Altura Maxima Atingida) 
	GUI.Box(Rect(600, 16, 230, 25), "ALTURA MAXIMA:" + maxHeight.ToString());
	//definir todas cor envolvida na caixa de texto
	GUI.contentColor = Color.magenta;
	GUI.backgroundColor = Color.magenta;
	GUI.color = Color.magenta;
	//Ativa a caixa de texto e mostra que o Combustivel esta cheio
	GUI.Box(Rect(16, 16, 230, 25), "COMBUSTIVEL CHEIO");
    //Avisa que o foguete esta decolando depois de um determinado tempo (Timer)
    if(timer < 5 && timer > 2){
    //definir todas cor envolvida na caixa de texto
	GUI.contentColor = Color.yellow;
	GUI.backgroundColor = Color.yellow;
	GUI.color = Color.yellow;
	GUI.Box(Rect(16, 40, 230, 25), "DECOLANDO");
	//chama função AddForce
	Addforce();
	//Mostra no Log a palavra Decolando
    Debug.Log("DECOLANDO");
    }
    if(timer < 8 && timer > 5){
	GUI.contentColor = Color.red;
	GUI.backgroundColor = Color.red;
	GUI.color = Color.red;
	GUI.Box(Rect(16, 16, 230, 25), "COMBUSTIVEL VAZIO");
	Debug.Log("COMBUSTIVEL VAZIO");
	//parar particulas
	GetComponent.<ParticleSystem>().Stop ();
	//ativar com o corpo rigido DRAG
	GetComponent.<Rigidbody>().drag = 10;
	//chama gunção KillPrimeiro
	KillPrimeiro() ;
	//chama função KillSegundo
	KillSegundo() ;
		}
	}

//função Kill Primeiro
function KillPrimeiro() {
//instanciada a variavel primeiroClone
    var primeiroClone = Instantiate(primeiro, transform.position, transform.rotation);
        }
//chama função KillSegundo
	function KillSegundo() {
//instanciada a variavel segundoClone
    var segundoClone = Instantiate(segundo, transform.position, transform.rotation);
    //detroi objeto
    Destroy(gameObject);
    }
    //função Update
	function Update () {
    timer += Time.deltaTime;
    //se altura maxima for menor (que tranform.position - posicao inicial) 
	if (maxHeight < (transform.position.y - startPosition.y)) {
	//altura maxima é igual transform position - posicao incial
	maxHeight = transform.position.y - startPosition.y;
		}
    }
    //função AddForce
	function Addforce() {
	//Adiciona força ao corpo rigido com os valores determinados
	GetComponent.<Rigidbody>().AddForce(0, 12, 0);
	}


	