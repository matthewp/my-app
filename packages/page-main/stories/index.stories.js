import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { PageMainElement } from '../src/PageMain.js';
import '../page-main.js';

storiesOf('page-main', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PageMainElement))
  .add(
    'Alternative Title',
    () => html`
      <page-main .title=${'Something else'}></page-main>
    `,
  );
