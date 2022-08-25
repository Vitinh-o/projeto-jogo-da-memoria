let posicaoCartas = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];



function definirCartas(posicaoCartas){

    let i = 0;

    while (i <= 20){
        
        let cartaSorteada = Math.random() * 10;

        cartaSemDecimal = cartaSorteada.toFixed(0)

        posicaoCartas[i] = cartaSemDecimal

            console.log("teste")
            console.log(cartaSemDecimal);
            //console.log(repetido);
            console.log(posicaoCartas);
            //posicaoCartas.push(cartaSemDecimal);

        i++
    }
}



definirCartas(posicaoCartas);