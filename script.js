/**
 * PROPIEDADES DE LA CALCULADORA
 */

var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),

    accion: null,
    digito: null,
    operacioes: document.querySelector("#operaciones"),
    cantidadSingo: 0,
    cantDecinal: false,
    res: false

}

/*
 * OBJETO CON METODOS Y FUNCIONES DE LA CALCULADORA
 */


var m = {
    inicio: function () {
        for (var i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)

        }
    },
    
    teclado: function(){
      document.addEventListener("keydown", m.oprimir)  
    },
    
    oprimir: function(tecla){
        console.log(tecla.keyCode);
        if(tecla.keyCode ==  48){
            p.accion = "numero";
            p.digito = 0;
        }
        
        if(tecla.keyCode ==  49){
            p.accion = "numero";
            p.digito = 1;
        }
        
        if(tecla.keyCode ==  50){
            p.accion = "numero";
            p.digito = 2;
        }
        
        if(tecla.keyCode ==  51){
            p.accion = "numero";
            p.digito = 3;
        }
        
        if(tecla.keyCode ==  52){
            p.accion = "numero";
            p.digito = 4;
        }
        
        if(tecla.keyCode ==  53){
            p.accion = "numero";
            p.digito = 5;
        }
        
        if(tecla.keyCode ==  54){
            p.accion = "numero";
            p.digito = 6;
        }
        
        if(tecla.keyCode ==  55){
            p.accion = "numero";
            p.digito = 7;
        }
        
        if(tecla.keyCode ==  56){
            p.accion = "numero";
            p.digito = 8;
        }
        
        if(tecla.keyCode ==  57){
            p.accion = "numero";
            p.digito = 9;
        }
        
        
        m.calculadora(p.accion, p.digito)
          
    },


    oprimirTecla: function (tecla) {
        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },

    calculadora: function (accion, digito) {
        switch (accion) {

            case "numero":
                p.cantidadSingo = 0;
                if (p.operacioes.innerHTML == 0) {
                    
                    p.operacioes.innerHTML = digito;
                    
                } else {
                    if(p.res){
                        p.res = false;
                        p.operacioes.innerHTML = digito;
                        
                        
                    } else{
                         p.operacioes.innerHTML += digito;
                    }
                }

                break;

            case "signo":
                p.cantidadSingo++
                    if (p.cantidadSingo == 1) {

                        if (p.operacioes.innerHTML == 0)(p.operacioes.innerHTML = 0)
                        else {
                            p.operacioes.innerHTML += digito;
                            p.cantDecinal = false;
                            p.res = false;
                        }
                    }
                break;

                
            case "decimal":
                if(!p.cantDecinal){
                     p.operacioes.innerHTML += digito;
                    p.cantDecinal = true;
                    p.res == false;
                } 
                break;
            case "igual":
                p.operacioes.innerHTML = eval(p.operacioes.innerHTML)
                break;

        }

    },
    
    borrar: function(){
        p.operacioes.innerHTML = 0;
    }


}
m.inicio();
m.teclado();
