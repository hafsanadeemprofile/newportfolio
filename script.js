

   const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('header');
    // const mainContent = document.getElementById('main-content');
    const navLinks = sidebar.querySelectorAll('nav a');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      sidebar.classList.toggle('show');
      document.getElementById('close-button').style.display= "block";
    })

    function Close() {
        // document.getElementById("close-button");
        sidebar.classList.remove('show');
        burger.classList.toggle('active');  
        // sidebar.classList.toggle('show');

    }

    // Close sidebar and update active link when clicking navigation links on mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('show');
        burger.classList.remove('active');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Optional: highlight nav link on scroll
    window.addEventListener('scroll', () => {
      let fromTop = window.scrollY + 100; // Offset for header height
      navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });


      // Optional: reveal sections on scroll with fade-in effect
  const sections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);