import React, { useEffect, useState } from 'react'
import TickerTape from '../TickerType'
import { APIKEY } from '../../Constants/constantUrl';
import axios from '../../Constants/axios';

export default function Currency() {
    const [currencyPairs, setCurrencyPairs] = useState([]);

    useEffect(() => {
        axios.get(`/v1/latest?apikey=${APIKEY}`).then((response) => {
            setCurrencyPairs(response.data.data)
            console.log(response.data.data);
        })
    }, [])


    const currency = currencyPairs.map((value, index) => (console.log(value)))

    return (
        <div>
            {currencyPairs.map((text, index) => {
                <TickerTape key={index}>{text}</TickerTape>
            })}

        </div>
    )
}
