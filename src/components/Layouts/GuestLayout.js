import Head from 'next/head'
import Footer from '../Items/Footer'
import ProtectedRoute from '@/app/ProtectedRoute'
import React, { useEffect } from 'react';

const GuestLayout = ({ children }) => {
    const [hasToken, setHasToken] = React.useState(false);

    useEffect(() => {
        const token = typeof window !== "undefined" && localStorage.getItem("token");
        setHasToken(!!token); // Token varsa true, yoksa false
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
            <Head>
                <title>Pinteg - B2B</title>
            </Head>

            <div className="font-sans text-gray-900 antialiased min-h-full">
                <ProtectedRoute>
                    {children}
                </ProtectedRoute>
            </div>

            {hasToken && <Footer />}
        </div>
    )
}

export default GuestLayout
