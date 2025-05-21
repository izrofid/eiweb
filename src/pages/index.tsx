import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Official website for Pokemon Emerald Imperium
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/play">
            Play!
          </Link>
        </div>
      </div>
    </header>
  );
}

function OfficialSiteBanner() {
  return (
    <div className={styles.officialSiteBanner}>
      <div className={styles.officialSiteBannerContent}>
        <strong>This is the only official Pokémon Emerald Imperium website.</strong>
        <span>
          All other sites claiming to be Emerald Imperium websites are unauthorized copycats, including{' '}
          <code className={styles.copycatUrl}>emeraldimperium.com</code>.<br />
          For authentic downloads, guides, and information, always visit this official site.
        </span>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Home`} description="Difficulty hack by Iriv24">
      <HomepageHeader />
      <OfficialSiteBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
