console.log('Hello World!');
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.getElementById("about");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add("visible");
        observer.unobserve(aboutSection); // only trigger once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(aboutSection);
});