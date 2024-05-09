import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Admonition from '@theme/Admonition';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import styles from './DemoPage.module.css';



const DemoList = [
    {
        imgUrl: '/img/demo_gallery/demo_t2i.png',
        title: '',
        text: '',
        buttonLink: 'https://example.com',
        buttonText: 'Click Here'
    },
    // {
    //     imgUrl: '/img/demo_gallery/improved_highres_img_gen.png',
    //     title: 'Improved High-Resolution Image Generation',
    //     text: '',
    //     buttonLink: '',
    //     buttonText: ''
    // },
    {
        imgUrl: '/img/demo_gallery/arbitrary_resolution_ratio_gen_part_1.png',
        title: 'Arbitrary Aspect Ratio Generation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/style_consisten_gen.png',
        title: 'Consistent-Style Generation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },    
    {
        imgUrl: '/img/demo_gallery/arbitrary_resolution_ratio_gen_part_2.png',
        title: 'Arbitrary Aspect Ratio Generation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/resolution_extrapolation/2.jpg',
        title: 'Resolution Extrapolation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/multi_cap_gen_1.png',
        title: 'Compositional Generation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/edit/edit_01.png',
        title: 'High-res. Image Editing',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/multi_cap_gen_2.png',
        title: 'Compositional Generation',
        text: '',
        buttonLink: '',
        buttonText: ''
    },
    {
        imgUrl: '/img/demo_gallery/edit/super_res.png',
        title: 'Creative Super-resolution as Image Editing',
        text: '',
        buttonLink: '',
        buttonText: ''
    },

]

const renderThumbs = (array) => {
    return array.map((x, idx) => <img key={idx} src={x.props.imgUrl} />);
};

function DemoSliderItem({
    imgUrl,
    title,
    text,
    buttonLink,
    buttonText,
}) {
    return (
        <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
            <img className={title ? styles.slider_image : styles.slider_image_no_text} style={{ objectFit: "contain", objectPosition: "0 0", flex: "1", width: "100%"}}
                src={imgUrl}
            />
            {
                title ? (
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            flexDirection: "column",
                            textAlign: "right",
                            paddingLeft: "3%",
                        }}
                    >
                        <div>
                            <h3 style={{ paddingTop: "10px" }}>{title}</h3>
                            <p>{text}</p>
                        </div>
                        {buttonLink ? (
                            <div>
                                <a href={buttonLink} className="button button--primary">
                                    {buttonText}
                                </a>
                            </div>
                        ) : null}
                    </div>
                ) : null
            }
        </div>
    );
}

function DemoPage() {
    return (
        <section className={clsx(styles.try, 'container')}>
            <div className="col" style={{ maxWidth: "80%" }}>
                <h2>Lumina-T2I - Image Generation</h2>
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    renderThumbs={renderThumbs}
                    showIndicators={false}
                    swipeable={false}
                    infiniteLoop={true}>
                    {DemoList.map((props, idx) => (
                        <DemoSliderItem key={idx} {...props} />
                    ))}

                </Carousel>
                
                
            </div>
        </section>
    );
}

export default DemoPage;