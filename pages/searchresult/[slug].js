import { useRouter } from "next/router";
import SearchResultLayout from "../../layouts/SearchResultLayout";
import { searchCollections } from "../../Utils/searchCollections";


const SearchResult = () => { 
  const router = useRouter(); 

  return (
    <div>
      <SearchResultLayout>
        {searchCollections?.map((a, i) => {
          // console.log(a);
          if (a?.href === router?.query?.slug) {
            return a?.element;
          }
        })}
      </SearchResultLayout>
    </div>
  );
};

export default SearchResult;
