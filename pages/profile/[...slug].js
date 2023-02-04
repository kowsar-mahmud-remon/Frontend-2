import { useRouter } from 'next/router';
import React from 'react';
import ManageAccountLayout from '../../components/ManageAccoutSideBar/ManageAccountLayout';
import profileLinksObj from '../../Utils/myProfileLinks';
import profileLinksResponsiveObj from '../../Utils/myProfileLinksResponsive'
const Profile = () => {

    const router = useRouter()
    console.log(router?.query?.slug)
    return (
        <ManageAccountLayout slug={router?.query?.slug?.[0]}>
            <div className='hidden lg:block'>
                {
                    profileLinksObj?.map((p, i) => {
                        // console.log(p)
                        if (p?.href === router?.query?.slug?.[0]) {
                            return p?.element
                        }

                        p?.links && p?.links?.map((e, i) => {
                            if (e.href === router?.query?.slug?.[0]) {
                                // console.log('hello')
                                // console.log(e, p)
                                return e.element
                            }
                        })
                    })
                }
            </div>
            <div className='lg:hidden'>
            {
                    profileLinksResponsiveObj?.map((p, i) => {
                        console.log(p?.href === router?.query?.slug?.[0])
                        console.log(p?.element)
                        if (p?.href === router?.query?.slug?.[0]) {
                            return p?.element
                        }
                     })
                }
            </div>

        </ManageAccountLayout>
    );
};

export default Profile;