// function mayorque (num1,num2){
//     if(num1>num2){
//         return(num1)}
//         else{return("num2 no es mayor que num1")}
//     }

// console.log(mayorque(1,5));

// function numigualesodiferentes (num1,num2){
//     if (num1 === num2){
//         return "estos números son iguales"
//     }
//     else{
//         return "estos números no son iguales"
//     }
// }

// console.log(numigualesodiferentes (1,1))
// console.log(numigualesodiferentes(1,2))

// function mayorigual(num1,num2){
//     if(num1>num2){
//         return (num1 + " es mayor que num2")
//     }
//     if(num2>num1){
//         return (num2 + " es mayor que num1")
//     }
//     if(num1===num2){
//         return ("estos numeros son iguales")
//     }
//     }

//     console.log(mayorigual(1,1))
//     console.log(mayorigual(2,1))
//     console.log(mayorigual(1,2))

// function menor(num1,num2,num3){
// if(num1<num2 && num1<num3){
//     return ( num1 + " es el numero menor")
// }
// if(num2<num1 && num2<num3){
//     return (num2 + " es el numero menor")
// }
// if(num3<num1 && num3<num2){
//     return (num3 + " es el numero menor")
// }
// }
// console.log(menor(1,2,3))
// console.log(menor(6,5,4))
// console.log(menor(3,2,4))

// const objeto1= {nombre:"Karen" , edad:41 , altura:170}
// const objeto2= {nombre:"Rodrigo" , edad:44 , altura:192}

// function alturaedad (objeto1,objeto2){
//     if((objeto1.altura)>(objeto2.altura)){
//         return (objeto1.nombre)
//     }else{ return (objeto2.nombre)}
// }
// console.log(alturaedad(objeto1,objeto2));



// function conducir (){
//     const name= prompt ("Tu nombre")
//     const age= prompt ("Tu edad")
//     const height= prompt ("Tu altura")
//     const vision= prompt ("Tu visión")
// if(age >=18 && height>150 && vision>=8){
// console.log(name +" Puede manejar")}
// else{ console.log(name + " No puede manejar")}
// }
// conducir()

function vip(){
    const name= prompt ("Nombre")
    const pase= prompt ("¿vip o normal?")
    const entrada= prompt("tiene entrada: sí o no?")   

    if(name==="Karen"|| pase === "vip"){
        console.log( name + "Bienvenid@, tiene pase libre")
    }
    else {if (entrada=== "sí" ){        
        let pregunta=prompt ("desea utilizar su entrada? sí o no")
            if(pregunta==="sí"){
            console.log("bienvenido")}
          }    
    else { if (pase === "normal"){
        let comprar = prompt ("desea comprar? sí o no")
        if ( comprar==="sí"){
            let dinero= prompt ("tiene más de $1000? sí o no")
                if(dinero==="sí")
                    console.log("venta exitosa, bienvenid@")
                    else{ 
                        console.log("venta rechazada")
                    }
                }
             }
        }

    }  
}

 
vip()

// function rangoedad (){
//     let edad=prompt ("ingresar edad")
//     if(edad ===0 || edad <=12){
//         console.log("eres infante")
//     }
//     else if( edad<=18){
//         console.log("eres adolescente")
//     }
//     else if( edad <=45){
//         console.log("eres un mayor joven")
//     }
//     else if (edad<=99){
//         console.log("eres un anciano")
//     }
//     else if(edad >=100){
//         let confirmar=prompt ("Tiene esa edad?")
//     }

// }
// rangoedad()

// function operacion (num1,num2,operador){
//     if(operador === "+"){
//         return (num1+num2)
//     }
//     else if (operador === "-"){
//         return (num1-num2)
//     }
//     else if(operador === "*"){
//         return (num1*num2)
//         }
//     else if(operador==="/" && num2!=0){
//         return(num1/num2)
//     }
//     else { return ("Error")}
//     }

//     console.log(operacion(2,1,"+"))
//     console.log(operacion(2,1,"-"))
//     console.log(operacion(2,1,"*"))
//     console.log(operacion(2,0,"/"))

// function colores (color){
//     switch(color){
//         case "Blanco" :
//         case "Negro":
//             return "Falta de color"
//         case "Verde":
//             return "El color de la naturaleza"
//         case "Azul":
//             return "El color del agua"
//         case "Amarillo":
//             return "El color del sol"
//         case "Rojo":
//             return "El color del fuego"
//         case "Marrón":
//             return "El color de la tierra"
//         default:
//             return "Excelente elección, no lo teníamos pensado"
//     }
// }
// console.log(colores("Blanco"))
// console.log(colores("Negro"))
// console.log(colores("Verde"))
// console.log(colores("Azul"))
// console.log(colores("Amarillo"))
// console.log(colores("Rojo"))
// console.log(colores("Rosado"))

function adivinanza (){
    const numeroIncognita= ("5")
    let numeroingresado=prompt ("primer intento: ingresa un numero del 1 al 10")

    if (numeroIncognita==numeroingresado){
        console.log("Ganaste,has adivinado el número")
    }
    else if  (numeroingresado > numeroIncognita){
        console.log("el número ingresado es mayor")
    }
    else if (numeroingresado < numeroIncognita){
        console.log("el número ingresado es menor")
    }
    let numeroingresado2 =prompt ("segundo intento: ingresa un numero del 1 al 10")

    if (numeroIncognita==numeroingresado2){
        console.log("Ganaste,has adivinado el número")
    }
    else if  (numeroingresado2 > numeroIncognita){
        console.log("el número ingresado es mayor")
    }
    else if (numeroingresado2 < numeroIncognita){
        console.log("el número ingresado es menor")
    }
    let numeroingresado3 =prompt ("tercer intento: ingresa un numero del 1 al 10")

    if (numeroIncognita==numeroingresado3){
        console.log("Ganaste,has adivinado el número")
    }
    else if  (numeroingresado3 > numeroIncognita){
        console.log("el número ingresado es mayor")
    }
    else if (numeroingresado3 < numeroIncognita){
        console.log("el número ingresado es menor")
    }

    }

    adivinanza()

// function dni (){
//     let nombre= prompt ("ingrese nombre")
//     let apellido= prompt ("ingrese apellido")
//     let rut= prompt ("ingrese rut")
//     let serie= prompt ("ingrese serie")
//     let nacimiento= prompt ("ingrese fecha de nacimiento")
//     let nacionalidad= prompt ("ingrese nacionalidad")

//     console.log (nombre)
//     console.log(apellido)
//     console.log(rut)
//     console.log(serie)
//     console.log(nacimiento)
//     console.log(nacionalidad)
// let pregunta= prompt ("están correctos los datos? sí o no")

// if (pregunta==="no"){
//     console.log("vuelva a intentar en 1 mes")
// }
// if (pregunta==="sí"){
//     let table={ nombre:nombre , apellido:apellido , rut: rut, serie:serie , nacimiento: nacimiento, nacionalidad: nacionalidad}
//     console.log(table)
//     console.log("registro exitoso")
// }


// }
// dni()

// function cachipun (){
//     let jugador1= prompt ("Jugador 1: ingrese papel, piedra o tijera")
//     let jugador2= prompt ("Jugador 2: ingrese papel, piedra o tijera")   
    
//     if (jugador1 !="papel" && jugador1 !="piedra" && jugador1 !="tijera"){
//         console.log("jugador 1 ha hecho trampa")
//     }
//     else if (jugador2 !="papel" && jugador2 !="piedra" && jugador2 !="tijera"){
//         console.log("jugador 2 ha hecho trampa")
//     }
//     else if  (jugador1==="papel" && jugador2==="piedra"){
//         console.log("gana el jugador 1")
//     }
//         else if  (jugador1==="papel" && jugador2==="tijera"){
//             console.log("gana el jugador 2")
//         }
//          else if  (jugador1==="piedra" && jugador2==="papel"){
//             console.log("gana el jugador 2")
//          }
//           else if  (jugador1==="piedra" && jugador2==="tijera"){
//             console.log("gana el jugador 1")
//           }
//            else if  (jugador1==="tijera" && jugador2==="papel"){
//             console.log("gana el jugador 1")
//            }
//             else if  (jugador1==="tijera" && jugador2==="piedra"){
//             console.log("gana el jugador 2")
//            }
//              else (console.log("empate"))
            
  
// }  
// cachipun ()
