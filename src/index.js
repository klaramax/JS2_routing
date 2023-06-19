import { HomePage } from "./pages/HomePage/index.js";
import { RecipesPage } from "./pages/RecipesPage/index.js";
import { ContactPage } from "./pages/ContactPage/index.js";
import { ErrorPage } from './pages/ErrorPage/index.js'
import './style.css';

const appElement = document.querySelector('#app');

//client side routing
if (location.pathname === '/') {
  appElement.append(HomePage());
} else if (location.pathname === '/recepty') {
  appElement.append(RecipesPage());
} else if (location.pathname === '/kontakt') {
  appElement.append(ContactPage());
}
else {
  appElement.append(ErrorPage())
}
