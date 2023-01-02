import ManageAccoutSideBar from "../../components/manageAccoutSideBar/manageAccoutSideBar";
import Navication from "../../components/Navication/Navication";
import OrderNavbar from "../../components/OrderNavbar/OrderNavbar";


const index = () => {
    return (
        <div>
        <div className="min-w-[1920px]">
            <Navication></Navication>

            <div className="flex  my-8 mx-5 gap-[55px] xl:mx-12">
                <div className="ml-[300px]">
                    <ManageAccoutSideBar></ManageAccoutSideBar>
                </div>
                <div >
                    <div className="mr-[300px]">
                        <div>
                            <h1 className="text-[#FB641B] text-[24px] font-semibold">My Orders</h1>
                        </div>

                        <div className="mt-[32px]">
                            <OrderNavbar></OrderNavbar>
                            <hr />
                        </div>




                    </div>

                </div>
            </div>
        </div>
    </div>
    );
};

export default index;