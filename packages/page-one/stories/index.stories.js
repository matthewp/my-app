import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { PageOneElement } from '../src/PageOne.js';
import '../page-one.js';

storiesOf('page-one', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(PageOneElement))
  .add(
    'Alternative Title',
    () => html`
      <page-one .title=${'Something else'}></page-one>
    `,
  );
