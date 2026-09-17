import { Injectable } from '@angular/core';

export interface Post {
  slug: string;
  title: string;
  date: number;
  formattedDate: string;
  snippet: string;
  contentHtml: string;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function formatDate(epoch: number): string {
  const d = new Date(epoch);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly posts: Post[] = [
    {
      slug: '2022-06-23-aerox-3-daemon',
      title: 'Aerox 3 Daemon',
      date: 1656039074000,
      formattedDate: formatDate(1656039074000),
      snippet: 'How to make a SteelSeries Aerox 3 Mouse Remember LED Colors',
      contentHtml: `
        <h2>Background</h2>
        <p>I bought a new mouse to replace my old one and I had limited options. I wanted a wireless USB-C mouse that worked with both Bluetooth and 2.4GHz. I narrowed it down to the MX Master and the Aerox 3 Wireless, and a sale on the Aerox made the decision. I like the mouse a lot. I think it looks good and is nice to use; however, it has one fatal flaw—it doesn't remember settings on device memory.</p>
        <p>This is frustrating because I like to have my computer setup as LED-free as possible, especially at night. Even more frustrating is that the mouse resets to rainbow RGB colors everytime it sleeps from inactivity, not just when it powers off! The official solution is to use SteelSeries' own management software, but it seems to be a bit of a privacy nightmare. So, I decided to make my own.</p>
        <h2>The Daemon</h2>
        <p>I have only tested this on macOS Monterey and with the 2.4GHz wireless connector, but it appears to be working with no caveats.</p>
        <p>Use a shell script like this one that sets all of the mouse settings you want using <a href="https://github.com/flozz/rivalcfg" target="_blank" rel="noopener">rivalcfg</a>. This one turns off all LEDs. Make sure that you specify where <code>rivalcfg</code> is located.</p>
        <pre><code class="language-bash">#!/bin/sh 

export PATH=/Library/Frameworks/Python.framework/Versions/3.10/bin

rivalcfg --top-color black
rivalcfg --middle-color black
rivalcfg --bottom-color black
rivalcfg -a black</code></pre>
        <p>Next, create a file at <code>~/Library/LaunchAgents/com.aerox.plist</code> with the following contents (<a href="https://stackoverflow.com/a/12259762" target="_blank" rel="noopener">source</a>).</p>
        <pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC -//Apple Computer//DTD PLIST 1.0//EN http://www.apple.com/DTDs/PropertyList-1.0.dtd &gt;
&lt;plist version="1.0"&gt;
&lt;dict&gt;
    &lt;key&gt;Label&lt;/key&gt;
    &lt;string&gt;com.aerox.program&lt;/string&gt;
    &lt;key&gt;ProgramArguments&lt;/key&gt;
    &lt;array&gt;
    &lt;string&gt;/path/to/script.sh&lt;/string&gt;
    &lt;/array&gt;
    &lt;key&gt;LaunchEvents&lt;/key&gt;
    &lt;dict&gt;
        &lt;key&gt;com.apple.iokit.matching&lt;/key&gt;
            &lt;dict&gt;
                &lt;key&gt;com.apple.device-attach&lt;/key&gt;
                &lt;dict&gt;
                    &lt;key&gt;idProduct&lt;/key&gt;
                    &lt;integer&gt;1234&lt;/integer&gt;
                    &lt;key&gt;idVendor&lt;/key&gt;
                    &lt;integer&gt;1234&lt;/integer&gt;
                    &lt;key&gt;IOProviderClass&lt;/key&gt;
                    &lt;string&gt;IOUSBDevice&lt;/string&gt;
                    &lt;key&gt;IOMatchLaunchStream&lt;/key&gt;
                    &lt;true/&gt;
                &lt;/dict&gt;
            &lt;/dict&gt;
    &lt;/dict&gt;
&lt;/dict&gt;
&lt;/plist&gt;</code></pre>
        <p>Be sure to use the actual path to the shell script you wrote before! <a href="https://stackoverflow.com/a/49902760" target="_blank" rel="noopener">This answer on StackOverflow</a> explains how to get the correct values for the <code>idProduct</code> and <code>idVendor</code> fields using <code>System Information.app</code>.</p>
        <p>Finally, launch the new daemon.</p>
        <pre><code class="language-bash">launchctl load /Library/LaunchDaemons/com.aerox.plist</code></pre>
        <p>The mouse should update its LED colors within a few seconds. In a classic feature-not-bug, this script will fire every 10 seconds as long as the mouse is plugged in, which is actually a good thing for our purposes because for some reason SteelSeries decided to make the memory clear on sleep as well as power off.</p>
        <h2>Credits</h2>
        <p>I only got this working because of rivalcfg and <a href="https://stackoverflow.com/a/12259762" target="_blank" rel="noopener">this StackOverflow answer</a> explaining how to write a systemd daemon that runs a script when a specific USB device is detected.</p>
      `,
    },
    {
      slug: '2022-04-13-tools-of-the-trade-2',
      title: 'Tools of the Trade 2022',
      date: 1649865188000,
      formattedDate: formatDate(1649865188000),
      snippet: 'What do I use for software development in 2022?',
      contentHtml: `
        <p>Last year, I catalogued the tools I use for software development. I have made numerous updates and changes so here is an updated list!</p>
        <h2>Hardware</h2>
        <h3>MacBook Pro 14-inch</h3>
        <p>I upgraded from my trusty 2015 MacBook Pro 13-inch to a 2021 MacBook Pro with an M1 Pro. I absolutely love this new device. It's super fast and the display is gorgeous. I also like that I was able to skip every MacBook that didn't have an SD card slot.</p>
        <h3>iPad Pro</h3>
        <p>I started drawing with an iPad Pro + Apple Pencil in 2017 and haven't looked back. All of my digital art is done in Procreate. I was considering upgrading to a newer iPad, but I want to wait for an 11 inch Pro with some sort of local dimming (e.g. mini LED or OLED). I don't use my iPad for any other function besides drawing, so it is not a priority.</p>
        <h3>Keyboard</h3>
        <p>I am no longer using an external keyboard with my laptop. It was fun to put together and looked great on my desk, but nothing beats the convenience of having your keyboard attached to your computer. Also, my new MacBook's keyboard is quite good.</p>
        <h2>Software</h2>
        <h3>VSCode</h3>
        <p>Despite attempting to break free of the yoke of VSCode several more times, I'm still using it.</p>
        <h4>VSCode Extensions</h4>
        <p>There are a few VSCode extensions I use all the time:</p>
        <ol>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=radiolevity.search-lights" target="_blank" rel="noopener">Search Lights</a>: My VSCode theme! It's meant to be easy to look at for a long time. I spent a long time tooling the color relationships to be subtle and informative. I recently passed 10k downloads on it, which is exciting for me.</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim" target="_blank" rel="noopener">VSCode Vim</a>: I got used to Vim keybindings during a college CS class that required using Vim for all of the quizzes and assignments, and ever since I can't function without it.</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" target="_blank" rel="noopener">GitHub Copilot</a>: I've been using Copilot for a while now, and it's definitely useful. That said, I still don't trust it to write more than a line or two for me. I've found that it's best use is as a super powered Intellisense.</li>
        </ol>
        <h3><a href="https://neovim.io/" target="_blank" rel="noopener">NeoVim</a></h3>
        <p>I love Vim as an editor, and NeoVim is even better. When it comes to command-line editors, look no further.</p>
        <h3><a href="https://sw.kovidgoyal.net/kitty/" target="_blank" rel="noopener">kitty</a></h3>
        <p>A minimalist terminal emulator that does everything I need it to, no more, no less. Definitely the cutest option, also! kitty also has a lot of interesting techniques to keep it running quickly, but all I know is it's the only terminal emulator I've used that renders text exactly the way I want it to.</p>
        <h3>zsh</h3>
        <p>I use zsh with <a href="https://starship.rs/" target="_blank" rel="noopener">Starship</a> as my prompt. My favorite extensions are <a href="https://github.com/zdharma/fast-syntax-highlighting" target="_blank" rel="noopener">fast-syntax-highlighting</a>, <a href="https://github.com/zsh-users/zsh-history-substring-search" target="_blank" rel="noopener">history-substring-search</a>, and <a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noopener">zsh-autosuggestions</a>. In order to get load times to be as fast as possible, I spent a while tooling my <a href="https://github.com/zdharma-continuum/zinit" target="_blank" rel="noopener">zinit</a> config—now I get a usable prompt in about 20ms. That's not quite imperceptible, but it's close. Before, I was using PowerLevel10k's instant prompt, which is aptly named and blazingly fast. The issue was that P10k was a little too bulky for me and it kept causing small issues to the point where I gave up and switched to Starship which is very light and straightforward.</p>
      `,
    },
    {
      slug: '2022-04-12-optimization',
      title: 'Optimization',
      date: 1649769896000,
      formattedDate: formatDate(1649769896000),
      snippet: 'A much-needed refactor',
      contentHtml: `
        <p>I am really enjoying using SvelteKit for this site. I usually use Vue for everything so it's fun to try new things sometimes.</p>
        <p>The latest update to this site includes a number of qualitative optimizations. What does that mean? In my view, "real" optimizations are the ones that improve direct, measurable performance (i.e. and give you a better lighthouse score!). I am already getting pretty solid performance numbers for this site, but there were a number of idiosyncrasies that I wanted to iron out.</p>
        <p>For example, there are a number of styles that create shifts of various elements during page load, such as the email widget on the main page. Now, even when the fonts haven't loaded, the email widget is already in its permanent location, so no shift. I don't know why lighthouse didn't care about this, but now it's fixed!</p>
        <p>Another issue is that the background used to shift on page load when the javascript that controls the floating effect loads. Now the background will not shift until the user moves their mouse, which triggers a smooth animation instead.</p>
        <p>I also mucked around with the "preload" tags to only try to preload the most essential assets (like the light/dark mode switch icon).</p>
        <p>Lastly, I tried to improve "real" performance as well by switching all of the images on my site to WebP files. The most notable improvement is in my <a href="/portfolio">Portfolio</a>.</p>
      `,
    },
    {
      slug: '2021-11-29-floating',
      title: 'Floating',
      date: 1638162000000,
      formattedDate: formatDate(1638162000000),
      snippet: 'A new homepage animation',
      contentHtml: `
        <p>I spruced up my home page, again! This time I added a parallax effect to the illustration.</p>
        <p>I spent a fair amount of time retooling the effect to be organic, performant, and accessible. I find that having the images "drift" after moving the mouse does not add considerably to the performance cost of the animation (after optimizing), but dramatically improves the visual appeal of the home page. It also emphasizes the "floating in space" vibe I was going for.</p>
        <p>I also wanted to avoid using an animation library just for this effect, since all of the other animations on my site were made with CSS animations. The additional overhead of something like GreenSock felt like overkill.</p>
        <p>I tested the effect on as many platforms as I could, but please let me know if it's jittery or slow on your machine.</p>
        <p>As a result of the "floating" look, I also had to update the "copy email" button effect. Before, it appeared to rise out of a flat surface. Now, it makes more contextual sense since it is more plausibly floating in space. Unlike the last effect, which I heavily borrowed from <a href="https://www.joshwcomeau.com/animation/3d-button/" target="_blank" rel="noopener">Josh Comeau</a>, this one is 100% original.</p>
        <p>In the interest of accessibility, the parallax effect is disabled if the <code>prefers reduced motion</code> media query is true.</p>
      `,
    },
    {
      slug: '2021-07-13-tools-of-the-trade',
      title: 'Tools of the Trade 2021',
      date: 1626148800000,
      formattedDate: formatDate(1626148800000),
      snippet: 'What do I use for software development in 2021?',
      contentHtml: `
        <p>I feel like every programmer at some point catalogs all of their gadgets and software. Here are mine!</p>
        <h2>Software</h2>
        <h3>VSCode</h3>
        <p>I've tried every editor out there: WebStorm, Brackets, Komodo Edit, Nova, Sublime, TextWrangler, BBEdit, oh my. I keep coming back to VSCode because it's cross platform, has excellent extension support, and runs well on my 2015 MacBook Pro.</p>
        <h4>VSCode Extensions</h4>
        <p>The extensions I have installed are in constant flux, but there are a few I can't go without at this point:</p>
        <ol>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=radiolevity.search-lights" target="_blank" rel="noopener">Search Lights</a>: I made a VSCode theme! It's meant to be easy to look at for a long time. I spent a long time tooling the color relationships to be subtle and informative. Please give it a try, and let me know what you think!</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=vscodevim.vim" target="_blank" rel="noopener">VSCode Vim</a>: I got used to vim keybindings during a college CS class that required using vim for all of the quizzes and assignments, and ever since I can't function without it.</li>
          <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python" target="_blank" rel="noopener">Python Language Extension</a>: the various language plugins I have change over time, except this one. I use Python whenever I just need to write a quick script for something. I've been experimenting with switching to Node for my day to day data-manipulation tasks, but for the time being nothing beats Python.</li>
        </ol>
        <p>Bonus: I just started using <strong>GitHub Copilot</strong> a few weeks ago, and it's pretty cool. I love VSCode's autocomplete, and this extension is a super-powered version of it. I am hesitant to use it for anything serious, though, before questions of licensing are nailed down. Also, it can be a little weird to have to check autogenerated code for bugs—but it's quickly become part of my workflow.</p>
        <h3><a href="https://neovim.io/" target="_blank" rel="noopener">NeoVim</a></h3>
        <p>I love Vim as an editor, and NeoVim is even better. When it comes to command-line editors, look no further.</p>
        <h3><a href="https://sw.kovidgoyal.net/kitty/" target="_blank" rel="noopener">kitty</a></h3>
        <p>A minimalist terminal emulator that does everything I need it to, no more, no less. Definitely the cutest option, as well. kitty also has a lot of interesting techniques to keep it running blazingly fast.</p>
        <h3>zsh</h3>
        <p>I use zsh with a few modifications as my terminal. <a href="https://github.com/romkatv/powerlevel10k" target="_blank" rel="noopener">PowerLevel10k</a> and <a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noopener">zsh-autosuggestions</a> are the two I like the most.</p>
        <h2>Hardware</h2>
        <h3>Keyboard</h3>
        <p>I alternate between my MacBook's built-in keyboard and a custom mechanical keyboard I put together. (For the nerds: an olkb Preonic with a silver aluminum case, steel plate, 65g Zilents, and DSA Vilebloom keycaps.)</p>
        <h3>Drawing tablet</h3>
        <p>I switched to iPad Pro + Apple Pencil in 2017 and haven't looked back. All of my digital art is done in Procreate with 💜.</p>
      `,
    },
    {
      slug: '2021-07-11-all-new-site',
      title: 'All New Site',
      date: 1625976000000,
      formattedDate: formatDate(1625976000000),
      snippet: "Now it's all spacey, and has a dark mode",
      contentHtml: `
        <p>As much as Jekyll + GitHub Pages served me well for my old static site, I have decided to take the plunge into a modern framework-based version. This site is made in the excellent <a href="https://kit.svelte.dev/" target="_blank" rel="noopener">SvelteKit</a>. It isn't done, yet. At time of this writing, the "Posts" page still needs some work. With that said, I am very happy with how the new site is working out.</p>
        <p>I made a point with this rewrite to use as little code from the original version as possible. The only elements brought over are the SCSS that generates the Markdown-esque header markers and the click-to-copy email button on the home page.</p>
        <p>The new version of this site is hosted on <a href="https://vercel.com/" target="_blank" rel="noopener">Vercel</a>, using the shockingly simple-to-use Svelte-Vercel adapter. I've been really impressed with how simple and easy Vercel is to use.</p>
        <h2>Why SvelteKit?</h2>
        <p>I have been wanting to learn to use Svelte for a while now. I've been using Vue for over a year now, and while I really like its functionality and wide support, I also like Svelte's opinionated approach to organization and syntax. Furthermore, I wanted to try a static site generator framework and with SvelteKit nearing a 1.0 release, I figured now was as good a time as any.</p>
        <p>Next (lol) on the docket are Next.js and Astro.</p>
        <h2>So what's left?</h2>
        <p>I am trying some new stuff with this site. I want to add a lot more details before I really consider it to be "done." One big example is dark mode support. I would like to be able to choose "Auto" in addition to the current Light/Dark toggle. Another one (as I mentioned above) is that I want the blog section to get some more attention. It's pretty basic right now, which is fine, but I want to enable photos, code snippets, interactive elements, searching articles, etc. I also think it would be cool to have some sort of dashboard for editing my site. Right now the whole site is made by me, so I'd either have to find a dashboard/CMS to connect up or write my own. In the mean time I suppose I'll be using just VSCode.</p>
      `,
    },
    {
      slug: '2021-05-19-new-domain',
      title: 'New Domain',
      date: 1621396800000,
      formattedDate: formatDate(1621396800000),
      snippet: 'I moved from finnjames.dev to fsj.xyz',
      contentHtml: `
        <p>I am excited to report that my new domain, <a href="https://fsj.xyz" target="_blank" rel="noopener">fsj.xyz</a> is live. In the endless quest to have a short domain name, I elected for the gTLD <strong>.xyz</strong> and just my initials. It was remarkably difficult to secure a domain name that I felt excited about, but I am very happy with this one. My old domain (finnjames.dev) redirects to this site, now.</p>
        <p>I do think it is easy to get obsessed with acquiring the perfect domain name. I went through a lot of different options before settling on this one. I can't say it was my very first choice, but as it turns out, fsj.com has been taken since the 90s. I appreciate that this one is short, easy to say and write, and is reasonably memorable.</p>
        <p>I have also set up an email account for this domain. Try it out by sending an email to "hey" at this domain!</p>
      `,
    },
    {
      slug: '2020-09-08-what-does-radiolevity-mean',
      title: 'What Does Radiolevity Mean?',
      date: 1599537600000,
      formattedDate: formatDate(1599537600000),
      snippet: 'I just made it up',
      contentHtml: `
        <p>My username everywhere online is <strong>radiolevity</strong>. It doesn't really mean anything in particular—I was inspired by my radio-spectrum astronomy research, my love of radio and podcasts, and my general desire to keep things lighthearted. But at a certain point, I just wanted something that was easy to say, spell, and remember. I made my radio logo by those same principles.</p>
        <p>Another advantage is that my name is rather common, especially in Europe. This makes my username slightly more recognizable than if I just used my name. Furthermore, much to my chagrin, I cannot get "finnjames" as a username on most of the major platforms anymore.</p>
        <p>Lastly, I appreciate when someone has a consistent handle across many platforms, because it means you can appreciate their work and find their voice in a number of different contexts. This has the associated effect of degrading one's anonymity—my real name is deliberately very easy to find if you have my username—but this is not necessarily a bad thing. I appreciate that by linking my name to a specific username I can more easily take credit and pride in my work without worrying too much.</p>
      `,
    },
    {
      slug: '2020-05-16-init',
      title: 'Hello World!',
      date: 1589601600000,
      formattedDate: formatDate(1589601600000),
      snippet: 'My first post!',
      contentHtml: `
        <p>This is the first post on this site. It's here for testing purposes.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Odio ut enim blandit volutpat maecenas volutpat. Felis eget velit aliquet sagittis id consectetur purus ut. Ac turpis egestas integer eget aliquet nibh praesent tristique magna.</p>
        <p>Vestibulum mattis ullamcorper velit sed. Urna cursus eget nunc scelerisque viverra mauris. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Ac turpis egestas sed tempus. Nulla at volutpat diam ut venenatis. Nisl condimentum id venenatis a condimentum vitae sapien.</p>
      `,
    },
  ];

  getPosts(): Post[] {
    return [...this.posts].sort((a, b) => b.date - a.date);
  }

  getPostBySlug(slug: string): Post | undefined {
    return this.posts.find((p) => p.slug === slug);
  }
}
