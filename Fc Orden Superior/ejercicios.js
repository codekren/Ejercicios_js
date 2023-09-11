// let imprimirMensaje= mensaje => console.log(mensaje)

// imprimirMensaje("Karen")

// let crearMultiplicacion= (a,b)=> (a*b)

// // crearMultiplicacion(2,3)

// const array=[1,2,3,4,5,6,7,8,9]

// let newarray= array.map(crearMultiplicacion)

// console.log(newarray)

// console.log(beers)


// console.log(arrayorden)

// function theMost10 (arreglo){
//     let cerveza=arreglo.sort(function(a,b){return b.abv-a.abv})
   
//     const filtrada= cerveza.filter((cerveza,index)=> { 
//     if(index<10) return cerveza
// })
// return filtrada
// }
// console.log(theMost10(beers))

// function theMostb(arreglo){
//     let cerveza=arreglo.sort(function(a,b){return a.ibu - b.ibu})
//     const filtrada=cerveza.filter((cerveza,index)=> {
//         if(index<10)return cerveza
//     })
//     return filtrada
// }
// console.log(theMostb(beers))

// function ejercicio6 (arraycerveza,nombrecerveza){
//     const resultado= arraycerveza.find( identico=>identico.name.toUpperCase()===nombrecerveza.toUpperCase())
//     return resultado
// }
// console.log(ejercicio6(beers,'Buzz'))


//  function ejercicio7alternativo(arraycerveza,valor){
//     const resultado=arraycerveza.findIndex(numero => numero.ibu===valor)
//         if(resultado>=0){
//         return arraycerveza.[resultado]}
//         else{ (console.log(`No existe
//             cerveza con un ibu de ${valor}`))
//  }
//  }

//  function ejercicio7(arraycerveza,valor){
    
//     const resultado=arraycerveza.find(numero => numero.ibu===valor)
//     if (resultado){
//         console.log(resultado)}
//     else{
//         console.log(`No existe cerveza con un ibu de ${valor}`)
//     }   
//  }
 
// (ejercicio7(beers,1))

// function ejercicio8(arraycerveza,nombredecerveza){
//     const nombreEncontrado= arraycerveza.findIndex( elemento=>  elemento.name.toUpperCase() === nombredecerveza.toUpperCase())
//     if(nombreEncontrado >=0){
//     return nombreEncontrado}
//     else{ return (`${nombredecerveza} no existe`)}
// }

// console.log(ejercicio8(beers,"cristal"))

// function ejercicio9 (arraydecerveza,valoralcohol){
//     let resultado= arraydecerveza.filter(valores=>valores.abv<valoralcohol )
    
//     let final=resultado.map(cerveza=> {
//         let newobj={}
//         newobj.nombre= cerveza.name
//         newobj.alcohol=cerveza.abv
//         newobj.amargor=cerveza.ibu
//         return newobj
//     })
//     return final
// }
// console.log(ejercicio9(beers,5))

// function ejercicio10(arraydecervezas,propiedad, boolean) {
//     let aux = 1;
//     if (!boolean) {
//       aux = -1;
//     }
//     return arraydecervezas.toSorted((a, b) => {
//       if (b[propiedad] < a[propiedad]) {
//         return 1 * aux;
//       }
//       if (b[propiedad] > a[propiedad]) {
//         return -1 * aux;
//       }
//       return 0;
//     });
//   }
//   const ordenPorPropiedadArgumento = ordenar(propiedad, argumento, true);

const ejercicio11=(arraydecervezas,id)=>{
    const crearTabla=arraydecervezas.map((cerveza)=>{
        return`
        <tr>    
            <td>${cerveza.name}</td>
            <td>${cerveza.abv}</td>
            <td>${cerveza.ibu}</td>
        </tr>    
         `
    })
console.log(crearTabla)
return (document.getElementById(id).innerHTML=crearTabla)
}
const resultado= ejercicio11(beers,"tabla")
