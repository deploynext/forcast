/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.fiscalfusion.org",
  generateIndexSitemap: false,       // Only one sitemap file
  sitemapFilename: "sitemap.xml",
  generateRobotsTxt: true,           // Also generate robots.txt

  // Only include homepage
  transform: async (config, path) => {
    const now = new Date().toISOString();

    if (path === "/") {
      return {
        loc: `${config.siteUrl}/`,
        lastmod: now,
        priority: 1.0,
      };
    }

    // Exclude everything else
    return null;
  },
};



