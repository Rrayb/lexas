
    function quitterSite() {
      // Tente de fermer la fenêtre (ne fonctionne que si la page a été ouverte par script)
      window.close();

      // Si l'onglet ne se ferme pas, redirige vers un autre site
      setTimeout(() => {
        window.location.href = "https://www.google.fr";
      }, 500);
    }
  //  function scrollToTop() {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}



