//variavel timer
var timer : float = 0;
//variavel privada maxima altura
private var maxHeight: float = 0;
//variavel iniciar posição Vector3 
private var startPosition: Vector3;
//varial terceiro GameObject
var terceiro: GameObject;

//função iniciar
function Start() {
//posicao inciial igual a tranform posição
startPosition = transform.position;
}
//adicionar força corpo rigido
GetComponent.<Rigidbody>().AddForce(0, 12, 0);
//função Atualizar
	function Update () {
    timer += Time.deltaTime;
//se altura maxima for menor que (transform posicao - posicao inical)    
	if (maxHeight < (transform.position.y - startPosition.y)) {
	//altura maxima sera igual transform posicao - posicao inicial
	maxHeight = transform.position.y - startPosition.y;
	//adicionar força corpo rigido
	GetComponent.<Rigidbody>().AddForce(0, 12, 0);
		}
    }
//esperar 5 segundos
yield WaitForSeconds(5);
//destruir objeto
Destroy(gameObject);
//chamar funçao kill
Kill();
	//funao kill
	function Kill() {
//instanciada a variavel terceiroClone
    var terceiroClone = Instantiate(terceiro, transform.position, transform.rotation);

    }



	