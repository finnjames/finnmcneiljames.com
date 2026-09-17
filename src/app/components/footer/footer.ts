import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div>
        This work licensed under
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      color: var(--med-light-gray);
      padding-bottom: 1rem;
      min-height: 6rem;

      a {
        color: var(--med-gray);

        &:hover {
          color: var(--med-dark-gray);
        }

        &:active {
          color: var(--dark-gray);
        }
      }

      div {
        text-align: center;
        margin: 0;
        position: relative;
        padding: 0.1rem;
      }
    }
  `],
})
export class FooterComponent {}
