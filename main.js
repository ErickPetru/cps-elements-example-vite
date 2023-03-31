import './style.css';
import elementsLogo from './cps-elements.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

import '@cps-elements/web/themes/dark.css';
import { setBasePath } from '@cps-elements/web/utilities/base-path.js';

export { CpsButton } from '@cps-elements/web/components/button.js';
export { CpsIcon } from '@cps-elements/web/components/icon.js';

setBasePath('/node_modules/@cps-elements/web');

document.querySelector('#app').innerHTML = `
  <a href="https://vitejs.dev" target="_blank">
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>

  <a href="https://cpsrepositorio.github.io/cps-elements/" target="_blank">
    <img src="${elementsLogo}" class="logo cps-elements" alt="CPS Elements logo" />
  </a>

  <h1>Vite + CPS Elements</h1>

  <div>
    <cps-button id="counter" type="button" variant="accent"></cps-button>
  </div>

  <p>
    Click the button above to add one to the counter.
  </p>
`;

setupCounter(document.querySelector('#counter'));
