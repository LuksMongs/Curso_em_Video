var div1 = document.getElementById('dv1');
var horas= 0;
var min= 0;
var seg= 0;


function segundos(){
    if(seg<59){
        seg+= 1;
    }else if (seg=59){
        seg=0
        if(min<59){
            min+=1
        }else if(min=59){
            min=0
            if(horas<23){
                horas+=1
            }else if(horas=23){
                horas=0
            }
        }
    
    }
    
    if(seg <= 9){
        var reloseg = "0"+seg
    }else if(seg > 9)
        reloseg = seg
    if(min <= 9){
        var relomin = "0"+min
    }else if(min > 9){
        relomin = min
    }
    if(horas <= 9){
        var relohoras = "0"+horas
    }else if(horas > 9){
        relohoras = horas
    }
    div1.innerHTML= relohoras+":"+relomin+":"+reloseg
}

setInterval(segundos,200)
