'use client';
import {useEffect, useState} from 'react';
import {GetJwstData} from './GetJwstData';
import {JwstProps} from '@/types/JwstProps';
import styled from "styled-components";

const Heading = styled.h1`
        text-align: center;
        font-size: 40px;
        margin: 10px auto;
        font-family: "Segoe UI", Roboto, sans-serif;
    `;

const Div = styled.div`
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    width: 70%;
    background-color: #f1ebfc;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 #d1d1d1, 0 6px 20px 0 #d1d1d1;
`;

const P = styled.p`
    font-family: "Segoe UI", Roboto, sans-serif;
    `;


const Img = styled.img`
    max-width: 40%;
    max-height: 40%;
    box-shadow: 0 4px 8px 0 #d1d1d1, 0 6px 20px 0 #d1d1d1;
    margin: 2px auto;
    border-radius: 5px;
`

export default function JwstInfo() {

    const [data, setData] = useState<JwstProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetJwstData().then(setData).catch(console.error).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <P>Loading catalog items...</P>
    }

    return (
        <>
            <Heading>James Webb Telescope Image Catalog</Heading>
            {data.map((item) => (
                <Div key = {item.id}>
                    <Img src={item.location} alt={item.details.description}/>
                    <P>Description: {item.details.description}</P>
                </Div>
            ))}
        </>
    );
}