import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";

export const ContactPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container">
      <h1>Kontakt</h1>
      <div class="recipes"></div>
    </main>
  `;
  element.append(Footer());
  return element;
}
