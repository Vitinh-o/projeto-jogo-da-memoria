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

    let cartaClicada = alvo.target

    let tentativa = idCartas
    
    switch (cartasEmbaralhadas[idCartas]){

        case 0:

            cartaClicada.innerHTML =  '<img src="./images/react.png" alt="" srcset=""></img>'
            console.log(cartaClicada)
            break

        case 1:

            cartaClicada.innerHTML =  '<img src="./images/node.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

        case 2:

            cartaClicada.innerHTML =  '<img src="./images/mongo.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

        case 3:

            cartaClicada.innerHTML =  '<img src="./images/jquery.png" alt="">'
            console.log(cartaClicada)            
            break

         case 4:

            cartaClicada.innerHTML =  '<img src="./images/javascript.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

        case 5:

            cartaClicada.innerHTML =  '<img src="./images/html.png" alt="">'
            console.log(cartaClicada)
            break

        case 6:

            cartaClicada.innerHTML =  '<img src="./images/firebase.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

        case 7:

            cartaClicada.innerHTML =  '<img src="./images/electron.png" alt="">'
            console.log(cartaClicada)
            break

        case 8:

            cartaClicada.innerHTML =  '<img src="./images/css.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

        case 9:

            cartaClicada.innerHTML =  '<img src="./images/bootstrap.png" alt="" srcset="">'
            console.log(cartaClicada)
            break

    }

    if(cartasEmbaralhadas[tentativa] == cartasEmbaralhadas[idCartas])
    {
        console.log("teste")
    }



})




 console.log(cartasEmbaralhadas)