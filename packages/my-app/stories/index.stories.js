import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { MyApp } from '../src/MyApp.js';
import '../my-app.js';

storiesOf('my-app', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(MyApp))
  .add(
    'Alternative Title',
    () => html`
      <my-app .title=${'Something else'}></my-app>
    `,
  );
