import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);

  const categories = data.allSanityFeatured.nodes[0].category;

  return (
    <TopCategoriesStyles>
      <SectionTitle>TopCategories</SectionTitle>
      <ParagraphText className="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quo
        minus tenetur neque nulla officiis libero. Pariatur modi velit
        distinctio, eum quod tempore. Illo enim voluptatibus, ab dignissimos hic
        itaque!
      </ParagraphText>
      <CategoryGrid categories={categories} />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
