import Image from "next/image";
import styles from "./page.module.css";

type Testimonial = {
  name: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
  quote: readonly string[];
  attribution: string;
  attributionLabel?: string;
  attributionLink?: string;
};

const testimonials: readonly Testimonial[] = [
  {
    name: "Unit21",
    logo: "/images/unit21-180.png",
    alt: "Unit21 logo",
    width: 180,
    height: 53,
    quote: [
      "Dawson is an incredible leader, mentor and developer. He set up our React app from scratch, using the latest and greatest tools like Typescript and Immutable. The best practices and infrastructure Dawson implemented, like memoizing our selectors and avoiding anonymous, inline functions, has set a high bar of code quality that is required for our ever growing and complex web app. Thanks to Dawson, our app is well setup for years to come.",
      "Dawson is an absolute pleasure to work with and was a great mentor for our team. He accelerated my growth dramatically, helping me grow into a lead frontend engineer in less than a year. His knowledge, communication skills, and eagerness to help buoyed our entire teams performance.",
      "Finally, he lead our most complex features, including a customized timeline graph that required him to manually create the graph with svg. In parting, he left us with tremendous insight on how we can further improve our code quality, reduce load times, and avoid bugs.I am forever grateful I had Dawson as a mentor in starting my engineering career and hope to work with him again in the future. I highly recommend working with Dawson to lead the development of your React app.",
    ],
    attribution: "Tyler Allen, Software Engineer at Unit21",
  },
  {
    name: "Aether Bio",
    logo: "/images/aether-logo-black.svg",
    alt: "Aether Bio logo",
    width: 300,
    height: 97,
    quote: [
      "Dawson was a joy to work with - incredibly responsive, detail oriented, and technically skilled. He went above and beyond for the project we worked on together, and I am very much looking forward to working with him again in the future!",
    ],
    attribution: "Hannah Meyers, CoFounder of Aether Bio",
  },
  {
    name: "Aero",
    logo: "/images/aero-logo.jpg",
    alt: "Aero logo",
    width: 180,
    height: 120,
    quote: [
      "From day one, Dawson brought a skill set that made him productive immediately and an attitude that was delightful to work with during my time with him at Aero.",
      "Dawson is a product-focused engineer with a strong technical background and an eye for detail. During his time at Aero, he increased the typing and test coverage of the codebase, simplified and streamlined developer tooling, and increased the accessibility of the website.",
      "His code was thoughtful and sustainable even though he was working on tight deadlines.",
    ],
    attribution: "Ben Williams, Software Engineer at ",
    attributionLabel: "Aero",
    attributionLink: "https://aero.com",
  },
];

function GitHubCorner() {
  return (
    <a
      href="https://github.com/dark-triangle"
      className={styles.githubCorner}
      aria-label="View source on GitHub"
      target="_blank"
      rel="noreferrer"
    >
      <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          className={styles.octoArm}
          fill="currentColor"
          style={{ transformOrigin: "130px 106px" }}
        />
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <GitHubCorner />

      <div className={styles.shell}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Dark Triangle</h1>
          <p className={styles.eyebrow}>▼ A software agency in love with React ▼</p>
          <p className={`${styles.subHeader} ${styles.highlight}`}>
            $_ We&apos;re world-class at React.js applications. This includes Redux,
            TypeScript, FlowType, and web performance.
          </p>
        </section>

        <div className={styles.logoWrap}>
          <Image
            src="/images/logo@2x.png"
            alt="Dark Triangle logo"
            width={700}
            height={700}
            priority
            className={styles.logo}
          />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Prior Clients</h2>

          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className={styles.client}>
              <Image
                src={testimonial.logo}
                alt={testimonial.alt}
                width={testimonial.width}
                height={testimonial.height}
                className={styles.clientLogo}
              />
              <blockquote className={styles.quote}>
                {testimonial.quote.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  {testimonial.attributionLink ? (
                    <>
                      {testimonial.attribution}
                      <a href={testimonial.attributionLink}>{testimonial.attributionLabel}</a>
                    </>
                  ) : (
                    testimonial.attribution
                  )}
                </p>
              </blockquote>
            </article>
          ))}

          <p className={styles.outreach}>Let&apos;s make the web better.</p>
          <p className={styles.cta}>
            <a
              href="https://dawsbot.com#email-form"
              className={styles.highlight}
              target="_blank"
              rel="noreferrer"
            >
              Click here for a free intro call
            </a>
          </p>

          <div className={styles.ethWrap}>
            <Image
              src="/images/eth-wave.png"
              alt="Ethereum wave illustration"
              width={540}
              height={540}
              className={styles.ethLogo}
            />
            <small className={styles.credit}>
              image courtesy of{" "}
              <a
                href="https://blog.ethereum.org/2018/08/17/ethereum-foundation-grants-update-wave-3/"
                target="_blank"
                rel="noreferrer"
              >
                Eth Foundation
              </a>
            </small>
          </div>
        </section>

        <footer className={styles.footer}>Copyright {new Date().getFullYear()}</footer>
      </div>
    </main>
  );
}
