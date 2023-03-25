import './SingleUser.css';
import { useEffect, useState } from 'react';

export const SingleUser = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/${id}`)
        .then(response => response.json())
        .then(data => setUser(data))
    }, [id]);

    if (!user) return null;

    const dob = user.birthday;
    const date = new Date(dob);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate= `${day}.${month}.${year}`;

    return (
        <div className="row">
            <div className="col s3">{user.avatar}</div>
            <div className="col s9">
                <div className="row">
                    <div className="name-container">
                        <p>Name:</p>
                        <div>{user.name}</div>
                    </div>
                    <div className="dob-container">
                        <p>Date of birth:</p>
                        <div>{formattedDate}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="email-container">
                        <p>Email:</p>
                        <div>{user.email}</div>
                    </div>
                    <div className="edu-container">
                        <p>Education:</p>
                        <div>{user.education}</div>
                    </div>
                </div>
            </div>
      </div>
    );
}