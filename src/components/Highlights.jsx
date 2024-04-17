import React from 'react';
import clsx from 'clsx';
import styles from './Highlights.module.css';

const FeatureList = [
    {
        title: 'Flow-based Large Diffusion Transformer (Flag-DiT)',
        Svg: require('../../static/img/features/runs-on-js.svg').default,
        description: (
            <>
                Building on the efficient DiT and flow matching, we introduce Flag-DiT—a scalable framework capable of generating high-resolution images and extended video clips. 
                By increasing DiT from 600 million to 7 billion parameters and sequence length to 512K tokens, Flag-DiT enhances convergence speed and serves as a versatile backbone for diverse generative modeling.
            </>
        ),
    },
    {
        title: 'Different Modalities, One Framework',
        Svg: require('../../static/img/features/fingerprints.svg').default,
        description: (
            <>
                Lumina-T2X tokenizes various data types—images, videos, and audio spectrograms—into uniform patch sequences. These are transformed into one-dimensional sequences by Flag-DiT, allowing generation across any modality from textual inputs. While now we train separate generators for each modality, our goal is a universal text-to-any generator.
            </>
        ),
    },
    {
        title: 'Scaling Parameter and Token Length',
        Svg: require('../../static/img/features/works-everywhere.svg').default,
        description: (
            <>
                The Flag-DiT framework enables us to scale parameters from 600M to 7B and extend the token length from 1K to 512K, maintaining stability throughout the training process. This improvement significantly boosts sample quality and unlocks new possibilities for generating extremely long and high-resolution images/videos. Furthermore, Lumina-T2X is provided with various model sizes to cater to diverse computational needs.
            </>
        ),
    },
    {
        title: 'Generating Higher-Res Images Unseen during Training',
        Svg: require('../../static/img/features/auto-scaling.svg').default,
        description: (
            <>
                 Lumina-T2X exhibits exciting generalization capabilities that can produce higher resolution contents than its training data due to the introduction of RoPe and ‘newline’ token, e.g. training on 1024*1024 images and generating 2048*2048 images. This unique feature is further augmented by advanced inference techniques, such as NTK-aware scaled rope, diffusion time shifting, and proportional attention, allowing for photorealistic, high-resolution generation without additional training.
            </>
        ),
    },
    {
        title: 'Low-computing Resources',
        Svg: require('../../static/img/features/storage.svg').default,
        description: (
            <>
                Our tests show that larger models and higher-resolution media enhance the speed and quality of diffusion models, improving alignment between images and text. 
                Although longer token lengths slow individual iterations due to transformers' quadratic complexity, they reduce overall training time by needing fewer iterations. Using curated text-media pairs, our Lumina-T2X efficiently produces high-quality images and videos.
            </>
        ),
    },
    {
        title: 'Support Model, Sequence Parallel and FSDP',
        Svg: require('../../static/img/features/node-requests.svg').default,
        description: (
            <>
                The velocity prediction backbone of Lumina-T2X are highly deeply rooted from the architecture of Large Language Models (LLMs). 
                Thus, it can easily shard model weights, sequence length, optimizer states, weight storage and gradient communications across GPUs for scaling model size and sequence length. This practice can significantly increase the upper bound of model parameters and sequence length supported by Lumina-T2X framework. 
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
