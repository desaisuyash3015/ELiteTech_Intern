var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    function updateActiveLink() {
      let index = sections.length;
  
      while (index-- && window.scrollY + 50 < sections[index].offsetTop) {}
  
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLinks[index]) {
        navLinks[index].classList.add('active');
      }
    }
  
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
  });
  
  
  
  
  