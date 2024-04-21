import React from 'react';
import MainBlock from "../sections/MainBlock/MainBlock.tsx";
import Header from "../sections/Header/Header.tsx";
import WhatWeDo from "../sections/WhatWeDo/WhatWeDo.tsx";

const HomePages : React.FC = ()  => {
    return (
        <div>
            <Header/>
            <MainBlock/>
            <WhatWeDo/>
        </div>
    );
};

export default HomePages;