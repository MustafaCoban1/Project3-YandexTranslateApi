function Translate(word,language){
    this.apikey = "trnsl.1.1.20180930T080756Z.753c49142579b043.b2798189b8760e7b357c9d23a8736ef0a54be481"
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLDocument();


}
Translate.prototype.translateWord = function(callback){
    // Ajax İşlemleri
    const endpoint = 
}