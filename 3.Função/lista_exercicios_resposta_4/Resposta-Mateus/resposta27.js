/**27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas 
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em 
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida. */

function medirAltura(altura1, taxaCresc1,altura2, taxaCresc2,){
    let dadosCrianca = []
    dadosCrianca.push(altura1)
    dadosCrianca.push(altura2)
    dadosCrianca.push(taxaCresc1)
    dadosCrianca.push(taxaCresc2)
    let alturaMaior = 0
    let alturaMenor = 0
    let i = 0

    if(dadosCrianca[0] < dadosCrianca[1]){
        alturaMenor =  dadosCrianca[0]
        alturaMaior = dadosCrianca[1]
        for(i = 0;alturaMenor < alturaMaior; i++){
            
            alturaMenor += dadosCrianca[0] * dadosCrianca[2]
            alturaMaior += dadosCrianca[1] * dadosCrianca[3]
        }

        console.log(`A criança menor vai ultrapassar a maior em ${i} anos.`)

    }else if(dadosCrianca[1] < dadosCrianca[0]){
        alturaMenor = dadosCrianca[1]
        alturaMaior = dadosCrianca[0]
        for(i = 0;alturaMenor < alturaMaior; i++){
            alturaMenor += dadosCrianca[1] * dadosCrianca[3]
            alturaMaior += dadosCrianca[0] * dadosCrianca[2]
        }

        console.log(`A criança menor vai ultrapassar a maior em ${i} anos.`)

    }else{
        console.log(`Crianças com alturas iguais`)
    }

    console.log(dadosCrianca)
}

medirAltura(1.65, 0.3,1.55,0.5)