import React from 'react';
import Deck from "./Components/Deck";
import Workers from "./Workers";

function FindStuntDouble() {

    return (
        <div>
            <div className="flex-container">
                <h1 className="logo"><img src="./img/milogo.svg" alt="mi3"/> </h1>
                <h2 className="position-text">Position: Stunt double</h2>

                <Deck data={Workers} />

                <div className="user-guide-icons">
                    <img src="./img/nope.svg" alt="dislike"/>
                    <img src="./img/like.svg" alt="like"/>
                </div>
            </div>
        </div>
    );

}

export default FindStuntDouble;