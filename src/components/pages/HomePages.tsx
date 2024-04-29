import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";

import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";
import Services from "../sections/Services/Services.tsx";


const HomePages : React.FC = ()  => {
    return (
        <div>
            <MainBlock/>
            <WhatWeDo/>
            <Services/>

        </div>
    );
};

export default HomePages;