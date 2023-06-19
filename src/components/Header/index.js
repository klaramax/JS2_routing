import './style.css';

export const Header = () => {
  const element = document.createElement('header');
  element.innerHTML = `
    <div class="container header-container">
      <div class="brand">
        <div class="brand__logo"></div>
        <div class="brand__name">Nákupy</div>
      </div>
      <nav class="navigation">
        <a href="/" class="nav-home navlink">Domů</a>
        <a href="/recepty" class="nav-recipes navlink">Recepty</a>
        <a href="/kontakt" class="nav-kontakt navlink">Kontakt</a>
      </nav>
    </div>
  `;

  if (location.pathname === '/') {
    element.querySelector('.nav-home').classList.add('navlink--active');
  } else if (location.pathname === '/recepty') {
    element.querySelector('.nav-recipes').classList.add('navlink--active');
  }
  else if (location.pathname === '/kontakt') {
    element.querySelector('.nav-kontakt').classList.add('navlink--active');
  }

  return element;
}
