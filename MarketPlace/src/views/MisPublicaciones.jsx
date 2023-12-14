import React from 'react'
import Nava from "../components/Nava"
import Market from '../components/Market'
import Footer from "../components/Footer"
import { useMediaQuery } from 'react-responsive';
import NavaDesk from "../components/NavaDesk";

function MisPublicaciones() {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div>
            {!isMobile && <NavaDesk />}
            <div id='h1Titulo'>
                <h1>Mis Publicaciones</h1>
            </div>
            <Market />
            <Footer />
            {isMobile && <Nava />}
        </div>
    )
}

export default MisPublicaciones