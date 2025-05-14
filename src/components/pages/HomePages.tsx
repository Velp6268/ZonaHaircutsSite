import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";
import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";
import Services from "../sections/Services/Services.tsx";
import OurTeam from "../sections/OurTeam/OurTeam.tsx";
import Contact from "../sections/Contact/Contact.tsx";
import OurWorks from "../sections/OurWorks/OurWorks.tsx";

const HomePages : React.FC = ()  => {
    return (
        <div>
            <MainBlock/>
            <WhatWeDo/>
            <div id="services">
                <Services/>
            </div>
            <div id="ourTeam">
                <OurTeam/>
            </div>
            <div id="our-works">
                <OurWorks/>
            </div>
            <div id="contacts">
                <Contact/>
            </div>
        </div>
    );
};

export default HomePages;
