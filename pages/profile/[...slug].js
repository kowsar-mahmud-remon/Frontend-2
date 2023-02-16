import { useRouter } from "next/router";
import React from "react";
import ManageAccountLayout from "../../components/ManageAccoutSideBar/ManageAccountLayout";
import {profileLinksObj,  profileLinksResponsiveObj } from "../../Utils/myProfileLinks";

const Profile = () => {
  const router = useRouter();
  
  // console.log(router?.query?.slug?.[0]);
  return (
    <ManageAccountLayout slug={router?.query?.slug?.[0]}>
      <div className="hidden lg:block">
        {profileLinksObj?.map((p, i) => {
          if (router?.query?.slug?.length > 1) {
            let ele;
            p?.links &&
              p?.links?.map((e, i) => {
                if (e.href === router?.query?.slug?.[1]) {
                  ele = e?.element;
                }
              });
            return ele;
          } else if (p?.href === router?.query?.slug?.[0]) {
            return p?.element;
          }
        })}
      </div>
      <div className="lg:hidden">
        {profileLinksResponsiveObj?.map((p, i) => {
          if (p?.href === router?.query?.slug?.[0]) {
            return p?.element;
          }
        })}
      </div>
    </ManageAccountLayout>
  );
};

export default Profile;
