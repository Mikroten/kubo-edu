document.addEventListener('DOMContentLoaded', function(){
    var bodyStranky;

    //odchytavanie el
    document.querySelector('body');
    document.getElementById('body');
    document.getElementsByClassName('body');
    document.getElementsByTagName('body');
    document.querySelectorAll('body');

    //changing elements
    var h1 = document.querySelector('h1');
    h1.textContent = 'Poop';
    h1.innerHTML = '<span style="color:red">Poop2<span>';

    //creating new element
    var container = document.getElementById('container');
    var createdH2 = document.createElement('H2'); //1
    createdH2.textContent = 'Piss';
    container.appendChild(createdH2);

    //Adding classes on elements
    let h1Element = document.getElementsByTagName('h1')[0];   
    h1Element.classList //vylistujes classy
    h1Element.classList.add('dolezity-nadpis');
    h1Element.classList.remove('dolezity-nadpis');
    h1Element.classList.replace('nadpis', 'dolezity-nadpis');
    h1Element.classList.toggle('nadpis');


    //Pretypovanie
    Number('r') // 3
    String(3) // '3'


    //If/else

    if(4 === String(4)){
    }else if(4 === String(4)){
        
    }else if(4 === String(4)){
        
    }else{
        // alert('je to v pici');
    }

    '3' - 3

    //Conditions
    /*
    > - vacsie
    < - mensie
    <= - mensie rovne
    >= - vacie rovne
    ==  - rovne
    === - striktne rovne
    != - nerovne
    !== - striktne nerovne

    //logicke Spajace
    && - AND - logicke plus
    || - OR - logicke alebo

    (3==3 && 4==3) //false
    (3==3 || 4==3) //true
    (3==3 || 4==3 || 4==3 || 4==3) //true
    */

    if(('4' === String(4) && 3==3) && ('4' === String(4) && 3==3)){
        // var veta = prompt('Ano');
        // alert(veta)
    }else{
        // prompt('Ne');
    }

    //Switch
    let jedlo = 'rozok';
    switch(jedlo){
        case 1:
            console.log(jedlo);
            break;
        case 'rozok':
            console.log(jedlo);
            break;
        case 'chleba':
            console.log(jedlo);
            break;
    }


    //Loops

    // let premenna = 1;
    // while(premenna <= 10){
    //     console.log('Poop');
    //     premenna = premenna + 2;
    // }

    // for(let i = 0;i < 10; i++){
    //     var u = 'lel';
    //     console.log(u);
    //     for(let i = 0;i < 10; i++){
    //         u = u + String(i);
    //         console.log(u);
    //     }
    // }

    //Vypisovanie poli

    var pole5 = [1,2,3,4,5,6,7,8,9,0];
    for(let i = 0; i <= pole5.length; i++){
        console.log(pole5[i]);
    }


    //Tento Loop prida 5 divov do elementu #container
    for(let i = 1; i <= 5; i++){
        var novyDiv = document.createElement('DIV');
        novyDiv.classList.add('box');
        novyDiv.style.height = '70px';
        novyDiv.style.width = '140px';
        var novyText = document.createElement('P');
        novyText.textContent = 'Div cislo ' + i;
        
        switch(i){
            case 1:
                novyDiv.style.backgroundColor = 'red';
                novyText.style.color = 'white';
                break;
            case 2:
                novyDiv.style.backgroundColor = 'lightblue';
                novyText.style.color = 'white';
                break;
            case 3:
                novyDiv.style.backgroundColor = 'pink';
                novyText.style.color = 'black';
                break;
            case 4:
                novyDiv.style.backgroundColor = 'yellow';
                novyText.style.color = 'black';
                break;
            case 5:
                novyDiv.style.backgroundColor = 'black';
                novyText.style.color = 'white';
                break;
            default:
                console.log('uz neni div');
        }
        novyDiv.appendChild(novyText);
        container.appendChild(novyDiv);
    }

    for (let i = 0; i < divy.length; i++) {
        rnd1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        rnd2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        rnd3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        divy[i].style.backgroundColor = 'rgb(' + rnd1 +',' + rnd2 +',' + rnd3 +')';
    }

})