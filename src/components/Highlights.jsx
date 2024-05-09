import React from 'react';
import clsx from 'clsx';
import styles from './Highlights.module.css';

const FeatureList = [
    {
        title: 'Flow-based Large Diffusion Transformer (Flag-DiT)',
        Svg: require('../../static/img/features/runs-on-js.svg').default,
        description: (
            <>
                Lumina-T2X is trained **with the flow matching object**. To increase training stability and model scalability, we support many techniques, such as RoPE, RMSNorm, and KQ-norm, **demonstrating faster training convergence, stable training dynamics, and a simplified pipeline**.
            </>
        ),
    },
    {
        title: 'Any Modalities with one Framework',
        Svg: require('../../static/img/features/fingerprints.svg').default,
        description: (
            <>
            Lumina-T2X tokenizes images, videos, multi-views of 3D objects, and spectrograms into one-dimensional sequences.
            </>
        ),
    },
    {
        title: 'Any Aspect Ratio with one framework',
        Svg: require('../../static/img/features/works-everywhere.svg').default,
        description: (
            <>
                Lumina-T2X can naturally **encode any modality—regardless of resolution, aspect ratios, and temporal durations into a unified 1-D token sequence** akin to LLMs, by utilizing Flag-DiT with text conditioning to iteratively transform noise into outputs across any modality, resolution, and duration during inference time.
            </>
        ),
    },
    {
        title: 'Any Duration with one fraemwork',
        Svg: require('../../static/img/features/auto-scaling.svg').default,
        description: (
            <>
                 Due to the use of `nextline` and `nextframe` tokens, our model can **support resolution extrapolation**, which allows the generation of resolutions out-of-domain that **were unseen during training**.
            </>
        ),
    },
    {
        title: 'Low Training Resource',
        Svg: require('../../static/img/features/storage.svg').default,
        description: (
            <>
                Increasing token length in transformers extends iteration times but **reduces overall training duration by decreasing the number of iterations needed**. Moreover, our Lumina-T2X model can generate high-resolution images and coherent videos **with minimal computational demands**. Remarkably, the default Lumina-T2I configuration, equipped with a 5B Flag-DiT and a 7B LLaMA as text encoder, **requires only 20% of the computational resources needed by Pixelart-**$\alpha$.
            </>
        ),
    },
    // {
    //     title: 'Support Model, Sequence Parallel and FSDP',
    //     Svg: require('../../static/img/features/node-requests.svg').default,
    //     description: (
    //         <>
    //             The velocity prediction backbone of Lumina-T2X are highly deeply rooted from the architecture of Large Language Models (LLMs). 
    //             Thus, it can easily shard model weights, sequence length, optimizer states, weight storage and gradient communications across GPUs for scaling model size and sequence length. This practice can significantly increase the upper bound of model parameters and sequence length supported by Lumina-T2X framework. 
    //         </>
    //     ),
    // },
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
