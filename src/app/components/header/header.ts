import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header id="header">
      <div id="logo">
        <a routerLink="/">
          <img id="logo-svg" src="/images/fsj.svg" alt="fsj logo" height="100" width="100" />
          <img id="logo-shadow" src="/images/fsj.svg" alt="" height="100" width="100" aria-hidden="true" />
        </a>
      </div>
      <nav [class.active]="menuOpen()">
        <div class="nav-container">
          <a
            class="nav-item mobile-only"
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            (click)="closeMenu()"
          >
            Home
          </a>
          <a
            class="nav-item desktop"
            routerLink="/cv"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            CV
          </a>
          <a
            class="nav-item desktop"
            routerLink="/posts"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Posts
          </a>
          <a
            class="nav-item desktop"
            routerLink="/portfolio"
            routerLinkActive="active"
            (click)="closeMenu()"
          >
            Portfolio
          </a>
          <button
            class="nav-item"
            [class.portfolio]="isPortfolio()"
            id="color-mode-toggle"
            type="button"
            aria-label="Toggle light and dark color mode"
            (click)="toggleColorMode()"
          >
            @if (themeService.colorMode() === 'light') {
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            } @else {
              <svg xmlns="http://www.w3.org/2000/svg" style="overflow: visible" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            }
          </button>
        </div>
        <button id="menu-icon" type="button" aria-label="Toggle navigation menu" (click)="toggleMenu()">
          <div></div>
        </button>
        <div id="blur" (click)="closeMenu()"></div>
      </nav>
    </header>
  `,
  styles: [`
    #header {
      display: flex;
      align-items: center;
      position: relative;
      padding-top: 1rem;
      z-index: 10;
    }

    #color-mode-toggle {
      touch-action: manipulation;
      stroke: white;
      fill: var(--fg);
      display: inline-flex;
      justify-content: center;
      padding-left: 1rem;
      cursor: pointer;

      svg {
        fill: var(--fg);
        stroke: var(--fg);
      }

      &.portfolio {
        opacity: 0.4;
      }
    }

    #logo {
      touch-action: manipulation;
      transition: transform 100ms ease, filter 100ms ease;
      position: relative;

      &:hover {
        transition: transform 240ms cubic-bezier(0, 0.62, 0.34, 1);
        transform: scale(1.16) rotate(-4deg);

        #logo-shadow {
          top: 0.2rem;
          opacity: 0.2;
          transition: all 240ms cubic-bezier(0, 0.62, 0.34, 1);
        }
      }

      &:active {
        transition: transform 100ms ease;
        transform: scale(1.12) rotate(-3deg);

        #logo-shadow {
          transition: all 100ms ease;
          top: 0.15rem;
          opacity: 0.15;
        }
      }

      #logo-shadow {
        left: 0;
        top: 0;
        position: absolute;
        z-index: -1;
        opacity: 0;
        filter: brightness(0) blur(0.2rem);
        transition: all 100ms ease, filter 100ms ease;
      }
    }

    nav {
      .nav-container {
        display: flex;
        align-items: center;
      }

      button {
        background: none;
        border: none;
      }

      .nav-item {
        touch-action: manipulation;
        padding: 1.2rem;
        display: block;
        text-decoration: none;
        font-variation-settings: "wght" var(--font-weight-normal), "CASL" 1, "slnt" -15;
        font-size: larger;
        transform: translateY(-4px);
        color: var(--fg);
        transition: font-variation-settings 100ms, color 100ms;

        &.mobile-only {
          display: none;
        }

        &:nth-of-type(2) {
          padding-left: 2.4rem;
        }

        &:hover, &:active {
          font-variation-settings: "wght" var(--font-weight-bold), "CASL" 1, "slnt" -15;
        }

        &.active {
          color: var(--magenta);
          font-variation-settings: "wght" var(--font-weight-bold), "CASL" 1, "slnt" -15;
        }
      }
    }

    #menu-icon {
      touch-action: manipulation;
      display: none;
      height: 4rem;
      width: 4rem;
      padding: 0.8rem;
      transform: translateY(-4px);
      cursor: pointer;

      div {
        visibility: hidden;
      }

      &::before,
      &::after,
      & div {
        background: var(--fg);
        content: "";
        display: block;
        height: 8px;
        border-radius: 100px;
        margin: 3px 0;
        transition: 0.5s cubic-bezier(0, 0.62, 0.34, 1);
      }
    }

    .active #menu-icon {
      &:before {
        margin: 7px 0;
        transform: translateY(8px) rotate(135deg);
      }
      &:after {
        margin: 7px 0;
        transform: translateY(-22px) rotate(-135deg);
      }
    }

    #blur {
      pointer-events: none;
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 300ms cubic-bezier(0, 0.62, 0.34, 1);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--bg);
        opacity: 0.7;
      }
    }

    @media screen and (max-width: 767px) {
      nav {
        z-index: 10;
        position: fixed;
        right: 0.4rem;
        padding-right: 0.8rem;
        flex-direction: row-reverse;

        .nav-container {
          flex-direction: column;
          align-items: flex-end;
          position: absolute;
          top: 4rem;
          right: 0;
          visibility: hidden;
        }

        #menu-icon {
          display: block;
        }

        .nav-item {
          font-size: x-large;
          font-variation-settings: "wght" var(--font-weight-normal), "CASL" 1, "slnt" -15;
          opacity: 0;
          transform: translateX(6rem);
          transition: transform 300ms cubic-bezier(0, 0.62, 0.34, 1),
            opacity 300ms cubic-bezier(0, 0.62, 0.34, 1),
            visibility 300ms cubic-bezier(0, 0.62, 0.34, 1);

          &.mobile-only {
            display: inline;
          }
        }

        &.active {
          position: fixed;

          .nav-item {
            transform: translateX(-0.5rem);
            visibility: visible;
            opacity: 1;
            transition: transform 600ms cubic-bezier(0, 0.62, 0.34, 1),
              opacity 600ms cubic-bezier(0, 0.62, 0.34, 1),
              visibility 600ms cubic-bezier(0, 0.62, 0.34, 1);
          }

          #blur {
            opacity: 1;
            pointer-events: auto;
          }
        }
      }
    }
  `],
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  readonly menuOpen = signal(false);
  readonly isPortfolio = computed(() => this.router.url === '/portfolio');

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleColorMode(): void {
    this.themeService.toggle();
  }
}
