import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Overview from './Overview';
import Settings from './Settings';

const Layout = ({ children }) => {
    const { query, pathname } = useRouter();
    
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/dashboard/Overview">Overview</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/Settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
                {/* <main>
                    {pathname === '/dashboard/overview' && <Overview />}
                    {pathname === '/dashboard/settings' && <Settings />}
                </main> */}
                <div>
                    {
                        children
                    }
                </div>
            </div>
        </div>
    );
};

export default Layout;



