/*
	Declaramos os atributos de status
*/
var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;
var dias = 0;
/*
	Essa função tem a função de atualizar as informações na tela
  de tanto em tanto tempo
*/
tempo();
function Loop(time = 1){
  
  var total = fome + higiene + sono + diversao + social;

  /*
	 Se algum dos atributos chegar a 0 nosso pet morre!
	 logo a baixo controlamos o nível de satisfação do pet
  */
  if(fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0 || dias >= 30){
     document.getElementById("pet").src="img/t07.gif";
     document.getElementById('tempo').innerHTML = 'Você deixou seu pet morrer, atualize a página';}
    else if(dias >= 3 && dias < 6){document.getElementById("pet").src="img/t02.gif";}
      else if(dias >= 6 && dias < 10){document.getElementById("pet").src="img/t03.gif";}
        else if(dias >= 10 && dias < 18){document.getElementById("pet").src="img/t05.gif";}
          else if(dias >= 18 && dias < 30){document.getElementById("pet").src="img/t06.gif";}
   

  fome = fome - parseInt(time);
  higiene = higiene - parseInt(time);
  sono = sono - parseInt(time);
  diversao = diversao - parseInt(time);
  social = social - parseInt(time);

  /*
	 Nessa parte nós controlamos a barra de status do pet
  */
  document.getElementById('fome').style.width = ((fome + 'px')/5);
  document.getElementById('higiene').style.width = ((higiene + 'px')/5);
  document.getElementById('sono').style.width = ((sono + 'px')/5);
  document.getElementById('diversao').style.width = ((diversao + 'px')/5);
  document.getElementById('social').style.width = ((social/5 + 'px')/5);


  /*
	 Nessa parte nós controlamos a porcentagem do status do pet
  */
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('social').innerHTML = social + '%';
}

/*
	Essa função é responsável por começar e chamar o temporizador da função LOOP
*/
function Start(){
  var temporizador = setInterval(Loop, 5000);
}



/*
	Essa função é para recuperar a fome
*/
function Comer(){
  fome = (fome + 10);
if  (fome >100) {fome = 100}

  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}

/*
	Essa função é para recuperar a higiene
*/
function Banho(){
  higiene = (higiene + 10);
if  (higiene >100) {higiene = 100}

  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}

/*
	Essa função é para recuperar o sono
*/
function Dormir(){
  sono = (sono + 10);
if  (sono >100) {sono = 100}

  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}

/*
	Essa função é para recuperar a diversão
*/
function Brincar(){
  diversao = (diversao + 10);
if  (diversao > 100) {diversao = 100}

  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}

/*
	Essa função é para recuperar o social
*/
function Conversar(){
  social = (social + 10);
if  (social >100) {social = 100}

  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}

function tempo(){
  setInterval(function(){
  dias++;
  document.getElementById("tempo").innerHTML = 'Seu pet está vivo a ' + dias + ' dias' ;
  },5000)
}



/*
  Executamos o temporizador
*/
Start();