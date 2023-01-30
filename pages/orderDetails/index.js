import ManageAccountLayout from "../../components/ManageAccoutSideBar/ManageAccountLayout";

import MyOrderDetails from "../../components/myOrderDetails/myOrderDetails";

const index = () => {
  return (
    <div className=" mt-10 mx-16">
      <ManageAccountLayout>

      <MyOrderDetails />
      </ManageAccountLayout>
    </div>
  );
};

export default index;
