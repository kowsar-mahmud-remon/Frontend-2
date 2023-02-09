import { useRouter } from "next/router";
import ManageProductsLayout from "../../layouts/ManageProductsLayout";
import { manageProductsArray } from "../../Utils/manageProductsArray";



const ProductsList = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div
    // className=" mt-10 md:mx-16"
    >
      <ManageProductsLayout>
        {
          manageProductsArray?.map((a, i) => {
            // console.log(a);
            if (a?.href === router?.query?.slug) {
              return a?.element;
            }
          })
        }

      </ManageProductsLayout>
    </div>
  );
};

export default ProductsList;
