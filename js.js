function BHASKARA(A , B , C) {

  //DECLARING THE VARIABLES
  var X1 ;
  var DELTA ; 
  var X2 ;

  //DELTA EQUATION
  DELTA = Math.pow(B , 2) - (4*A*C );
  console.log(DELTA)
  document.getElementById("DELTA").innerHTML = "O valor de DELTA(Δ) é: " + DELTA;
  
  //BHASKARA EQUATION
    X1 = (-B+Math.sqrt(DELTA))/2*A;
    console.log(X1)
    X2 = (-B -Math.sqrt(DELTA))/2*A;
    console.log(X2)

document.getElementById("X1").innerHTML = "O valor de X' é: " + X1;
document.getElementById("X2").innerHTML = "O valor de X'' é: " + X2;
//PASS VARIABLE TO HTML
}
