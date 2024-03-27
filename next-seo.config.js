/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "gmammolo-template-nextjs-redux-docker",
  titleTemplate: "%s | gmammolo-template-nextjs-redux-docker",
  defaultTitle: "gmammolo-template-nextjs-redux-docker",
  description:
    "Giuseppe Mammolo's personalized Next.js + TypeScript + Redux + Docker starter template",
  canonical: "https://gmammolo-template-nextjs-redux-docker.nodomainyet.it",
  openGraph: {
    url: "https://gmammolo-template-nextjs-redux-docker.nodomainyet.it",
    title: "gmammolo-template-nextjs-redux-docker",
    description: "Next.js + chakra-ui + TypeScript template",
    type: "website",
    images: [
      {
        url: "https://noimageyet.com",
        alt: "gmammolo-template-nextjs-redux-docker.nodomainyet.it og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "gmammolo-template-nextjs-redux-docker",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://noimageyet.com",
    },
  ],
};

export default defaultSEOConfig;