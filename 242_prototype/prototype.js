function Soru(soruMetni, cevapSecenekleri, doğrucevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.doğrucevap = doğrucevap;
    
    console.log(this);
  }

  Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.doğrucevap;
  };
  
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
  