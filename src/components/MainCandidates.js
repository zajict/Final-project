import React from "react";
import Card from './Card';
import {useEffect, useState} from "react";



export const MainCandidates = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:3333/api/candidates').then((response) => response.json()).then(data=>setCandidates(data)); 
            
        };
        fetchData();

    }, []);

    return (<div className="candidates"> {
        candidates.map(candidate => (<Card key={candidate.id} email={
                candidate.email
            }
            id={
                candidate.id
            }
            name={
                candidate.name
            }
            avatar={
                candidate.avatar
            }/>))
    } </div>);
};
