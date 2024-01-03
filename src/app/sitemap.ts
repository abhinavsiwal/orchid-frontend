import { MetadataRoute } from "next";
import { backendUrl, frontendUrl } from "@/utils/axios";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${frontendUrl}/`,
      lastmod: new Date().toISOString(),
      changefreq: "never",
      priority: 1,
    },
    {
      url: `${frontendUrl}/about-us`,
      lastmod: new Date().toISOString(),
      changefreq: "never",
      priority: 0.9,
    },
    // {
    //   loc: `${frontendUrl}/privacy-policy`,
    //   lastmod: new Date().toISOString(),
    //   changefreq: "never",
    //   priority: 0.9,
    // },
    // {
    //   loc: `${frontendUrl}/terms-and-conditions`,
    //   lastmod: new Date().toISOString(),
    //   changefreq: "never",
    //   priority: 0.9,
    // },
    // {
    //   loc: `${frontendUrl}/faq`,
    //   lastmod: new Date().toISOString(),
    //   changefreq: "never",
    //   priority: 0.9,
    // },
    // {
    //   loc: `${frontendUrl}/blog`,
    //   lastmod: new Date().toISOString(),
    //   changefreq: "never",
    //   priority: 0.9,
    // },
    ...(await generateSitemapObjects()).map((sitemapObject) => sitemapObject),
  ];
}

const generateSitemapObjects = async () => {
  try {
    const categoryResponse = await fetch(`${backendUrl}/category/getAllCategories`);
    const categoryData = await categoryResponse.json();
    const categories = categoryData.categories;

    const serviceResponse = await fetch(`${backendUrl}/service/getAllServicesId`);
    const serviceData = await serviceResponse.json();
    const services = serviceData.services;

    // console.log(categories, services);

    const categorySitemap = categories.map((category: any) => {
      return {
        url: `${frontendUrl}/category/${category.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.8,
      };
    });

    const serviceSitemap = services.map((service: any) => {
      return {
        url: `${frontendUrl}/service/${service.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.8,
      };
    });

    // console.log(categorySitemap, serviceSitemap);

    return [...categorySitemap, ...serviceSitemap];
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error appropriately, e.g., return an empty array or rethrow the error.
    return [];
  }
};
