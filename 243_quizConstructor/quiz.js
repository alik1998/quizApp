function Soru(soruMetni, cevapSecenekleri, doğrucevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.doğrucevap = doğrucevap;

  // console.log(this);
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
  return cevap === this.doğrucevap;
};

let sorular = [
  new Soru(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "2-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "3-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

//bana sorular arrayından soruyu alıp soracak bir constructoroluşturdum

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
//quiz prototyp ine soruGetir adlı fonksiyon oluşturuldu
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    console.log(quiz.soruGetir());
    quiz.soruIndex += 1;
  } else {
    console.log("quiz bitti");
  }
});
