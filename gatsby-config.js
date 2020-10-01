const siteTitle = "KIIT Hacktoberfest";
const siteDescription =
	"The Hacktoberfest-KIIT repo outlines the official KIIT Hacktoberfest website and what should be done to achieve better UX.";
const siteAuthor = "@kiit_team";
const siteUrl = "https://kiithacktoberfest.netlify.app/";
const siteImage = `${siteUrl}/icons/ms-icon-310x310.png`;
const siteKeywords = [
	"gatsby",
	"typescript",
	"mayadata",
	"javascript",
	"react",
	"hacktoberfest",
	"SEO",
	"kiit",
	"filesystem",
	"helmet",
	"sharp",
	"styled component",
	"axe",
];
module.exports = {
	siteMetadata: {
		title: siteTitle,
		description: siteDescription,
		author: siteAuthor,
		url: siteUrl,
		keywords: siteKeywords,
		image: siteImage,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: "images",
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: siteUrl,
				sitemap: `${siteUrl}/sitemap.xml`,
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: "gatsby-plugin-react-axe",
			options: {
				showInProduction: false,
				// Options to pass to axe-core.
				// See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
				axeOptions: {
					// Your axe-core options.
				},
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteTitle,
				short_name: siteTitle,
				description: siteDescription,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: "src/images/icon.png", // Change the icon.png in src/images and static folder to modify the favicon
				icons: [
					{
						src: "icons/ms-icon-310x310.png",
						sizes: "310x310",
						types: "image/png",
					},
					{
						src: "icons/android-icon-192x192.png",
						sizes: "192x192",
						types: "image/png",
					},
				],
			},
		},
		`gatsby-plugin-offline`,
	],
};
