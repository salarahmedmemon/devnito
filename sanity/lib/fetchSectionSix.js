import { client } from './client'

export async function fetchSectionSix() {
  const query = `*[_type == "faqs"]{
    questionMobile,
    questionDesktop,
    answer
  }`
  return await client.fetch(query)
}
