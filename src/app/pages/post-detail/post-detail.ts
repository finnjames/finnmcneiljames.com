import { Component, computed, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-detail',
  imports: [RouterLink],
  template: `
    @if (post(); as p) {
      <article class="post-article">
        <a routerLink="/posts" class="back-link">← All Posts</a>
        <h1 class="post-title">{{ p.title }}</h1>
        <p class="post-date">{{ p.formattedDate }}</p>
        <div class="post-content" [innerHTML]="p.contentHtml"></div>
      </article>
    } @else {
      <div class="not-found">
        <h1>Post Not Found</h1>
        <p>The post you are looking for could not be found.</p>
        <a routerLink="/posts">← Back to all posts</a>
      </div>
    }
  `,
  styles: [`
    .post-article {
      padding-bottom: 3rem;
    }

    .back-link {
      display: inline-block;
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      text-decoration: none;
    }

    .post-title {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 2.4rem;
      line-height: 1.2;
    }

    .post-date {
      color: var(--med-gray);
      margin-top: 0;
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    .post-content {
      line-height: 1.6;

      p {
        margin-bottom: 1.2rem;
      }

      h2 {
        margin-top: 2rem;
        margin-bottom: 0.8rem;
      }

      h3 {
        margin-top: 1.5rem;
        margin-bottom: 0.6rem;
      }

      h4 {
        margin-top: 1.2rem;
        margin-bottom: 0.5rem;
      }

      ol, ul {
        margin-bottom: 1.2rem;
        padding-left: 1.5rem;

        li {
          margin-bottom: 0.5rem;
        }
      }
    }

    .not-found {
      padding: 3rem 0;
      text-align: center;
    }
  `],
})
export class PostDetailComponent {
  private readonly postsService = inject(PostsService);
  private readonly route = inject(ActivatedRoute);
  private readonly routeParamMap = toSignal(this.route.paramMap);

  readonly slug = input<string>();

  readonly post = computed(() => {
    const slugValue = this.slug() ?? this.routeParamMap()?.get('slug');
    if (!slugValue) {
      return undefined;
    }
    return this.postsService.getPostBySlug(slugValue);
  });
}
