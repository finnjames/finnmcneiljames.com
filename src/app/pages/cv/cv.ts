import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv',
  imports: [RouterLink],
  template: `
    <article class="cv-container">
      <h1>CV</h1>

      <section>
        <h2>Education</h2>
        <h3>University of North Carolina at Chapel Hill</h3>
        <p>Computer Science B.S. with a Studio Art minor. GPA: 3.94. Graduated May 2022.</p>
      </section>

      <section>
        <h2>Work</h2>

        <h3>Google <span class="roman">— Software Engineer</span></h3>
        <p class="gray">August 2022 – Present</p>
        <p>I work as a Software Engineer at Google RDU.</p>

        <h3>SAS <span class="roman">— UX Developer Intern</span></h3>
        <p class="gray">May 2021 – May 2022</p>
        <p>I created an internal application to improve interface accessibility and consistency across platforms.</p>

        <h3>UNC Department of Physics & Astronomy <span class="roman">— Research Assistant</span></h3>
        <p class="gray">August 2019 – Present</p>
        <p>
          I did astrophysics research and software development with Dr. Dan Reichart in the Physics & Astronomy Department at UNC.
        </p>
        <p>
          I wrote the logic and UI/UX for software to interpret data coming from the 40' radio telescope at the Green Bank Observatory. I engineered the system to interface between sixty-year-old radio astronomy equipment and modern analysis programs, all while remaining accessible to the scientists who use it for their research.
        </p>

        <h3>UNC Department of Computer Science <span class="roman">— Learning Assistant</span></h3>
        <p class="gray">Spring 2021 – Present</p>
        <p>I help teach undergraduate students in COMP541, an upper-level chip architecture course taught by Dr. Montek Singh.</p>

        <h3>Freelance <span class="roman">— Web Developer & Designer</span></h3>
        <p class="gray">June 2019 – Present</p>
        <p>
          I am a freelance designer and full-stack web developer. I am a one-stop shop for local clients to create or overhaul their web presence. A portfolio example: the
          <a href="https://chapelhillfriends.org" target="_blank" rel="noopener">Chapel Hill Friends Meeting website</a>.
        </p>

        <h3>Carolina Friends School <span class="roman">— Counselor</span></h3>
        <p class="gray">Summer 2016 – Summer 2019</p>
        <p>I led activities with campers at Carolina Friends School Summer Programs to encourage teamwork, participation, and community.</p>
      </section>

      <section>
        <h2>Grants & Honors</h2>

        <h3>NC Space Grant for Undergraduate Research Fellowship</h3>
        <p class="gray">June 2020 - May 2021</p>
        <p>
          My proposal for "A New Test of General Relativity using Binary Supermassive Black Holes and Radio Telescopes” was selected to receive funding so that I can develop and use sophisticated image processing systems for radio telescope observations of the OJ287 black hole system.
        </p>

        <h3>Phi Beta Kappa</h3>
        <p class="gray">April 2021</p>
        <p>I joined the Phi Beta Kappa honor society in April of 2021.</p>

        <h3>UNC Nomination for Barry M. Goldwater Scholarship</h3>
        <p class="gray">January 2021</p>
        <p>
          I was selected by my university for nomination for the Barry M. Goldwater Scholarship, a prestigious award for undergraduates to further their science and engineering research. The scholarship is particularly focused on supporting students in beginning their graduate school careers.
        </p>

        <h3>ERIRA</h3>
        <p class="gray">August 2019</p>
        <p>
          I was selected for the Educational Research In Radio Astronomy program. It is an intensive course at the Green Bank Observatory involving data collection, data analysis, deadline management, and teamwork.
        </p>

        <h3>HackNC Second Place Winner</h3>
        <p class="gray">October 2019</p>
        <p>
          I won second place for my hardware project at HackNC 2019. My team and I constructed a rig using Python and OpenCV to 3D track the position of objects in real time. As the team's software developer, I wrote the system that interpreted the dual input streams coming from the stereoscopic camera setup so that the depth of the objects could be calculated in real time. In this project, I led my team to each build a part of the project separately and combine them seamlessly.
        </p>

        <h3>Honors Carolina</h3>
        <p class="gray">January 2019</p>
        <p>I joined the UNC Honors Program in my first year.</p>

        <h3>RYLA</h3>
        <p class="gray">April 2017</p>
        <p>
          I was honored with the Rotary Youth Leadership Award for exhibiting leadership and initiative in my community service and schoolwork, and I attended the associated conference. The conference is an 18-hour-a-day high-energy event where the recipients work with each other to develop leadership and problem solving skills. I was sponsored by the East Chapel Hill Rotary Club.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <h3>Computer Science</h3>
        <p>
          <strong>Proficient in:</strong> Python, C, Java, TypeScript, Vue, JavaScript, SystemVerilog,
          <span title="source for this site on GitHub">HTML/CSS</span>
        </p>
        <p>
          <strong>Courses Completed by Summer 2022:</strong> Algorithms, Cryptography, Digital Logic & Computer Design, Models of Language & Computation, Data Structures, Computer Architecture, Digital Photography, Modern Web Development, UX Design & Usability
        </p>

        <h3>Mathematics</h3>
        <p>
          <strong>Courses Completed by Summer 2022:</strong> Discrete Mathematics, Linear Algebra, Multivariable Calculus, Probability
        </p>
        <p>
          <strong>Familiarity with:</strong> MATLAB, Wolfram Mathematica, Microsoft Excel
        </p>

        <h3>Astrophysics</h3>
        <p>
          <strong>Courses Completed by Summer 2022:</strong> Calculus-Based Mechanics & Relativity, Intro Astronomy & Lab, Intro Cosmology
        </p>
        <p>
          <strong>Familiarity with:</strong> NumPy, Astropy, Stellarium, Radio Cartographer, Afterglow
        </p>

        <h3>Technology</h3>
        <p><strong>IDEs & editors:</strong> VSCode, vim, PyCharm, IntelliJ IDEA, Eclipse, Vivado</p>
        <p><strong>Tools:</strong> git, node/npm, zsh, bash</p>
        <p><strong>Software:</strong> Photoshop, Illustrator, XD, InDesign, Premiere Pro, Audacity, Microsoft Office</p>
        <p><strong>Operating Systems:</strong> macOS, Linux, Windows, iOS</p>

        <h3>Foreign Language</h3>
        <p><strong>Japanese:</strong> I have completed three semesters of Japanese.</p>
      </section>

      <section>
        <h2>Community Service</h2>

        <h3>Cofounder, <span class="roman">Project Recap</span></h3>
        <p class="gray">Spring 2018</p>
        <p>I co-founded and managed a charitable program that continues today to collect, clean, and redistribute graduation paraphernalia to high school students.</p>

        <h3>Creator & Instructor, <span class="roman">CodeBuilders Programming Course</span></h3>
        <p class="gray">Spring 2017</p>
        <p>I created and taught an intro programming class for middle-school-aged students. We covered Python and Web development. I designed the course to focus on fundamentals so that the students would feel more comfortable coding and working with computers.</p>

        <h3>Instructor, <span class="roman">Durham Public Library</span></h3>
        <p class="gray">Summer 2016</p>
        <p>I volunteered with the Durham Public Library Techno Saturdays Program, where I taught programming and computer science to children who might otherwise not have had exposure to computers.</p>
      </section>

      <section>
        <h2>Interests</h2>

        <h4>Photography</h4>
        <p>A few of my recent images may be found in my <a routerLink="/portfolio" fragment="photography">Portfolio</a>.</p>

        <h4>Drawing & Painting</h4>
        <p>Likewise, a few of my drawings <a routerLink="/portfolio" fragment="drawing">may also be found there</a>.</p>

        <h4>Martial Arts</h4>
        <p>I have practiced martial arts for years and have achieved a second degree black belt in the Japanese martial art <em>toshindo</em>.</p>

        <h4>Reading</h4>
        <p>My favorite books include <em>The Brief Wondrous Life of Oscar Wao</em> by Junot Díaz, <em>Jane Eyre</em> by Charlotte Brontë, and <em>Going Postal</em> by Terry Pratchett.</p>

        <h4>Architecture</h4>
        <p>I am a fan of modern architecture and minimalist spaces. I particularly appreciate the works of Ludwig Mies van der Rohe.</p>

        <h4>Cooking</h4>
        <p>
          I love to cook, especially Japanese and Italian cuisine. I also once threw a Latke–Hamantash Debate event in the style of
          <a href="https://en.wikipedia.org/wiki/Latke%E2%80%93Hamantash_Debate" target="_blank" rel="noopener">the original</a>, which involved both making and arguing about the relative metaphysical merits of both foods.
        </p>

        <p class="gray updated-text">Updated August 2022</p>
      </section>
    </article>
  `,
  styles: [`
    .cv-container {
      padding-bottom: 2rem;
    }

    .gray {
      color: var(--med-dark-gray);
      margin-top: 0.2rem;
      margin-bottom: 0.6rem;
    }

    .roman {
      font-variation-settings: "wght" var(--font-weight-normal);
    }

    h2, h3, h4 {
      line-height: 1.2;
    }

    h2 {
      padding-top: 1.2rem;
      position: relative;
      display: inline-block;

      &::after {
        background-color: var(--light-magenta);
        content: "";
        position: absolute;
        width: calc(100% + 0.5rem);
        height: 60%;
        left: -0.16rem;
        bottom: 0;
        z-index: -1;
        transform: rotate(-1deg) skew(8deg) translateY(0.1rem);
      }
    }

    h3 {
      padding-top: 0.6rem;
      margin-bottom: 0.2rem;
    }

    p {
      margin-top: 0.4rem;
      margin-bottom: 0.8rem;
      line-height: 1.5;
    }

    .updated-text {
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
    }
  `],
})
export class CvComponent {}
