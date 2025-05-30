
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


  const hamMenu= document.querySelector('.hammenu');
  const offScreen = document.querySelector('.offscreen');
  hamMenu.addEventListener('click',()=>{
  hamMenu.classList.toggle('active');

  }
)
