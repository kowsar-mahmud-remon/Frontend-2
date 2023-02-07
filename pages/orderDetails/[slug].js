import  {useRouter}  from "next/router";
import ManageAccountLayout from "../../components/ManageAccoutSideBar/ManageAccountLayout";
import { myOrderRelated } from "../../Utils/orderDetaisManage";



const Details = () => {
    const router = useRouter()
  
  return (
    <div className=" mt-10 md:mx-16">
      <ManageAccountLayout>
              {
                  myOrderRelated?.map((a, i) => {
                      if (a?.href === router?.query?.slug) {
                          return a?.element
                      }
                  })
        }
        
      </ManageAccountLayout>
    </div>
  );
};

export default Details;
