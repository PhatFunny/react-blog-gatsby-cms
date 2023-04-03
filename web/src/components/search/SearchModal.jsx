import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { SearchModalContext } from '../../context/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';
import SearchField from './SearchField';
import SearchResult from './SearchResult';

const query = graphql`
  {
    localSearchAuthors {
      publicIndexURL
      publicStoreURL
    }
    localSearchBlogs {
      publicStoreURL
      publicIndexURL
    }
    localSearchCategories {
      publicStoreURL
      publicIndexURL
    }
  }
`;

function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState(null);
  const data = useStaticQuery(query);
  const [blogsIndexStore, setBlogsIndexStore] = useState(null);
  const [categoriesIndexStore, setCategoriesIndexStore] = useState(null);
  const [authorsIndexStore, setAuthorsIndexStore] = useState(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = 'hidden';
      setSearchQuery('');
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isSearchModalOpen]);

  const {
    publicStoreURL: blogsPublishStoreURL,
    publicIndexURL: blogsPublishIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublishStoreURL,
    publicIndexURL: categoriesPublishIndexURL,
  } = data.localSearchCategories;
  const {
    publicStoreURL: authorsPublishStoreURL,
    publicIndexURL: authorsPublishIndexURL,
  } = data.localSearchAuthors;

  const handleOnFocus = async () => {
    if (blogsIndexStore && categoriesIndexStore && authorsIndexStore) return;

    const [
      { data: blogsIndex },
      { data: blogsStore },
      { data: categoriesIndex },
      { data: categoriesStore },
      { data: authorsIndex },
      { data: authorsStore },
    ] = await Promise.all([
      axios.get(blogsPublishIndexURL),
      axios.get(blogsPublishStoreURL),
      axios.get(categoriesPublishIndexURL),
      axios.get(categoriesPublishStoreURL),
      axios.get(authorsPublishIndexURL),
      axios.get(authorsPublishStoreURL),
    ]);

    setBlogsIndexStore({
      index: blogsIndex,
      store: blogsStore,
    });
    setCategoriesIndexStore({
      index: categoriesIndex,
      store: categoriesStore,
    });
    setAuthorsIndexStore({
      index: authorsIndex,
      store: authorsStore,
    });
  };

  if (!isSearchModalOpen) return null;

  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        />
        {searchQuery &&
          blogsIndexStore &&
          categoriesIndexStore &&
          authorsIndexStore && (
            <div className="search__result">
              <SearchResult
                searchQuery={searchQuery}
                blogsIndexStore={blogsIndexStore}
                categoriesIndexStore={categoriesIndexStore}
                authorsIndexStore={authorsIndexStore}
              />
            </div>
          )}
      </div>
    </SearchModalStyles>
  );
}

export default Search;
