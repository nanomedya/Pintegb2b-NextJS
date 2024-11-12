import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from '../pages/auth/login';
import HomePage from '../pages/home';
import ProductPage from '../pages/products';
import BasketPage from '../pages/basket';
import ProfilePage from '../pages/profile';
import MyOrdersPage from '../pages/order/my-orders';
import MyBackOrdersPage from '../pages/order/my-back-orders';
import WhereIsCargoPage from '../pages/order/where-is-cargo';
import MyInvoicesPage from '../pages/invoice/my-invoices';
import UnClosedInvoicesPage from '../pages/invoice/unclosed-invoices';
import DebtStatusPage from '../pages/invoice/debt-status';
import PayPage from '../pages/pay';
import SettingsPage from '../pages/settings';
import HelpPage from '../pages/help';
import NotificationPage from '../pages/notification';
import CompletedPage from '../pages/basket/completed';
import NewsPage from '../pages/news';
import NoticePage from '../pages/notice';
import NotFoundPage from '../pages/not-found';
import RegisterPage from '../pages/auth/register';
import ForgotPasswordPage from '../pages/auth/forgot-password';
import AuthPage from '../pages/auth';
import ContactPage from '../pages/contact';
import AboutPage from '../pages/about';

const AnimatedRoutes = () => {
    const location = useLocation();
    const token = localStorage.getItem("auth") === null ? null : JSON.parse(localStorage.getItem("auth")).access_token

    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={token === null ? <LoginPage /> : <HomePage />} />
                <Route path='/auth' element={token === null ? <LoginPage /> : <AuthPage />} />
                <Route path='/login' element={token === null ? <LoginPage /> : <HomePage />} />
                <Route path='/register' element={token === null ? <LoginPage /> : <RegisterPage />} />
                <Route path='/forgot-password' element={token === null ? <LoginPage /> : <ForgotPasswordPage />} />
                <Route path='/products' element={token === null ? <LoginPage /> : <ProductPage />} />
                <Route path='/basket' element={token === null ? <LoginPage /> : <BasketPage />} />
                <Route path='/profile' element={token === null ? <LoginPage /> : <ProfilePage />} />
                <Route path='/news' element={token === null ? <LoginPage /> : <NewsPage />} />
                <Route path='/notice' element={token === null ? <LoginPage /> : <NoticePage />} />
                <Route path='/order/my-orders' element={token === null ? <LoginPage /> : <MyOrdersPage />} />
                <Route path='/order/my-back-orders' element={token === null ? <LoginPage /> : <MyBackOrdersPage />} />
                <Route path='/order/where-is-cargo' element={token === null ? <LoginPage /> : <WhereIsCargoPage />} />
                <Route path='/invoice/my-invoices' element={token === null ? <LoginPage /> : <MyInvoicesPage />} />
                <Route path='/invoice/unclosed-invoices' element={token === null ? <LoginPage /> : <UnClosedInvoicesPage />} />
                <Route path='/invoice/debt-status' element={token === null ? <LoginPage /> : <DebtStatusPage />} />
                <Route path='/pay' element={token === null ? <LoginPage /> : <PayPage />} />
                <Route path='/profile' element={token === null ? <LoginPage /> : <ProfilePage />} />
                <Route path='/settings' element={token === null ? <LoginPage /> : <SettingsPage />} />
                <Route path='/help' element={token === null ? <LoginPage /> : <HelpPage />} />
                <Route path='/notification' element={token === null ? <LoginPage /> : <NotificationPage />} />
                <Route path='/basket' element={token === null ? <LoginPage /> : <BasketPage />} />
                <Route path='/basket/completed' element={token === null ? <LoginPage /> : <CompletedPage />} />
                <Route path='/contact' element={token === null ? <LoginPage /> : <ContactPage />} />
                <Route path='/about' element={token === null ? <LoginPage /> : <AboutPage />} />
                <Route path='*' element={token === null ? <LoginPage /> : <NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
