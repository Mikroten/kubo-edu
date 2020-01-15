document.addEventListener('DOMContentLoaded', function(){
    //variables
    let pecka = document.querySelectorAll('p');


    //this
    for (let p = 1; p < pecka.length; p++) {
        pecka[i].addEventListener('click', function(event){
            this.style.color = 'pink';
        }) 
    }

    //push, pop
    let ovocie = ['banan', 'hruska', 'jablcko'];
    // ovocie.push('melon'); - prida na koniec
    // ovocie.push('jahodka'); - odoberie z konca
    
    // ovocie.pop();
   

    //unshit(unshift), shift 
    // ovocie.shift(); - odoberie z konca
    // ovocie.unshift('melonik') - prida na zaciatok

    //indexOf
    ovocie[ovocie.indexOf('banan')]; //zisti index stringu v poli

    //find - prebehne cez kazdy elemnt v poli s tym ze pouziva logicke operatory
    const array1 = [5, 12, 8, 130, 44];
    let prvecloVacsieAkoDesatVTomtoErei = array1.find(function(element){
        return element > 10;
    });

    //find ma aj svoj index a pokial mu nedas logicku operaciu prebehne cez cele pole, to viez vyuzit na zistenie
    //ake udaje mas v poli na akom indexe

    ovocie.find(function(element, index){
        console.log('ovocie '+ element+' je na pozicii '+ index);
    });

    //splice - rozdeluje a zaroven spaja (deletuje hodnoty z arrayu) - ??temuto stale nechapem
    console.log(ovocie.splice(0,2));

    //map prebehne cez kazdu hodnotu v danom poli, spravi s nou operacie a vyflusne novy array
    const array2 = [1, 4, 9, 16];
    const map1 = array2.map(function(e){
        return e * 2;
    });
    console.log(map1); //[2, 8, 18, 32]



    //tu zacina blog inak
    var miestoPreClanky = document.getElementById('container');

    //JSON
    //JSON.stringify - ulozi do stringu v JSON formate
    //JSON.parse - vybuduje z JSON stringu povodnu hodnotu

    //vyberie z localstorage hodnotu ulozenu pod menom clanky a spravi JSON parse 
    //aby sa prehodila zo stringu do povodneho stavu
    let aktualneClanky = JSON.parse(localStorage.getItem('clanky')); 
    vygenerujClanky(aktualneClanky);
    
    //funkcia ktora zozerie array plny objektov(clankov) a vygeneruje ich na stranke
    function vygenerujClanky(arr1){
        //forEach prebehne cez kazdu hodnotu v poli, pouziva na to v tomto pripade slovo 'clanok'
        //co je vlastne index elementu v arrayi na ktorom je
        arr1.forEach(function(clanok){
            var samotnyClanok = document.createElement('div');
            var title = document.createElement('h1')
            title.textContent = clanok.nadpis;
            var sub = document.createElement('h3');
            sub.textContent = clanok.podnadpis;
            var text = document.createElement('p');
            text.textContent = clanok.text;
            samotnyClanok.appendChild(title)
            samotnyClanok.appendChild(sub)
            samotnyClanok.appendChild(text);
            miestoPreClanky.appendChild(samotnyClanok);
        });
    }

    document.getElementById('save').addEventListener('click', function(){
        var n = document.querySelector('input[name="nadpis"]').value;
        var p = document.querySelector('input[name="podnadpis"]').value;
        var t = document.querySelector('textarea').value;
        var clanok = {
            nadpis: n,
            podnadpis: p,
            text: t
        }

        //pushne novy clanok do arrayu s ostatnymi clankami
        aktualneClanky.push(clanok);

        var aktualneClankyJSON =  JSON.stringify(aktualneClanky)
        localStorage.setItem('clanky', aktualneClankyJSON);
        vygenerujClanky(aktualneClanky);
    }); 
})