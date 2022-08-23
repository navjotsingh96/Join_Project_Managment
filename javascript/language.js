function chnageLang() {

    console.log('clicked');

}

function EnglishLang() {
    let EN = document.getElementById('english');
    let EN1 = document.getElementById('english-1');
    let DE = document.getElementById('german');
    let DE1 = document.getElementById('german-1');

    let selectedEnglisch = document.getElementById('EN');
    let unselectDeutsch = document.getElementById('DE')
    selectedEnglisch.classList.add('selected');
    unselectDeutsch.classList.remove('selected');

    EN.classList.remove('d-none');
    EN1.classList.remove('d-none');
    DE.classList.add('d-none');
    DE1.classList.add('d-none');
    console.log('Done');

}

function DeutschLang() {
    let EN = document.getElementById('english');
    let EN1 = document.getElementById('english-1');
    let DE = document.getElementById('german');
    let DE1 = document.getElementById('german-1');

    let selectedDeustch = document.getElementById('DE');
    let unselectEnglish = document.getElementById('EN')

    unselectEnglish.classList.remove('selected')
    selectedDeustch.classList.add('selected')

    EN.classList.add('d-none');
    EN1.classList.add('d-none');
    DE.classList.remove('d-none');
    DE1.classList.remove('d-none');
    console.log('Done');


}