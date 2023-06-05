const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', () => {
      if (document.getElementById('dark').checked) {
        document.querySelector('body').classList = "dark";
        localStorage.setItem('theme', 'dark');
      } else {
        (document.querySelector('body').classList = "light");
        localStorage.setItem('theme', 'light');
      }
    });
  }