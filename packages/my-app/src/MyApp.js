import { html } from 'lit-html';
import { component, useState } from 'haunted';
import { classMap } from 'lit-html/directives/class-map.js';
import { openWcLogo } from './open-wc-logo.js';

import '../../page-main/page-main.js';
import '../../page-one/page-one.js';
import { templateAbout } from './templateAbout.js';

function addActiveIf(el, page) {
  return classMap({ active: el.page === page });
}

function renderPage(page) {
  switch (page) {
    case 'main':
      return html`
        <page-main .logo=${openWcLogo}></page-main>
      `;
    case 'pageOne':
      return html`
        <page-one></page-one>
      `;
    case 'about':
      return templateAbout;
    default:
      return html`
        <p>Page not found try going to <a href="#main">Main</a></p>
      `;
  }
}

function styles() {
  return html`
    <style>
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
      }

      :host > header,
      :host > main,
      :host > p {
        display: flex;
      }

      header {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
      }

      header ul {
        display: flex;
        justify-content: space-between;
        min-width: 400px;
        margin: 0 auto;
        padding: 0;
      }

      header ul li {
        display: flex;
      }

      header ul li a {
        color: #ccc;
        text-decoration: none;
        font-size: 18px;
        line-height: 36px;
      }

      header ul li a:hover,
      header ul li a.active {
        color: #000;
      }

      main {
        flex-grow: 1;
      }

      .app-footer {
        color: #a8a8a8;
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    </style>
  `;
}

export const MyApp = component(el => {
  const [page, setPage] = useState('main');

  function clickPageLink(ev) {
    ev.preventDefault();
    setPage(ev.target.hash.substring(1));
  }

  return html`
    ${styles()}
    <header>
      <ul>
        <li>
          <a href="#main" class=${addActiveIf(el, 'main')} @click=${clickPageLink}>Main</a>
        </li>
        <li>
          <a href="#pageOne" class=${addActiveIf(el, 'pageOne')} @click=${clickPageLink}
            >Page One</a
          >
        </li>
        <li>
          <a href="#about" class=${addActiveIf(el, 'about')} @click=${clickPageLink}>About</a>
        </li>
      </ul>
    </header>

    <main>
      ${renderPage(page)}
    </main>

    <p class="app-footer">
      🚽 Made with love by
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
    </p>
  `;
});
