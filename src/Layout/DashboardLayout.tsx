import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '@/styles/globals.css'

interface DashboardLayoutProps {
    children: React.ReactNode;
    title?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title = 'Dashboard' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
                <Navbar />
            <div className="dashboard-layout">
                <main className="dashboard-content mb-4">{children}</main>
            </div>
                {/* <Footer /> */}
        </>
    );
};

export default DashboardLayout;