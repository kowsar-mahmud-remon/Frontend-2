import { useRouter } from 'next/router';
import React from 'react';
import ManageAccountLayout from '../../components/ManageAccoutSideBar/ManageAccountLayout';
import { profileLinksObj } from '../../Utils/myProfileLinks';

const Profile = () => {

    const router = useRouter()

    return (
        <ManageAccountLayout>
            {
                profileLinksObj.map((p, i) => {
                    console.log(p)
                    if (p.href === router?.query?.slug) {
                        return p.element
                    }

                    p.links && p.links.map((e, i) => {
                        if (e.href === router?.query?.slug) {
                            console.log('hello')
                            console.log(e)
                            return e.element
                        }
                    })
                })
            }
        </ManageAccountLayout>
    );
};

export default Profile;