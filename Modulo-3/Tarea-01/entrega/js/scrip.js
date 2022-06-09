
(function(){
    const sliders = [...document.querySelectorAll(".personaje")];
    const arrowSiguiente = document.querySelectorAll("#siguiente");
    const arrowAntes = document.querySelector('#antes')
    let value;

    arrowSiguiente.addEventListener("click", () =>changePosition(1));
    arrowAntes.addEventListener("click", () =>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.personaje1')
        .dataset.id);
        value = currentElement;
        value+= change;
        sliders[value-1].classList.toggle(".personaje1");
    }
})()
    
    
    
    
    
    
    
    
    
    /*let pocision = 0;
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