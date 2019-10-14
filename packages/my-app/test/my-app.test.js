import { html, fixture, expect } from '@open-wc/testing';

import '../my-app.js';

const later = () => new Promise(resolve => setTimeout(resolve, 50));

describe('MyApp', () => {
  it('has page "main" by default', async () => {
    const el = await fixture(html`
      <my-app></my-app>
    `);
    const shadow = el.shadowRoot;
    const main = shadow.querySelector('main');
    const { page } = main.dataset;

    expect(page).to.equal('main');
    expect(main).lightDom.to.equal(`
      <page-main></page-main>
    `);
  });

  it('renders page-one if page property is set to pageOne', async () => {
    const el = await fixture(html`
      <my-app page="pageOne"></my-app>
    `);
    expect(el.shadowRoot.querySelector('main')).lightDom.to.equal(`
      <page-one title="Hey there"></page-one>
    `);
  });

  it('changes the page if a menu link gets clicked', async () => {
    const el = await fixture(html`
      <my-app></my-app>
    `);
    el.shadowRoot.querySelectorAll('header a')[2].click();
    await later();
    const shadow = el.shadowRoot;
    const main = shadow.querySelector('main');
    const { page } = main.dataset;

    expect(page).to.equal('about');
  });
});
