import React from 'react';
import clsx from 'clsx';
import styles from './Highlights.module.css';

const FeatureList = [
    {
        title: 'Flow-based Large Diffusion Transformer (Flag-DiT)',
        Svg: require('../../static/img/features/runs-on-js.svg').default,
        description: (
            <>
                Lumina-T2X is trained with the <b>flow matching objective</b> and is equipped with many techniques, such as RoPE, RMSNorm, and KQ-norm, <b>demonstrating faster training convergence, stable training dynamics, and a simplified pipeline</b>.
            </>
        ),
    },
    {
        title: 'Any Modalities with one Framework',
        Svg: require('../../static/img/features/fingerprints.svg').default,
        description: (
            <>
            the model can <b>encode any modality, including mages, videos, multi-views of 3D objects, and spectrograms</b> into a unified 1-D token sequence at any resolution, aspect ratio, and temporal duration.
            </>
        ),
    },
    {
        title: 'Any Aspect Ratio with one framework',
        Svg: require('../../static/img/features/works-everywhere.svg').default,
        description: (
            <>
                Lumina-T2X can naturally <b>encode any modality—regardless of resolution, aspect ratios, and temporal durations into a unified 1-D token sequence</b> akin to LLMs, by utilizing Flag-DiT with text conditioning to iteratively transform noise into outputs across any modality, resolution, and duration during inference time.
            </>
        ),
    },
    {
        title: 'Any Duration with one fraemwork',
        Svg: require('../../static/img/features/auto-scaling.svg').default,
        description: (
            <>
                 By introducing the <b>nextline</b> and <b>nextframe</b> tokens, our model can <b>support resolution extrapolation</b>, i.e., generating images/videos with out-of-domain resolutions <b>not encountered during training</b>.
            </>
        ),
    },
    {
        title: 'Low Training Resource',
        Svg: require('../../static/img/features/storage.svg').default,
        description: (
            <>
                Our Large-DiT reduces the total number of training iterations needed, thus <b>minimizing overall training time</b> and computational resources. the default Lumina-T2I configuration, equipped with a 5B Flag-DiT and a 7B LLaMA as the text encoder, <b>requires only 20% of the computational resources needed by Pixelart-</b>$\alpha$.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="padding-horiz--md padding-bottom--md">
                <div className={styles.featureIcon}>
                    {Svg ? <Svg alt={title}/> : null}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Highlights() {
    const Svg = require('../../static/img/features/gradient.svg').default;
    return (
        <section className={styles.features}>
            {<Svg />}
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
