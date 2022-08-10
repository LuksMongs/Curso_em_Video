function contador(min, max){
    document.write(min+"<br>")
    if(min < max){
        contador(++min,max) //se o incremento viesse após o min a funcao sempre consideraria o min como zero
    }
};

contador(0,10)

function fatorial(n){
    if(n == 1){
        return 1;
    }
    return n*(fatorial(n-1));
}

document.write(fatorial(6));

var objQuad = document.getElementById("quad");
var ang= 0;
var anima;

function gira(){
    objQuad.style.transform="rotate("+ang+"deg)"
    ang = ang + 1
    if(ang > 360){
        ang=0;
    }
    anima = requestAnimationFrame(gira);
};

gira()