import React from 'react'
import './Shimmer.css'

export default function CountriesListShimmer() {
  return (
    <>

        {
            Array.from({length: 10}).map((data, index) => {
                return (
                    <div className='country' key={index}>
                        <div className="ff"></div>
                        <p className='head'></p>
                        <p className='detail'></p>
                        <p className='detail'></p>    
                        <p className='detail'></p>
                    </div>
                )
            })
        }       
    </>
  )
}

