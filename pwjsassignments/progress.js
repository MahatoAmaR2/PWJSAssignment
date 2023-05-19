const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollHeight = docHeight - windowHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const percentScrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${percentScrolled}%`;
});