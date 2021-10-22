import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [experts, setExpert] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/experts')
            .then(res => res.json())
            .then(data => setExpert(data));
    }, [])
    
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/experts/${id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = experts.filter(expert => expert._id !== id);
                        setExpert(remainingUsers)
                    }
            })
        }
    }
    return (
        <div>
            <h2>Experts</h2>
            <ul>
                {
                    experts.map(expert => <li>{expert.name} ||| {expert.expert}<Link to={`/experts/update/${expert._id}`}><button>Details</button></Link><button onClick={()=>handleDeleteUser(expert._id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Users;