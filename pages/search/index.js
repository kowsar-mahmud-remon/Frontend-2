import SearchDesktop from "../../components/Search/SearchDesktop";
import SearchMobile from "../../components/Search/SearchMobile";


function search() {
    return (
        <div>
            <div className="  ">  <SearchDesktop></SearchDesktop></div>
            {/* <div className="md:hidden lg:hidden sm:block">     <SearchMobile></SearchMobile></div> */}
        </div>
    )
}
export default search;