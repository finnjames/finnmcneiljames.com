import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  imports: [RouterLink],
  template: `
    <div class="posts-page">
      <h1>Posts</h1>

      <ul class="posts">
        @for (post of posts(); track post.slug) {
          <li>
            <h2>
              <a [routerLink]="['/posts', post.slug]">{{ post.title }}</a>
            </h2>
            <p>{{ post.snippet }}</p>
            <p class="med-gray">{{ post.formattedDate }}</p>
          </li>
        }
      </ul>
    </div>
  `,
  styles: [`
    .posts-page {
      padding-bottom: 2rem;
    }

    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .posts {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 1rem 0;

        h2 {
          margin-top: 0.5rem;
          margin-bottom: 0.4rem;
        }

        p {
          padding: 0;
          margin-top: 0;
          margin-bottom: 0.4rem;
          color: var(--fg);

          &.med-gray {
            color: var(--med-gray);
            font-size: 0.95rem;
          }
        }
      }
    }
  `],
})
export class PostsListComponent {
  private readonly postsService = inject(PostsService);
  readonly posts = computed(() => this.postsService.getPosts());
}
