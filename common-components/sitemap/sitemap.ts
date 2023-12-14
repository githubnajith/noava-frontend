import {MetadataRoute} from 'next';
import {fetch_maincategory, fetch_subcategory, fetch_products} from '@/util/5.fetch_xmlmap';

const WEBSITE_HOST_URL = 'https://www.noava.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: any = ['', '/contact', '/skin-maincategory'].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const skin_maincategory = await fetch_maincategory(`noava/products/skins/maincategory/title`);
  const skin_subcategory = await fetch_subcategory(`noava/products/skins/subcategory`);
  const skin_products = await fetch_products(`noava/products/skins/products`);

  return [...routes, ...skin_maincategory, ...skin_subcategory, ...skin_products];
}
