import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";
import { Recipe } from './Recipe/index.js';
import './style.css';

export const RecipesPage = () => {

  const element = document.createElement("div");
  element.classList.add("page");

  element.append(Header());
  element.innerHTML += `
    <main class="recipes-page">
        <h1>Recepty</h1>
        <div class="recipes-list"></div>
    </main>
    `
  element.append(Footer());


  fetch(`https://nakupy.kodim.app/api/me/recipes`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json())
    .then(data => {
      const recipes = data.result.map(recipe => Recipe({
        title: recipe.title,
        imageUrl: recipe.imageUrl,
        url: recipe.url,
      }))
      element.querySelector(".recipes-list").append(...recipes);
    });

  return element;
}
