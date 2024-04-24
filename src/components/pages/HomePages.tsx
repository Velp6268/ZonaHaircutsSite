import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";

import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";


const HomePages : React.FC = ()  => {
    return (
        <div>
            <MainBlock/>
            <WhatWeDo/>

        </div>
    );
};

export default HomePages;