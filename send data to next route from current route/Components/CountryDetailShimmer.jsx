import React from 'react'

export default function CountryDetailShimmer() {
  return (
    <>
        <main className="main">
                <a href="" className="back"><i className="fa-solid fa-arrow-left-long" onClick={() => history.back()}></i><span>&#160;&#160;Back</span></a>
                <div className="country-card">
                    <div className="image">
                        <img src={counrtyData.flag} alt="flag"></img>
                    </div>
                    <div className="content">
                        <h2>{counrtyData.name}</h2>
                        <div className="content1">
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div className="border-countries">
                            <p className="border">Border Countries: </p>
                            <Link to={'india'} >India</Link>
                        </div>
                    </div>
                </div>
            </main>
    </>
  )
}
