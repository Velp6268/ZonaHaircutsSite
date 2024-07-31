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
            <Services/>
            <OurTeam/>
            <OurWorks/>
            <Contact/>

        </div>
    );
};

export default HomePages;