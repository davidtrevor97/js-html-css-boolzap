// Riprodurre il layout cosi come nella grafica (allegata sotto) utilizzando HTML e CSS. Cercate di essere il più fedeli possibile.
// Utilizare come file js per l'applicazione il main.js che trovate  in allegato
// Popolare l'interfaccia, come visto all'assegnazione,  con i dati del vostro utente (Nome utente) e i dati dei contatti (Michele, Fabio, Samuele, Luisa) utilizzando i data di vue.
// Sempre in allegato troverete le imagini per sfondo e vari avatar.
// Per le icone utilizzate pure fontawesome.
const container = new Vue({
  el:".container",
  data: {
    pictures: [
      {
        name: "io", img: "_io"
      },
      {
        name: "michele", img: "_1"
      },
      {
        name: "fabio", img: "_2"
      },
      {
        name: "samuele", img: "_3"
      },
      {
        name: "luisa", img: "_4"
      },
    ],
  }
});
