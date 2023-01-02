import React, {ReactElement} from 'react'
import Navbar from './navbar/Navbar';

type LayoutProps = Required<{
    readonly children: ReactElement
}>

 function Layout({ children }:LayoutProps) {
    return (
        <>
            <Navbar />
        <main>{children}</main>
        </>
    )
}

export default Layout