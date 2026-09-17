import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'cv',
    loadComponent: () =>
      import('./pages/cv/cv').then((m) => m.CvComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio').then((m) => m.PortfolioComponent),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts-list/posts-list').then((m) => m.PostsListComponent),
  },
  {
    path: 'posts/:slug',
    loadComponent: () =>
      import('./pages/post-detail/post-detail').then((m) => m.PostDetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
