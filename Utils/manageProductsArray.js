import EditProducts from "../components/EditProducts/EditProducts";
import EditProductsTwo from "../components/EditProducts/EditProductsTwo";
import ManageProduct from "../components/ManageProduct/ManageProduct";
import UploadProduct from "../components/UploadProduct/UploadProduct";

export const manageProductsArray = [
  {
    title: "EditProducts",
    href: "editProduct",
    element: <EditProducts />,
  }, {
    title: "EditProductsTwo",
    href: "editProductsTwo",
    element: <EditProductsTwo />
  }, {
    title: "ManageProducts",
    href: "manageproducts",
    element: <ManageProduct></ManageProduct>
  }, {
    title: 'add products',
    href: 'uploadProducts',
    element:<UploadProduct></UploadProduct>

  }

];

