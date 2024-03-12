import { ReactNode } from "react";
import Footer from "../Footer";
import Topo from "../Topo";
import Head from "next/head";


interface LayoutProps {
    children: ReactNode
}


export default function Layout({children}: LayoutProps) {
    return (
        <>
            <Head >
                <link rel="ico" href="favicon.ico" />
            </Head>
        
            <Topo/>
            {children}
            <Footer/>

        </>


    )
}