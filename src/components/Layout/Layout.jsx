import css from './Layout.module.css';
import Header from '../Header/Header'

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


export const Layout = () => {
    return (
        <>
            <Header></Header>
            <main className={css.container}>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};