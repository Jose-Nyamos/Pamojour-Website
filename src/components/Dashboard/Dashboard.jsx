import React from 'react';
import Topbar from './Topbar.jsx';
import Sidebar from './Sidebar';
import FeaturedInfo from './FeaturedInfo';

export default function Dashboard() {
    return (
        <div>
            <Topbar />
            <Sidebar />
            <FeaturedInfo />
            
        </div>
    )
}
