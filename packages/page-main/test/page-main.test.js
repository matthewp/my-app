import { html, fixture, expect } from '@open-wc/testing';

import '../page-main.js';

describe('PageMain', () => {
  it('has a default title "Hello open-wc world!"', async () => {
    const el = await fixture(html`
      <page-main></page-main>
    `);
    const shadow = el.shadowRoot;
    const h1 = shadow.querySelector('h1');

    expect(h1.textContent).to.equal('Hello open-wc world!');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <page-main title="attribute title"></page-main>
    `);

    expect(el.title).to.equal('attribute title');
  });
});
