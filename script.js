let posicaoCartas1 = [0,1,2,3,4,5,6,7,8,9]
let posicaoCartas2 = [0,1,2,3,4,5,6,7,8,9]
let tentativa = []
let cartasGuardadas = []
y = 0


function definirCartas(posicaoCartas){

    for (let i = posicaoCartas.length; i;){
        
        let cartaSorteada =  Math.random() * i-- | 0

        let tpm = posicaoCartas[cartaSorteada]

        posicaoCartas[cartaSorteada] = posicaoCartas[i]

        posicaoCartas[i] = tpm
    }

    return posicaoCartas;
}



 let array1 = definirCartas(posicaoCartas1)
 let array2 = definirCartas(posicaoCartas2)

let cartasEmbaralhadas = [...array1 , ...array2]


let tabuleiro = document.getElementById("tabuleiro")

tabuleiro.addEventListener("click", (alvo)=>{

    let idCartas = alvo.target.id

    let cartaClicada = alvo.target

    let imagens 
        
    switch (cartasEmbaralhadas[idCartas]){

        case 0:

            imagens = '<img src="./images/react.png" id="10" alt="" srcset=""></img>'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

        case 1:

            imagens =  '<img src="./images/node.png" id="11" alt="" srcset="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

        case 2:

            imagens =  '<img src="./images/mongo.png" id="12" alt="" srcset="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

        case 3:

            imagens = '<img src="./images/jquery.png" id="13" alt="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)            
            break

         case 4:

            imagens = '<img src="./images/javascript.png" id="14" alt="" srcset="">'
            cartaClicada.innerHTML =  imagens 
            console.log(cartaClicada)
            break

        case 5:
            imagens = '<img src="./images/html.png" id="15" alt="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

        case 6:
            imagens = '<img src="./images/firebase.png" id="16" alt="" srcset="">'
            cartaClicada.innerHTML =  imagens 
            console.log(cartaClicada)
            break

        case 7:
            imagens = '<img src="./images/electron.png" id="17" alt="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

        case 8:
            imagens = '<img src="./images/css.png" id="18" alt="" srcset="">'
            cartaClicada.innerHTML =   imagens
            console.log(cartaClicada)
            break

        case 9:
            imagens = '<img src="./images/bootstrap.png" id="19" alt="" srcset="">'
            cartaClicada.innerHTML =  imagens
            console.log(cartaClicada)
            break

    }

    identificaCartas(idCartas, cartaClicada, imagens)

    

})


function identificaCartas(idCartas, cartaClicada, imagens){


    
    if(tentativa.length < 2)
    {

        cartasGuardadas[y] = imagens
        tentativa[y] = cartaClicada.children[0] 

        y++
        console.log(cartasGuardadas)
    }

    if(cartasGuardadas[0] != cartasGuardadas[1] && tentativa.length == 2)
    {  
    setTimeout(()=>{
        

        tentativa[0].remove()
        tentativa[1].remove()

     }, 100)
       
    }
    else{
        
    //console.log("teste")

    }


    setTimeout(()=>{

        if(tentativa.length == 2){
        

            cartasGuardadas.shift()
            cartasGuardadas.pop()

            tentativa.shift()
            tentativa.pop()
            y = 0
        }
    },101)

   
}
