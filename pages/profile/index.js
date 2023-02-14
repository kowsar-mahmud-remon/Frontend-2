import ManageAccount from "../../components/ManageAccoutSideBar/ManageAccount";
import ManageAccountLayout from "../../components/ManageAccoutSideBar/ManageAccountLayout";



const Profile = () => {
    return (
        <div>


            <ManageAccountLayout>

                <div className="hidden lg:block">
                    <ManageAccount></ManageAccount>
                </div>

            </ManageAccountLayout>
        </div>
    );
};

export default Profile;
