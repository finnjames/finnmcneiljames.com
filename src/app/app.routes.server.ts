import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { PostsService } from './services/posts.service';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'posts/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const postsService = inject(PostsService);
      return postsService.getPosts().map((post) => ({ slug: post.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
