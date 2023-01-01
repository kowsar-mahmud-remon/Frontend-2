import React from 'react';
import Navication from '../components/Navication/Navication';
import SideNav from '../components/SideNav/SideNav';
import Header from '../pages/ProductPage/Header';
// import styles from '../styles/Home.module.css'


const NavicationWithSideNavLayout = ({ children }) => {
    return (
        <main >
            <Navication />
            <Header />
            <section className={`page-side-nav-wraper my-7 mx-5 xl:mx-12`}>
                <SideNav />
                <div className='page-body' id='page-body'>
                    {
                        children
                    }
                </div>
            </section>

        </main>
    );
};

export default NavicationWithSideNavLayout;