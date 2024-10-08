import { graphql } from '~/client/graphql';

export const GalleryFragment = graphql(`
  fragment GalleryFragment on Product {
    images {
      edges {
        node {
          altText
          url: urlTemplate(lossy: true)
          isDefault
        }
      }
    }
    defaultImage {
      altText
      url: urlTemplate(lossy: true)
    }
  }
`);
