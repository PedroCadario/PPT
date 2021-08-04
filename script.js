let election1 = document.querySelector('#piedra');
let election2 = document.querySelector('#papel');
let election3 = document.querySelector('#tijera');

console.log(election1 + election2 + election3 );

election1.onclick = function (){
    let cpuSelect;
    let result = Math.floor(Math.random()*3);
    if (result == 2){
        cpuSelect = 'tijera';
        document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} ganaste`;
    }else{
        let cpuLose = Math.floor(Math.random()*2);
        if (cpuLose == 1){
            cpuSelect = 'piedra'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} empataste`;
        }else{
            cpuSelect = 'papel'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} perdiste`;
        }
    }
}
election2.onclick = function (){
    let cpuSelect;
    let result = Math.floor(Math.random()*3);
    if (result == 2){
        cpuSelect = 'piedra';
        document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} ganaste`;
    }else{
        let cpuLose = Math.floor(Math.random()*2);
        if (cpuLose == 1){
            cpuSelect = 'papel'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} empataste`;
        }else{
            cpuSelect = 'tijera'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} perdiste`;
        }
    }
}
election3.onclick = function (){
    let cpuSelect;
    let result = Math.floor(Math.random()*3);
    if (result == 2){
        cpuSelect = 'papel';
        document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} ganaste`;
    }else{
        let cpuLose = Math.floor(Math.random()*2);
        if (cpuLose == 1){
            cpuSelect = 'tijera'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} empataste`;
        }else{
            cpuSelect = 'piedra'
            document.getElementById("resultado").innerText = `La compu eligio ${cpuSelect} perdiste`;
        }
    }
}