import m from 'mithril';
import * as model from "./model";

model.fetchAjax()
export function PictureList({ attrs }) {


  function view({ attrs }) {

    let col1 = model.getCol(1)
    let col2 = model.getCol(2)
    let col3 = model.getCol(3)

    // Timer pour prévenir des connexions lentes (chargement supérieur à 30s)
    const slowLoad = window.setTimeout( function() {
      alert( "Une petit soucis internet ?" );
    }, 30000 );

    // On lance le timer au load, si le load dépasse le timer, on envoie l'info au client
    window.addEventListener( 'load', function() {
      window.clearTimeout( slowLoad );
    }, false );

    // Execution de la requete lorsque le scroll atteint de bas de la page
    window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('bottom')
        model.fetchAjax()
      }
    };

    // Lazyloading pour booster les performances
    document.addEventListener("DOMContentLoaded", function() {
      let lazyloadImages;

      if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        let imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              let image = entry.target;
              image.src = image.dataset.src;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });

        lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      } else {
        let lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload () {
          if(lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
          }

          lazyloadThrottleTimeout = setTimeout(function() {
            let scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
            });
            if(lazyloadImages.length == 0) {
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
              window.removeEventListener("orientationChange", lazyload);
            }
          }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
      }
    })


    return m('div.picture-list.row', [

      // column #1
      m('div.col', [
        Object.keys(col1).map((item, index) => {
          return m('div', [
            m('img.lazy', {src: col1[index].download_url, loading: "lazy"}),
            m('p.legende', col1[index].author)
          ])
        }),
      ]),

      // column #2
      m('div.col', [
        Object.keys(col2).map((item, index) => {
          return m('div', [
            m('img.lazy', {src: col2[index].download_url, loading: "lazy"}),
            m('p.legende', col2[index].author)
          ])
        }),
      ]),

      // column #3
      m('div.col', [
        Object.keys(col3).map((item, index) => {
          return m('div', [
            m('img.lazy', {src: col3[index].download_url, loading: "lazy"}),
            m('p.legende', col3[index].author)
          ])
        }),
      ]),
    ])
  }
  return { view };
}

