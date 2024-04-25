/* eslint-disable global-require,import/no-extraneous-dependencies */
const webpack = require('webpack');
const math = require('remark-math');
const katex = require('rehype-katex');
const { externalLinkProcessor } = require('./tools/utils/externalLink');

/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
module.exports = {
    title: 'Lumina-T2X',
    tagline: 'Build text to any modailty model. Fast.',
    url: 'https://www.shlab.org.cn',
    baseUrl: '/',
    trailingSlash: false,
    organizationName: 'Alpha-VLLM',
    projectName: 'Lumina-T2X',
    scripts: ['/js/custom.js'],
    favicon: 'img/lumina-logo.ico',
    customFields: {
        markdownOptions: {
            html: true,
        },
        gaGtag: true,
        repoUrl: 'https://github.com/Alpha-VLLM/Lumina-T2X',
    },
    onBrokenLinks:
    /** @type {import('@docusaurus/types').ReportingSeverity} */ ('throw'),
    onBrokenMarkdownLinks:
    /** @type {import('@docusaurus/types').ReportingSeverity} */ ('throw'),
    presets: /** @type {import('@docusaurus/types').PresetConfig[]} */ ([
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    path: './docs',
                    sidebarPath: './sidebars.js',
                    remarkPlugins: [math],
                    rehypePlugins: [externalLinkProcessor, katex],
                    // disableVersioning: !!process.env.CRAWLEE_DOCS_FAST,
                    disableVersioning: true,
                    editUrl: (doc) => {
                        return `https://github.com/Alpha-VLLM/Lumina-T2X/edit/master/website/${doc.versionDocsDirPath}/${doc.docPath}`;
                    },
                },
                blog: {
                    blogTitle: 'Lumina Blog - learn how to build text to modaility model',
                    blogDescription: 'Guides and tutorials on using Lumina.',
                },
                theme: {
                    customCss: '/src/css/custom.css',
                },
            }),
        ],
    ]),
    stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
          crossorigin: 'anonymous',
          strict: false
        },
      ],
    plugins: [
        // [
        //     'docusaurus-plugin-typedoc-api',
        //     {
        //         projectRoot: `${__dirname}/..`,
        //         changelogs: true,
        //         readmes: true,
        //         sortPackages: (a, b) => {
        //             return packagesOrder.indexOf(a.packageName) - packagesOrder.indexOf(b.packageName);
        //         },
        //         packages: packages.map((name) => ({ path: `packages/${name}` })),
        //         typedocOptions: {
        //             excludeExternals: false,
        //         },
        //     },
        // ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        from: '/docs',
                        to: '/docs/quick-start',
                    },
                    // {
                    //     from: '/docs/next',
                    //     to: '/docs/next/quick-start',
                    // },
                    // {
                    //     from: '/docs/guides/environment-variables',
                    //     to: '/docs/guides/configuration',
                    // },
                    {
                        from: '/docs/guides/getting-started',
                        to: '/docs/introduction',
                    },
                    // {
                    //     from: '/docs/guides/apify-platform',
                    //     to: '/docs/deployment/apify-platform',
                    // },
                ],
                createRedirects(existingPath) {
                    if (!existingPath.endsWith('/')) {
                        return `${existingPath}/`;
                    }

                    return undefined; // Return a falsy value: no redirect created
                },
            },
        ],
        [
            'docusaurus-gtm-plugin',
            {
                id: 'GTM-5P7MCS7',
            },
        ],
        async function runnableCodeBlock() {
            return {
                name: 'runnable-code-block',
                configureWebpack() {
                    return {
                        resolveLoader: {
                            alias: {
                                'roa-loader': require.resolve(`${__dirname}/roa-loader/`),
                            },
                        },
                    };
                },
            };
        },
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
        docs: {
            versionPersistence: 'localStorage',
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            hideOnScroll: true,
            title: 'Lumina-T2X',
            logo: {
                src: 'img/lumina-logo-banner-light.svg',
                srcDark: 'img/lumina-logo-banner-dark.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'quick-start/quick-start',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    type: 'doc',
                    docId: '/demos',
                    label: 'Demos',
                    position: 'left',
                },
                // {
                //     type: 'doc',
                //     docId: '/examples',
                //     label: 'Examples',
                //     position: 'left',
                // },
                // {
                //     type: 'custom-api',
                //     to: 'core',
                //     label: 'API',
                //     position: 'left',
                //     activeBaseRegex: 'api/(?!.*/changelog)',
                // },
                // {
                //     type: 'custom-api',
                //     to: 'core/changelog',
                //     label: 'Changelog',
                //     position: 'left',
                //     className: 'changelog',
                //     activeBaseRegex: 'changelog',
                // },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    type: 'docsVersionDropdown',
                    position: 'left',
                    dropdownItemsAfter: [
                        {
                            href: 'https://sdk.apify.com/docs/guides/getting-started',
                            label: '2.2',
                        },
                        {
                            href: 'https://sdk.apify.com/docs/1.3.1/guides/getting-started',
                            label: '1.3',
                        },
                    ],
                },
                {
                    href: 'https://github.com/Alpha-VLLM/Lumina-T2X',
                    label: 'GitHub',
                    title: 'View on GitHub',
                    position: 'right',
                    className: 'icon',
                },
                // {
                //     href: 'https://discord.com/invite/jyEM2PRvMU',
                //     label: 'Discord',
                //     title: 'Chat on Discord',
                //     position: 'right',
                //     className: 'icon',
                // },
            ],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        prism: {
            defaultLanguage: 'typescript',
            theme: require('prism-react-renderer').themes.github,
            darkTheme: require('prism-react-renderer').themes.dracula,
            additionalLanguages: ['docker', 'log', 'bash', 'diff', 'json'],
        },
        metadata: [],
        image: 'img/crawlee-og.png',
        footer: {
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Demos',
                            to: 'docs/demos',
                        },
                        // {
                        //     label: 'Examples',
                        //     to: 'docs/examples',
                        // },
                        // {
                        //     label: 'API reference',
                        //     to: 'api/core',
                        // },
                        // {
                        //     label: 'Upgrading to v3',
                        //     to: 'docs/upgrading/upgrading-to-v3',
                        // },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discord.com/invite/jyEM2PRvMU',
                        },
                        // {
                        //     label: 'Stack Overflow',
                        //     href: 'https://stackoverflow.com/questions/tagged/crawlee',
                        // },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/apify',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Apify Platform',
                        //     href: 'https://apify.com',
                        // },
                        {
                            label: 'Docusaurus',
                            href: 'https://docusaurus.io',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/Alpha-VLLM/Lumina-T2X',
                        },
                    ],
                },
            ],
            logo: {
                src: 'img/apify_logo.svg',
                href: '/',
                width: '60px',
                height: '60px',
            },
        },
        algolia: {
            appId: '5JC94MPMLY',
            apiKey: '267679200b833c2ca1255ab276731869', // search only (public) API key
            indexName: 'crawlee',
            algoliaOptions: {
                facetFilters: ['version:VERSION'],
            },
        },
    }),
};
