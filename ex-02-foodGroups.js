/** 

You must generate a function that takes as parameter a `string` 
that contains a meal, and look for it in the next object, 
returning its` key` and its english value in a new object, 
if it does not find the food it must return "food not found".
**/

// ++ Write YOUR CODE Below

function foodGroup (busqueda){
     var obj = { Crema: {
                     lacteo:{
                         english: "cream"
                     }
                 },
                 Res:{
                     carne:{
                         english: "beef"
                     }
                 },
                 Piña:{
                     fruta:{
                         english: "pineapple"
                    }
                } 
     } 
        //iterar el objeto
     for (var key in obj){

         if (busqueda === key){
             return obj[key];
         }
     }
     return "Food not found"
  
}




// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/

console.log("==== ex-02-foodGroups : TEST 1 ====");

  
console.assert(foodGroup('Crema').lacteo.english === 'cream');
console.assert(foodGroup('Res').carne.english === 'beef');
console.assert(foodGroup('Piña').fruta.english === 'pineapple');

/*-------------------TEST-2-------------------------*/

console.log("==== ex-02-foodGroups : TEST 2 ====");

console.assert(foodGroup('Caña') === "Food not found");

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');

