import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HomePages from "../pages/HomePages.tsx";
import ErrorPages from "../pages/ErrorPages.tsx";



const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="*" element={<ErrorPages/>}/>
        </Routes>
    );
};

export default AppRouter;