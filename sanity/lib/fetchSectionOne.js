import { client } from './client'

export async function fetchSectionOne() {
  const query = `
    *[_type == "sectionOne"][0]{
      heading,
      subHeading,
      lineOne,
      lineTwo,
      buttonText,
      buttonLink,
      "rightImagesUrls": rightImages[].asset->url
    }
  `;
  return await client.fetch(query);
}
