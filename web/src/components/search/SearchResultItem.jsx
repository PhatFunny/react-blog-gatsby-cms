import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { format } from 'date-fns';
import { SearchResultItemStyles } from '../../styles/search/SearchResultItemStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import { SearchModalContext } from '../../context/searchModalContext';

function BlogsSearchResultItem({ blog }) {
  const { closeSearchModal } = useContext(SearchModalContext);

  return (
    <SearchResultItemStyles
      to={`/blogs/${blog.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="img"
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="publishedAtText">
          {format(new Date(blog.publishedAt), 'p, MMMM dd yyyy')}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategoriesSearchResultItem({ category }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/categories/${category.slug.current}`}
      onClick={closeSearchModal}
    >
      <Title className="title">{category.title}</Title>
    </SearchResultItemStyles>
  );
}

function AuthorsSearchResultItem({ author }) {
  const { closeSearchModal } = useContext(SearchModalContext);
  return (
    <SearchResultItemStyles
      to={`/authors/${author.slug.current}`}
      onClick={closeSearchModal}
    >
      <GatsbyImage
        image={author.profileImage.asset.gatsbyImageData}
        alt={author.profileImage.alt}
        className="authorProfileImg"
      />
      <Title className="title">{author.name}</Title>
    </SearchResultItemStyles>
  );
}

export {
  BlogsSearchResultItem,
  CategoriesSearchResultItem,
  AuthorsSearchResultItem,
};
