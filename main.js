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
    let divy = document.getElementsByClassName('box');

    for (let i = 0; i < divy.length; i++) {
        rnd1 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        rnd2 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        rnd3 = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
        divy[i].style.backgroundColor = 'rgb(' + rnd1 +',' + rnd2 +',' + rnd3 +')';
    }

    //Functions - znovupouzitelne bloky kodu

    //anonymous function - funkcia ktora vola sama seba hned ako pride na rad
    (function(){
        console.log('lel');
    })()

    //normal function - ma meno, na jej spustenie ju treba zavolat
    function spocitajCisla(){
        console.log('2+3');
    }

    //return function - niekedy potrebujes pouzit vysledok funkcie, v tomto pripade sa pouziva return
    function spocitajCislaAVratIch(){
        return 2+2;
    }
    var stvorka = spocitajCislaAVratIch(); //4

    // funkcie mozu mat parametre, ktore do nej posles tym ze ich vloziz do zatvorky, sluzia ako premenne pouzitelne iba
    // vo funkcii, ked funkcia skonci vymazu sa
    function lel(a){
        return a+a;
    }

    //parametre mozu mat aj defaultnu hodnotu ak by sa vyskytol pripad ze mu ziadnu neposles
    function obsahStvoreca(dlzkaStrany = 5){
        let obsahStvoreca = dlzkaStrany*dlzkaStrany;
        var sestka = lel(3);
        return obsahStvoreca + ' '+ sestka;
    }


    //high-level komentovanie funkcii
    /**
     * Vypise clanok o pipiku
     * @param {string} textNadpisu Napis co bude h1
     * @param {string} textPodnadpisu podnaspis co bude h4
     * @param {string} textText normalny text
     */
    
    function vygenerujClanok(textNadpisu = 'Nadpis', textPodnadpisu, textText = 'Ziadny text'){
        var clankovyContainer = document.getElementById('clanky');
        var clanok = document.createElement('div');
        var nadpis = document.createElement('h1');
        var podnadpis = document.createElement('h4');
        var text = document.createElement('p');
        
        nadpis.textContent = textNadpisu;
        podnadpis.textContent = textPodnadpisu;
        text.textContent = textText;

        clanok.appendChild(nadpis);
        clanok.appendChild(podnadpis);
        clanok.appendChild(text);

        clankovyContainer.appendChild(clanok);
    }

    vygenerujClanok('Pipik', 'Pipik ma liecive ucinky', 'Cupcake muffin chocolate bar gummi bears liquorice candy bear claw sesame snaps. Dragée wafer lemon drops donut. Cake cheesecake marzipan.');
    vygenerujClanok('Pipik2', 'Pipik2 ma liecive ucinky', 'Cupcake muffin chocolate bar gummi bears liquorice candy bear claw sesame snaps. Dragée wafer lemon drops donut. Cake cheesecake marzipan.');

    //Eventy
    //klasicke pouzitie eventListeneru, musi mat 2 parametre, nazov eventu ktory sledujes a anonymnu funkciu v ktorej
    //mas kod ktory chces zavolat 

    // document.getElementById('stukButton').addEventListener('click', function(){
    //     vygenerujClanok('nadpis');
    // });


    //on[something] eventy - su to skratene eventlistenery, aby si nemusel tolko pisat
    // document.getElementById('stukButton').onclick = function(){
    //     vygenerujClanok('nadpis');
    // };

    //vsetky eventy najdes tu - https://developer.mozilla.org/en-US/docs/Web/Events (neuc sa ich, zatial ti staci click, DOMContentLoaded, keypress, mouseenter, mouseleave, mouseover, input a chnage - vacsinu z nich preberieme neskor)

    //Event details - ak chceme vedie info o evente pouzivame ako parameter anonymnej funkcie [e, evt, event]
    // v nej je vela info o tom co sa dialo ked sa pozadovany event stal a vies s nimi pracovat
    document.addEventListener('keypress', function(e){
        if(e.key === 'Enter'){ //zisti ci bol stlaceny enter
            vygenerujClanok(vypisPipik(), 'Pipik2 ma liecive ucinky', 'Cupcake muffin chocolate bar gummi bears liquorice candy bear claw sesame snaps. Dragée wafer lemon drops donut. Cake cheesecake marzipan.');
        }
    });

    
    // var pocetPipikov = 0;

    // function vypisPipik(){
    //     pocetPipikov++;
    //     return 'Pipik' + String(pocetPipikov);
    // }

    //e.preventDefault();
    //preventdefault sa pouziva ak chceme zastavit defaultne spravanie elementu, v tomto pripade zastavenie odoslania formularu
    //dalsie vyuzitie moze byt zastavenie linky pred presmerovanim na inu stranku
    document.getElementById('form').addEventListener('submit', function(e){
        var inputText = document.querySelector('input[name="meno"]').value;
        if(inputText === ''){
            e.preventDefault();
            document.getElementById('errorMessage').textContent = 'Ur retarded!'
        }else{
            e.preventDefault();
            document.getElementById('errorMessage').textContent = 'Si napisal ze ' +inputText;
            document.querySelector('input[name="meno"]').value = '';
        }
    });

})