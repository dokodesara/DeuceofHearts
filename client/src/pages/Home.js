import React from 'react';
const aroaceFlag = new URL("../images/aroaceflag.png", import.meta.url)

const Home = () => {
    return (
        <>
            <div className="home-class">
                <div>
                    <div container="class_backGround">
                        <div className="col" id="right">
                            <h1>Deuce of Hearts</h1>
                            <h2>a dating and social media platform for asexual and/or aromantic people</h2>
                        </div>
                        <img src={aroaceFlag} alt="aro ace flag" id="homeFlag" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home