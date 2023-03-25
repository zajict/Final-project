import React from "react";
import Card from './Card';
import {useEffect, useState} from "react";


const MainCandidates = () => {

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3333/api/candidates');
            console.log(response);
        }; fetchData();

    }, []);

    return (
    <div className="candidates"></div>
    );
};
