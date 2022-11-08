import Head from 'next/head';
import React from 'react';
import Navigation from './Navigation';

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <meta charset='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>My next app</title>
            </Head>

            <header>
                <Navigation />
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
