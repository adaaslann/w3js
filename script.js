let soru = {
  soruMetni: "hangisi js paket yönetim uygulamasıdır?",
  cevapSecenekleri: {
    a: "node.js",
    b: "typescript",
    c: "npm",
  },

  dogruCevap: "c",
  cevabiKontrolEt: function (cevap) {
    return cevap === this.dogruCevap;
  },
};
//console.log(soru.soruMetni);
//console.log(soru.cevabiKontrolEt("c"));

//sınıf/constructor=>nesne*30

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = soruMetni;
  this.dogruCevap = dogruCevap;
}

let soru1 = new Soru("hangisi bıdıbıdır", {
  a: "nau nau",
  b: "hohoho",
  c: "zozozo",
  d: "helelele",
});

console.log(soru1.soruMetni);
console.log(soru1.soruMetni);
