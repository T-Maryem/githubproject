import React from 'react';
import Navbar from '../component/Navbar';
import UserInfo from '../component/UserInfo';
import Tabs from '../component/Tabs';
//import Repository from '../component/Repository';
import Repositories from '../component/Repositories';
function UserPage() {
    return (
        <div>
            <Navbar />
            <UserInfo />
            <Tabs />
            <Repositories />
        </div>
    )
}
export default UserPage;    