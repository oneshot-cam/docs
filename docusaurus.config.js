module.exports = {
    title: "OneShot Documentation",
    url: "https://oneshot-cam.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    trailingSlash: true,
    organizationName: "oneshot-cam",
    projectName: "oneshot-cam.github.io",
    themes: ["@docusaurus/theme-classic"],
    themeConfig: {
        colorMode: {
            respectPrefersColorScheme: true,
            defaultMode: 'dark',
        },
        navbar: {
            title: "OneShot Documentation",
        },
    },
    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                path: "docs",
                routeBasePath: "/",
                sidebarPath: "docs/sidebar.js",
            },
        ],
    ],
};
