import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EmailWidgetComponent } from '../../components/email-widget/email-widget';

@Component({
  selector: 'app-home',
  imports: [EmailWidgetComponent],
  host: {
    '(window:mousemove)': 'onMouseMove($event)',
  },
  template: `
    <div #bg id="bg"></div>
    <div class="relative">
      <div class="half">
        <h1 class="no-hash">Hey!</h1>

        <p class="intro-p">
          My name is <span class="bold hint--top hint--rounded" aria-label="he/him, please">Finn James</span>. How’s it going?
        </p>

        <p class="intro-p">
          I am a software engineer and amateur artist based in Durham, NC. I also build
          <a href="https://github.com/finnjames/threepio" target="_blank" rel="noopener">systems</a> for
          <a href="https://skynet.unc.edu" target="_blank" rel="noopener">telescopes</a>.
        </p>

        <p class="intro-p">
          <a href="https://github.com/finnjames" target="_blank" rel="noopener">GitHub</a> •
          <a href="https://instagram.com/notafinnsta" target="_blank" rel="noopener">Instagram</a>
        </p>

        <div class="email-wrapper">
          <app-email-widget />
        </div>
      </div>

      <div #splash id="splash" aria-hidden="true"></div>
      <div #helmet id="splash-helmet" aria-hidden="true"></div>
    </div>
  `,
  styles: [`
    #bg {
      position: fixed;
      top: -4%;
      left: -4%;
      width: 108%;
      height: 108%;
      background: url("/images/iss.webp");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.4;
      filter: contrast(80%);
      pointer-events: none;
      z-index: 0;
      transition: opacity 300ms ease;
    }

    .relative {
      position: relative;
      z-index: 1;
    }

    .half {
      max-width: 22rem;
      height: auto;
    }

    h1 {
      font-weight: bold;
      font-size: 3.2rem;
      margin-top: 1rem;
      margin-bottom: 1.6rem;
      font-variation-settings: "wght" var(--font-weight-bold), "CASL" 1, "slnt" -15;
    }

    .intro-p {
      font-size: large;
      line-height: 1.6rem;
      margin-bottom: 1.6rem;
      text-shadow: 0 0 2.2rem var(--bg);
    }

    .bold {
      font-variation-settings: "wght" var(--font-weight-bold);
    }

    .hint--top {
      font-family: "RecVar", sans-serif !important;

      &::before {
        border-top-color: var(--fg);
      }

      &::after {
        font-family: "RecVar", sans-serif;
        font-variation-settings: "wght" 550;
        background-color: var(--fg);
        color: var(--bg);
        text-shadow: none !important;
      }
    }

    .email-wrapper {
      margin-top: 2.4rem;
      transform: translateX(-1px);
    }

    #splash {
      background-image: url("/images/flight-suit-me.webp");
      background-size: auto 900px;
      background-repeat: no-repeat;
      position: fixed;
      right: calc(-28rem + 40vw);
      top: 2.2rem;
      min-height: 50rem;
      height: calc(100vh - 2rem);
      width: 600px;
      user-select: none;
      pointer-events: none;
      z-index: 1;
    }

    #splash-helmet {
      background-image: url("/images/flight-suit-helmet.webp");
      background-size: auto 900px;
      background-repeat: no-repeat;
      position: fixed;
      right: calc(-32rem + 40vw);
      top: 2.2rem;
      min-height: 50rem;
      height: calc(100vh - 2rem);
      width: 600px;
      user-select: none;
      pointer-events: none;
      z-index: 2;
    }

    @media (prefers-reduced-motion) {
      #bg,
      #splash,
      #splash-helmet {
        transform: none !important;
      }
    }

    @media screen and (max-width: 767px) {
      #splash {
        width: 100vw;
        position: relative;
        top: 0;
        left: 50%;
        right: 50%;
        min-height: 900px;
        margin-left: -50vw;
        margin-right: -50vw;
        display: block;
        background-position: calc(-300px + 50vw) 0;
      }

      #splash-helmet {
        display: none;
      }

      .half {
        max-width: none !important;
      }

      .email-wrapper {
        transform: none;
      }

      #bg,
      #splash,
      #splash-helmet {
        transform: none !important;
      }
    }
  `],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly bgRef = viewChild<ElementRef<HTMLElement>>('bg');
  readonly splashRef = viewChild<ElementRef<HTMLElement>>('splash');
  readonly helmetRef = viewChild<ElementRef<HTMLElement>>('helmet');

  private mouseX = 0;
  private mouseY = 0;
  private posX = 0;
  private posY = 0;
  private animationFrameId: number | null = null;
  private reducedMotion = false;

  ngOnInit(): void {
    if (this.isBrowser) {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.reducedMotion) {
        this.startAnimationLoop();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null && this.isBrowser) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.reducedMotion) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    }
  }

  private startAnimationLoop(): void {
    const loop = () => {
      this.float();
      this.animationFrameId = window.requestAnimationFrame(loop);
    };
    this.animationFrameId = window.requestAnimationFrame(loop);
  }

  private float(): void {
    this.posX += (this.mouseX - this.posX) * 0.04;
    this.posY += (this.mouseY - this.posY) * 0.04;

    const splash = this.splashRef()?.nativeElement;
    const helmet = this.helmetRef()?.nativeElement;
    const bg = this.bgRef()?.nativeElement;

    if (splash) {
      splash.style.transform = `translateX(${-this.posX / 20}px) translateY(${-this.posY / 40}px)`;
    }
    if (helmet) {
      helmet.style.transform = `translateX(${-this.posX / 10}px) translateY(${-this.posY / 20}px)`;
    }
    if (bg) {
      bg.style.transform = `translateX(${-this.posX / 40}px) translateY(${-this.posY / 80}px)`;
    }
  }
}
