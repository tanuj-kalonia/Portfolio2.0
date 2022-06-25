// This file connects sanity to our react application

import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

// n
export const client = sanityClient({
    projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-06-20',
    useCdn: true,
    token: process.env.REACT_APP__SANITY_TOKEN
});

const builder = imageUrlBuilder(client);
// this builder function takes client paramter
// it is used to publish the image from the sanity studio

export const urlFor = (source) => builder.image(source)