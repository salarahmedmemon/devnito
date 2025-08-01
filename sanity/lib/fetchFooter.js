import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export async function fetchFooter() {
  const query = `*[_type == "footer"][0]{
    navigationLinks,
    "logoImage": logo,
    socialLinks[]{
      "iconImage": icon,
      url
    }
  }`;

  const data = await client.fetch(query);

  return {
    navigationLinks: data?.navigationLinks || [],
    logoUrl: urlFor(data?.logoImage).url(),
    socialLinks: (data?.socialLinks || []).map(item => ({
      iconUrl: urlFor(item?.iconImage).url(),
      url: item?.url,
    })),
  };
}
