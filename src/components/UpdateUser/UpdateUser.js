import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [expert, setExpert] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/experts/${id}`;
        fetch(url)
            .then(res => res.json())
        .then(data => setExpert(data))
    },[])
    return (
        <div>
            <h2>Update User: {expert.name}</h2>
        </div>
    );
};

export default UpdateUser;