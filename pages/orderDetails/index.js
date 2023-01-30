import ManageAccoutSideBar from "../../components/ManageAccoutSideBar/ManageAccoutSideBar";
import MyOrderDetails from "../../components/myOrderDetails/myOrderDetails";

const index = () => {
  return (
    <div className="flex">
      <ManageAccoutSideBar></ManageAccoutSideBar>
      <MyOrderDetails />
    </div>
  );
};

export default index;
