import Link from 'next/link';
import React from 'react';
import Overview from '../../components/check/Overview';
import Settings from '../../components/check/Settings';

const Hello = () => {

    const Links = [
        {
            title: 'Overview',
            href: 'Overview',
            element: <Overview />
        },
        {
            title: 'Settings',
            href: 'Settings',
            element: <Settings />
        },
    ]



    return (
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul className='flex flex-col'>
                    {
                        Links.map((l, i) => <Link
                            key={i}
                            href={`/dashboard/${l.href}`}
                        >{l.title}</Link>)
                    }
                </ul>
            </nav>

            <h1>Hey</h1>
        </div>
    );
};

export default Hello;