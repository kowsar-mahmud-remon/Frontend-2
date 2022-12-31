import React from 'react';
import Navication from '../components/Navication/Navication';

const NavicationLayout = ({ children }) => {
    return (
        <main>
            <Navication />
            {
                children
            }
        </main>
    );
};

export default NavicationLayout;