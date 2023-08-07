// let soru = {
//     soruMetni: "Hangisi javasicript paket yönetim uygulamasıdır?",
//     cevaplar: {
//       a: "Node.js",
//       b: "Typescript.js",
//       c: "Npm",
//     },
//     doğrucevap: "c",
//     cevabiKontrolEt: function (cevap) {
//       return cevap === this.doğrucevap;
//     },
//   };
//   console.log(`
//       Soru 1: ${soru.soruMetni}
//       cevaplar:
//       A)${soru.cevaplar.a}
//       B)${soru.cevaplar.b}
//       C)${soru.cevaplar.c}

//       cevap: c) ${soru.cevaplar.c}

//       cevap kontrol: ${soru.cevabiKontrolEt("c")}
//   `);

// sınıf, constructor => nesne * 30 (kalıp tanımlaması)
// ES5, ES6, ES7

function Soru(soruMetni, cevapSecenekleri, doğrucevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.doğrucevap = doğrucevap;
  this.cevabiKontrolEt = function (cevap) {
    return cevap === this.doğrucevap;
  };
}

let soru1 = new Soru(
  "Hangisi javasicript paket yönetim uygulamasıdır?",
  { a: "Node.js", b: "Typescript.js", c: "Npm" },
  "c"
);

let soru2 = new Soru(
  "Hangisi .net paket yönetim uygulamasıdır?",
  { a: "Node.js", b: "Nuget", c: "Npm" },
  "b"
);

let sorular = [
  new Soru(
    "Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript.js", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi javasicript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript.js", c: "Npm" },
    "c"
  ),
  new Soru(
    "Hangisi .net paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Nuget", c: "Npm" },
    "b"
  ),
];
// console.log(sorular[0].soruMetni);
console.log(soru1.soruMetni);
console.log(soru1.doğrucevap);
console.log(soru1.cevabiKontrolEt("c"));
// console.log(soru2.soruMetni);
// console.log(soru2.doğrucevap);
