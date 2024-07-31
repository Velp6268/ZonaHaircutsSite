import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";
import Header from "../sections/Header/Header.tsx";
import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";
import Contact from '../sections/Contact/Contact.tsx';
import OurTeam from '../sections/OurTeam/OurTeam.tsx';
import OurWorks from '../sections/OurWorks/OurWorks.tsx';

const HomePages : React.FC = ()  => {
    return (
        <div>
            <Header/>
            <MainBlock/>
            <WhatWeDo/>
            
            <OurTeam/>
            <OurWorks/>
            <Contact/>
        </div>
    );
};

export default HomePages;