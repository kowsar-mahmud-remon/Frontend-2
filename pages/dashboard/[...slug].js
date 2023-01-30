import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Overview from '../../components/check/Overview';
import Settings from '../../components/check/Settings';

const Slug = () => {
    const { query, pathname } = useRouter();
    console.log(query)

    const Links = [
        {
            title: 'Overview',
            href: 'Overview',
            element: <Overview />
        },
        {
            title: 'Settings',
            href: 'Settings',
            element: <Overview />
        },
    ]

    return (
        <div>
            <div>
                <ul className='flex flex-col'>
                    {
                        Links.map((l, i) => <Link
                            key={i}
                            href={`/dashboard/${l.href}`}
                        >{l.title}</Link>)
                    }
                </ul>
                {/* <main>
                    {pathname === '/dashboard/overview' && <Overview />}
                    {pathname === '/dashboard/settings' && <Settings />}
                </main> */}
                <div>
                    {
                        Links.map((l, i) => {
                            return query?.slug && query?.slug[0] ? l.href && l.element : <div>Hello</div>
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Slug;