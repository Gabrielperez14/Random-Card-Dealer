window.onload = () => {
    // Funcion para obtener un número random
    function getRandPalo(){
        let randNum = Math.floor(Math.random()*4)
        return randNum
    } 

    let paloResult = getRandPalo();
    let palo = ['♦', '♥', '♠', '♣']
    
    //pinta de la parte superior
    let randPaloHead = document.getElementById("palo-head");   
    randPaloHead.innerHTML = palo[paloResult];    
    randPaloHead.classList.add(`${palo[paloResult] == '♥'|| palo[paloResult] == '♦'  ? "red": "black"}`)

    //pinta de la parte inferior
    let randPaloFooter = document.getElementById("palo-footer");
    randPaloFooter.innerHTML = palo[paloResult];
    randPaloFooter.classList.add(`${palo[paloResult] == '♦'|| palo[paloResult] =='♥'? "red": "black" }`)

    // funcion para obtener el numero del medio
    function getRandNum(){
        let getNum = Math.floor(Math.random()* 13)+1;
        if(getNum == 1){
            getNum = 'A'
        }
        else if(getNum == 11){
            getNum ='J' 
        }else if(getNum == 12){
            getNum = 'Q'
        }else if (getNum == 13){
            getNum = 'K'
        }
        return getNum;
    }
    let numResult = getRandNum()

    let number = document.getElementById("number");
    number.innerHTML = numResult   


}





