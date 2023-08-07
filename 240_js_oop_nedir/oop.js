// obeje tanımla

// Souru
//     sorumetni

//     cevaplar
//     doğru cevap
//     cevabıkontrolet_fonksiyon

let soru = {
  soruMetni: "Hangisi javasicript paket yönetim uygulamasıdır?",
  cevaplar: {
    a: "Node.js",
    b: "Typescript.js",
    c: "Npm",
  },
  doğrucevap: "c",
  cevabiKontrolEt: function (cevap) {
    return cevap === this.doğrucevap;
  },
};
console.log(`
    Soru 1: ${soru.soruMetni} 
    cevaplar: 
    A)${soru.cevaplar.a}
    B)${soru.cevaplar.b}
    C)${soru.cevaplar.c} 

    cevap: c) ${soru.cevaplar.c}
    cevap kontrol: ${soru.cevabiKontrolEt("c")}         
`);
// console.log();
// console.log(soru.cevaplar);
// console.log(`cevap: c) ${soru.cevaplar.c}`);
// console.log(soru.cevabiKontrolEt("c"));
