import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export async function fetchSectionFive() {
  const query = `*[_type == "sectionFive"][0]{
    title,
    stats[]{
      label,
      value,
      image
    }
  }`

  const data = await client.fetch(query)

  return {
    title: data?.title || '',
    stats: data?.stats?.map(stat => ({
      label: stat.label,
      value: stat.value,
      imageUrl: stat.image ? urlFor(stat.image).url() : null,
    })) || [],
  }
}
