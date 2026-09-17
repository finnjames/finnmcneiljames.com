import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ColorMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly colorMode = signal<ColorMode>(this.getInitialColorMode());

  constructor() {
    if (this.isBrowser) {
      this.applyColorMode(this.colorMode());
    }
  }

  toggle(): void {
    const nextMode = this.colorMode() === 'light' ? 'dark' : 'light';
    this.setColorMode(nextMode);
  }

  setColorMode(mode: ColorMode, persist = true): void {
    this.colorMode.set(mode);
    if (this.isBrowser) {
      this.applyColorMode(mode);
      if (persist) {
        try {
          window.localStorage.setItem('color-mode', mode);
        } catch {
          // ignore localStorage access errors
        }
      }
    }
  }

  private applyColorMode(mode: ColorMode): void {
    if (this.isBrowser) {
      document.documentElement.setAttribute('data-color-mode', mode);
    }
  }

  private getInitialColorMode(): ColorMode {
    if (!this.isBrowser) {
      return 'light';
    }
    try {
      const persisted = window.localStorage.getItem('color-mode');
      if (persisted === 'dark' || persisted === 'light') {
        return persisted;
      }
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      if (mql.matches) {
        return 'dark';
      }
    } catch {
      // ignore
    }
    return 'light';
  }
}
