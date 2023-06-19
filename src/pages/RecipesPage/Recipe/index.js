import './style.css';

export const Recipe = (props) => {

    const { title, imageUrl, url } = props;

    const element = document.createElement("div");
    element.classList.add("recipe");

    element.innerHTML = `
        <h2>${title}</h2>
        <div>
            <img src="${imageUrl}" class="recipe-image" alt="Recipe image"> 
        </div>
        <a href="${url}">Zobrazit celý recept</a>
    `

    return element;
}


