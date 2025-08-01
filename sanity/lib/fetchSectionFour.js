import { client } from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export async function fetchSectionFour() {
  const query = `*[_type == "clients"]{
    name,
    image
  }`

  const clients = await client.fetch(query)

  return clients.map(client => ({
    name: client.name,
    imageUrl: urlFor(client.image).url(),  // Use full image object here
  }))
}
