// Prototype,Ajax,Callback

addEventListeners();

function addEventListeners(){
    document.getElementById("translate-form").addEventListener("sunmit",translateWord);
    // Change
    document.getElementById("language").onchange = function(){
        // Arayüz İşlemleri
    }
}

function translateWord(e){



    e.preventDefault();
}