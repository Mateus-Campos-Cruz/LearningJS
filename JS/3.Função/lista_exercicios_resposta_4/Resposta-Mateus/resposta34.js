/**34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */


let string1 = "Mateus"
let string2 = "Alfeu"

string1 = string1.toUpperCase()
string2 = string2.toUpperCase()

function recebeString(string1, string2){

    if(string1.length >= string2.length){
        console.log("Letras da String 1 que tem na String 2: ")
        for(i = 0; i < string1.length; i++){
            for(j = 0; j < string2.length; j++){

                if(string1[i] == string2[j]){
                    string1[i] == string2[j]
                    console.log(`${string1[i]} `)
                }                
            }
        }
    }else if(string2.length >= string1.length){
        console.log("Letras da String 2 que tem na String 1: ")
        for(i = 0; i < string2.length; i++){
            for(j = 0; j < string1.length; j++){
                if(string1[i] == string2[j]){
                string2[i] == string1[j]
                console.log(`${string2[i]} `)
                }
            }
        }
    }

    }

recebeString(string1, string2)    
