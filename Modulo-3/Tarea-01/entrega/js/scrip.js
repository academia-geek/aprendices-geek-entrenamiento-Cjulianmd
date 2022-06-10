    
    
    
    (function(){
    const sliders = [...document.querySelectorAll(".slider_body")];
    const arrowSiguiente = document.querySelector("#next");
    const arrowAntes = document.querySelector('#before');
    let value;

    arrowSiguiente.addEventListener("click", () =>changePosition(1));
    arrowAntes.addEventListener("click", () =>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider_body--shadow').
        dataset.id);
        
        value = currentElement;
        value+= change;

        console.log(sliders.length);
        if(value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : none;


        }
        sliders[currentElement-1].classList.toggle("slider_body--shadow");
        sliders[value-1].classList.toggle("slider_body--shadow");

    }
})()
    function Golem1() {
            document.getElementById("G").style.display="block";
        }
    function cerrar1() {
            document.getElementById("G").style.display="none";
    }
    function Golem2() {
        document.getElementById("A").style.display="block";
    }
    function cerrar2() {
            document.getElementById("A").style.display="none";
    }
    function Golem3() {
        document.getElementById("b").style.display="block";
    }
    function cerrar3() {
            document.getElementById("b").style.display="none";
    }
    function Golem4() {
        document.getElementById("c").style.display="block";
    }
    function cerrar4() {
            document.getElementById("c").style.display="none";
    }
    function Golem5() {
        document.getElementById("d").style.display="block";
    }
    function cerrar5() {
            document.getElementById("d").style.display="none";
    }
    function Golem6() {
        document.getElementById("g").style.display="block";
    }
    function cerrar6() {
            document.getElementById("g").style.display="none";
    }
    function Golem7() {
        document.getElementById("l").style.display="block";
    }
    function cerrar7() {
            document.getElementById("l").style.display="none";
    }
    function Golem8() {
        document.getElementById("M").style.display="block";
    }
    function cerrar8() {
            document.getElementById("M").style.display="none";
    }
    function Golem9() {
        document.getElementById("m").style.display="block";
    }
    function cerrar9() {
            document.getElementById("m").style.display="none";
    }
    function Golem10() {
        document.getElementById("P").style.display="block";
    }
    function cerrar10() {
            document.getElementById("P").style.display="none";
    }
    function Golem11() {
        document.getElementById("p").style.display="block";
    }
    function cerrar11() {
            document.getElementById("p").style.display="none";
    }


    
     /*
        
    
    
    
    
    
    const buttonBefore = document.getElementById("before")
    const buttonAfter = document.getElementById("after")
    
    const pjImg = document.getElementById("pj-image")
    const pjButton = document.getElementById("pj-button")
    
    const pjImgInfo = document.getElementById("pj-image-info")
    
    const pjNameInfo = document.getElementById("info-name")
    //const pjTextInfo = document.getElementById("info-text")
    const pjTextInfo = document.querySelector("#info-text")
    
    let pjNum = 0
    
    let pjName 
    
    let img = [
        "golem.png",
        "Pekka.webp",
        "caballero.png",
        "bruja.png",
        "los-pillos.png",
        "goblin.webp",
        "arquero.png",
        "montaPuercos.webp",
        "Miner_info.webp",
        "principe.png",
    ]
    
    buttonAfter.addEventListener("click",function(event){
        if(pjNum > 0) {
            pjNum--
            //console.log(pjName[pjNum])
            createCard(pjName[pjNum])
            buttonBefore.className = "button-able"
        }
        if(pjNum == 0){
            buttonAfter.className = "button-disable"
        }
    })
    
    buttonBefore.addEventListener("click",function(event){
        if(pjNum < pjName.length-1) {
            pjNum++
            //console.log(pjName[pjNum])
            createCard(pjName[pjNum])
            buttonAfter.className = "button-able"
        }
        if(pjNum == pjName.length-1){
            buttonBefore.className = "button-disable"
        }
    })
    
    function createCard(name){
        pjImg.setAttribute("src","./img/"+imagen[pjNum])
        pjImgInfo.setAttribute("src","./img/"+imagen[pjNum])
    
        pjButton.innerText = name
        let {pjName, text} = getInLocalStorage(name)
    
        pjNameInfo.innerText = pjName
        pjTextInfo.innerText = text
    
    }
    
    function getInLocalStorage(name){
        let pjText = localStorage.getItem(name)
        return {
            pjName : name,
            text : pjText
        }
    }
    */
    
    
    
    
    /*




    let pocision = 0;
    document.addEventListener('DOMContentLoaded', function() {
            let button = document.createElement('button');
            button.type = 'button';
            button.innerHTML = '<';
            button.className = 'boton-izquierda';
            
            button.onclick = function() {
                pocision=$(this).index();
                
            };
        
            let container = document.getElementById('izquierda');
            container.appendChild(button);
        }, false);
        document.addEventListener('DOMContentLoaded', function() {
            let button = document.createElement('button');
            button.type = 'button';
            button.innerHTML = '>';
            button.className = 'boton-derecha';
            
            button.onclick = function() {
                $(".pagina li").click(function(){
                    alert($(this).index());
                })
                
               
            };
        
            let container = document.getElementById('derecha');
            container.appendChild(button);
        }, false);

    
        
   document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'arquero';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container2');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container3');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container4');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container5');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container6');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container7');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container8');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container9');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container10');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container11');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container12');
        container.appendChild(button);
    }, false);
    document.addEventListener('DOMContentLoaded', function() {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = 'GOLEM';
        button.className = 'btn-styled';
        
        button.onclick = function() {
           alert("estas haciendo clak en el de abajo")
           
            // …
        };
    
        let container = document.getElementById('container');
        container.appendChild(button);
    }, false);
    
    <div class="personaje2" id="personaje2">
                <img src="img/arquero.png" >
                <div class="flechas">
        
            </div>
            <div class="personaje" id="personaje3">
                <img src="img/bruja.png" >
                
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje" id="personaje4">
                <img src="img/caballero.png" >
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje" id="personaje5">
                <img src="img/dragon.png" >
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/FavIcon.png" alt="personaje6">
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/goblin.webp" alt="personaje7">
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/los-pillos.png" alt="personaje8">
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/Miner_info.webp" alt="personaje9">
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/montaPuercos.webp" alt="personaje10">
                <div class="flechas">
                    <i>i</i>
                    <i>d</i>
            </div>
            <div class="personaje">
                <img src="img/Pekka.webp" alt="personaje11">
            </div>
            <div class="personaje">
                <img src="img/principe.png" alt="personaje12">
            </div>*/