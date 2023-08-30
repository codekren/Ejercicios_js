function saludar (n){
    console.log("hola "+n+ " bienvenida a js")

}
saludar("Karen")

function multiplicar(a,b){
    return resultado = (a*b)
}

console.log(multiplicar (1,3))

function areatriangulo(b,h){
    return(b*h)/2
}
 function perimetrotriangulo(a,b,c){
    return(a+b+c)
 }
 console.log(areatriangulo (5,3))
 console.log(perimetrotriangulo (4,5,6))

function calcularprecio(p,q){
    if(q<10){
        return p*q
    }
    if (q>=10){
        return ((p*q)*0.9)
    }
    if(q>=20){
        return ((p*q)*0.8)
    }
}
console.log(calcularprecio(1,20))

function esMayorDeEdad (num){
    if (num>=18) return "Eres mayor de edad"
    else return "Eres menor de edad"
}
console.log(esMayorDeEdad(17))
console.log(esMayorDeEdad(18))

function CalcularImpuesto (sueldo){
    if(sueldo <= 10000)
    return (sueldo*0.10)
    // if (sueldo >10000 && sueldo <=20000)
    if(sueldo<=20000)
    return (sueldo*0.15)
    if (sueldo >20000) 
    return (sueldo*0.20)
}
console.log(CalcularImpuesto(19000))
console.log(CalcularImpuesto(20000))

function verificarDia (num){
    // switch(num){
    //     case 1:return "Es un día Laboral"
    //     case 2:return "Es un día Laboral"
    //     case 3:return "Es un día Laboral"
    //     case 4:return "Es un día Laboral"
    //     case 5:return "Es un día Laboral"
    //     case 6:return "Es fin de Semana"
    //     case 7:return "Es fin de Semana"
    // }  
    switch(num){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día Laboral"

        case 6:
        case 7:
            return "Es fin de Semana"
        default:
            return "Por favor ingresar número del 1 al 7"
    } 

}

console.log(verificarDia(2))
console.log(verificarDia(6))
console.log(verificarDia(3))
console.log(verificarDia(5))
console.log(verificarDia(9))
