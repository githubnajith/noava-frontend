import { dbUrl } from '@/vendors/1.firebase/firebase';
// -----------------------------------------------------
const WEBSITE_HOST_URL = 'https://www.noava.in';

export const fetch_maincategory = async (baseUrl: string) => {
  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
  const data = await res.json();
  const arr: any = [];
  Object.keys(data).map((key) => {
    arr.push({url: `${WEBSITE_HOST_URL}/skin-maincategory/${key}`, lastModified: new Date().toISOString()});
    return arr;
  });
  return arr;
};

export const fetch_subcategory = async (baseUrl: string) => {
  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
  const data = await res.json();
  const arr: any = [];
  Object.keys(data).map((mainKey) => {
    Object.keys(data[mainKey]?.title).map((subkey) => {
      arr.push({url: `${WEBSITE_HOST_URL}/skin-subcategory/${mainKey}/${subkey}`});
    });
  });
  return arr;
};

export const fetch_products = async (baseUrl: string) => {
  const res = await fetch(`${dbUrl}/${baseUrl}.json`);
  const data = await res.json();
  const arr: any = [];
  Object.keys(data).map((mainKey) => {
    Object.keys(data[mainKey]).map((subKey) => {
      Object.keys(data[mainKey][subKey]).map((productKey) => {
        arr.push({url: `${WEBSITE_HOST_URL}/skin_Product_detail/${mainKey}/${subKey}/${productKey}`});
      });
    });
  });
  return arr;
};
