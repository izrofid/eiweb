import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  imgSrc?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'QoL Galore',
    imgSrc: require('@site/static/img/1491.png').default,
    description: (
      <>
        A host of QoL options so you can focus on the playing the game and spend less time grinding!
      </>
    ),
  },
  {
    title: 'All 9 Generations',
    imgSrc: require('@site/static/img/395.png').default,
    description: (
      <>
        All 9 generations of Pokémon. All in one hack! What more could you want?
      </>
    ),
  },
  {
    title: 'Enhanced Difficulty',
    imgSrc: require('@site/static/img/1492.png').default,
    description: (
      <>
        Inspired by Radical Red, enjoy a higher challenge which will test the limits of your Pokémon skills.
      </>
    ),
  },
];
function Feature({title, Svg, imgSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : imgSrc ? (
          <img src={imgSrc} className={styles.featureSvg} alt={title} style={{imageRendering: 'pixelated', height: 64, width: 64}} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
