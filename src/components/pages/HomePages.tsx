import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";
import Header from "../sections/Header/Header.tsx";
import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";
import Contact from '../sections/Contact/Contact.tsx';

const HomePages : React.FC = ()  => {
    return (
        <div>
            <Header/>
            <MainBlock/>
            <WhatWeDo/>
            
            <Contact/>
        </div>
    );
};

export default HomePages;