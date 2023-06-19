import { Header } from '../../components/Header/index.js'
import { Footer } from '../../components/Footer/index.js'

import './style.css'

export const ErrorPage = () => {

    const element = document.createElement("div")
    element.classList.add("page")

    element.append(Header())
    element.innerHTML += `
    <div class="error-page">
        <h1>Chyba 404</h1>
        <p>Tady bohužel nic není.</p>
        <a href="/">Vrátit se na domovskou stránku</a>
    </div>
    `
    element.append(Footer())

    return element
}