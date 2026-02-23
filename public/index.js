import React from "https://esm.sh/react@18.3.1";
import ReactDOM from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";
import menu from './data/menu.js';

const html = htm.bind(React.createElement);

const Logo = () => {
  return html`
    <div className="logo">
      <span className="logo--top">Cafe by Tyler</span>
    </div>
  `;
}

const Header = () => {
  return html`
    <header>
      <h1>
        <${Logo} />
      </h1>
      <div className="social-media-links">
        <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.6-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
      </div>
    </header>
  `;
}

const HeroBanner = ({ heading }) => {
  return html`
    <section className="hero-banner">
      <div className="hero-banner-image" aria-hidden="true"></div>
      <div className="hero-banner-content">
        <h2>${heading}</h2>
      </div>
    </section>
  `;
}

const MenuList = ({ type }) => {
  return html`
    <ul className="menu-list">
      ${[...menu].filter(menuItem => menuItem.type === type).map(menuItem => {
    return html`
          <li className="menu-item" key=${menuItem.id}>
            <span className="item-name">${menuItem.itemName}</span>
            <span className="detail">${menuItem.detail}</span>
          </li>
        `
  })}
    </ul>
  `;
}

const Home = () => {
  return html`
    <React.Fragment>
      <${HeroBanner} heading="Menu" />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Milk Selections:</span> Oat... and only oat</p>
        <p className="menu-info"><span className="bold">House Made Syrups:</span> Vanilla, Sugar Cookie, Maple</p>
        <p className="menu-info">✧: <span className="italics">house specialty</span></p>
        <h4>Coffee</h4>
        <${MenuList} type="Coffee" />
        <h4>Espresso</h4>
        <${MenuList} type="Espresso" />
        <h4>Tea</h4>
        <${MenuList} type="Tea" />
        <h4>Boozy</h4>
        <${MenuList} type="Boozy" />
      </section>
    </React.Fragment>
  `;
}

const Footer = () => {
  return html`
    <footer>
      <div className="coffee-shop-footer">
        <div className="social-media-links">
          <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.6-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </div>  
        <h3>
          <${Logo} />
        </h3>
      </div>
      <hr />
      <div className="app-footer">Forked from <a href="https://autumnchris.github.io/portfolio" target="_blank" rel="noopener noreferrer">Autumn Bullard's</a> amazing <a href="https://github.com/autumnchris/multipage-coffee-shop-site-reactjs" target="_blank" rel="noopener noreferrer">coffee shop example</a>!</div>
    </footer>
  `;
}

const App = () => {
  return html`
      <a href="#main-content" className="skip-link">Skip to content</a>
      <${Header} />
      <main id="main-content">
      <${Home} />
      </main>
      <${Footer} />
  `;
}

function main() {
  const root = ReactDOM.createRoot(document.body);
  root.render(html`<${App} />`);
}

main();
