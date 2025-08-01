import { client } from './client'

export const fetchSectionThree = async () => {
  const query = `*[_type == "sectionThree"][0]{
    mainHeading,
    subHeading,
    projects[]{
      title,
      shortDetail,
      description,
      mainLink,
      moreInfoLink,
      customClass,
      "imageUrl": image.asset->url
    }
  }`

  return await client.fetch(query)
}
