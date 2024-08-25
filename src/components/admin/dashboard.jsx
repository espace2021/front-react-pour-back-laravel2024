import { useState,useEffect } from 'react';
import {profile} from '../../services/authservice'
function Dashboard() {
    const [name, setname] = useState('');
    useEffect(() => {
        
    profile().then((response) => {
        console.log(response);
     if(response.data)   setname(response.data.name)
    })
    }, []);
    return ( 
    <>
    <h1>Dashboard</h1>
    <div>
        Dashboard main
        <div>
        {name}
        </div>
    </div>
    </> 
);
}

export default Dashboard;
