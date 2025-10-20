// scripts.js - funciones comunes (frontend-only)
document.addEventListener('DOMContentLoaded', function(){
  // preserve simple navigation highlighting
  const links = document.querySelectorAll('.nav-link');
  links.forEach(l => {
    if(l.href === location.href || (l.getAttribute('href') && location.pathname.endsWith(l.getAttribute('href')))){
      l.classList.add('active');
    }
  });
});