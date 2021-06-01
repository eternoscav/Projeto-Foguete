//variavel camera1 GameObject
var camera1 : GameObject; 
//variavel camera2 GameObject
var camera2 : GameObject; 
//variavel camera2 GameObject
var camera3 : GameObject;

//funcao iniciar
function Start () { 
//camera1 liga
   camera1.GetComponent.<Camera>().enabled = true; 
//camera2 desliga
   camera2.GetComponent.<Camera>().enabled = false; 
//camera3 desliga
   camera3.GetComponent.<Camera>().enabled = false; 
} 
//funcao atualizar
function Update () { 
//se apertar o botão F9
   if (Input.GetKeyDown ("f9")){ 
//camera1 desliga
      camera1.GetComponent.<Camera>().enabled = false; 
//camera1 liga
      camera2.GetComponent.<Camera>().enabled = true; 
//camera3 desliga
      camera3.GetComponent.<Camera>().enabled = false;
   } 
//se apertar o botão F8
   if (Input.GetKeyDown ("f8")){ 

//camera1 liga   
      camera1.GetComponent.<Camera>().enabled = true; 
//camera1 desliga
      camera2.GetComponent.<Camera>().enabled = false;
//camera1 desliga
      camera3.GetComponent.<Camera>().enabled = false; 
   }     
//se apertar o botão F7
      if (Input.GetKeyDown ("f7")){ 
//camera1 desliga
      camera1.GetComponent.<Camera>().enabled = false; 
//camera1 desliga
      camera2.GetComponent.<Camera>().enabled = false;
//camera1 liga
      camera3.GetComponent.<Camera>().enabled = true; 
   }     
}