import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const expertRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const expert = expertRef.current.value;

        const newExpert = { name, expert };

        fetch('http://localhost:5000/experts', {
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newExpert)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added a new Expert');
                    e.target.reset();
            }
        })

        e.preventDefault();
    }

    return (
        <div>
            <h2>Please Add A Football Expert</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder='name' />
                <input type="text" ref={expertRef} placeholder='expert email' />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;