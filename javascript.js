//BUCLE FOR número par o impar
let end =prompt("Indique en que número me debo detener:"); //  asignar valor (msm a mostrar) a mi variable
document.write("<br>"+"El conteo se detuvo en:"+ end + "<br>");
for (var contador=1; contador<=end; contador++) {  //de a uno en uno
   if(contador % 2 == 0){
    console.log("Ha digitado un número par" + contador);   
    document.write("Número par"+ contador + "<br>"); 
    }//Imprimir en pantalla
   else{
    console.log("Ha digitado un número impar" + contador);
    document.write("Número impar:"+ contador); 
    }//Imprimir en pantalla
}
console.log("//parte 2//")
// Tabla de multiplicar
number="";
while((number < 2)||(number > 10)){
   number =prompt("Digite un número del 2 a 10" ); // asignar valor (msm a mostrar) a mi variable
}
document.write("Tabla de multiplicar del número elegido" + number);

var numb= 1;
while (numb <=10) { 
let tabla = number*numb;
console.log( number + "x" + numb +  "=" + tabla);
document.write( number + "x" + numb +  "=" + tabla);
 }

