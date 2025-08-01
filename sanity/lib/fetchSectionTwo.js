import { client } from './client'

export const fetchSectionTwo = async () => {
  const query = `*[_type == "sectionTwo"][0]{
    mainHeading,
    subHeading,
    description,
    buttonLinks,
    resourcesHeading,
    resourcesDescription,
    subServices[]{
      title,
      items
    },
    "circleImageUrl": circleImage.asset->url,
    "mainImageUrl": mainImage.asset->url
  }`

  return await client.fetch(query)
}
