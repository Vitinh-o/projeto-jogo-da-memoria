let posicaoCartas1 = [0,1,2,3,4,5,6,7,8,9];
let posicaoCartas2 = [0,1,2,3,4,5,6,7,8,9];


function definirCartas(posicaoCartas){

    for (let i = posicaoCartas.length; i;){
        
        let cartaSorteada =  Math.random() * i-- | 0;;

        let tpm = posicaoCartas[cartaSorteada]

        posicaoCartas[cartaSorteada] = posicaoCartas[i];

        posicaoCartas[i] = tpm;



    }

    return posicaoCartas;
}

 let array1 = definirCartas(posicaoCartas1);
 let array2 = definirCartas(posicaoCartas2);

let cartasEmbaralhadas = [...array1 , ...array2]


let tabuleiro = document.getElementById("tabuleiro")

tabuleiro.addEventListener("click", (alvo)=>{

    let idCartas = alvo.target.id

    switch (idCartas){

        case "1"
            

    }


})




 console.log(cartasEmbaralhadas)