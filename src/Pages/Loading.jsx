import React from 'react'
import './Loading.css'
import { BeatLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className='body'>
            <BeatLoader className='loader-container' color='#47cf73' />
        </div>
    )
}
