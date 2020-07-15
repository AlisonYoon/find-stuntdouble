import React, {useState} from 'react';
import Deck from "./Components/Deck";
import Workers from "./Workers";

function FindStuntDouble() {

    const [stuntId, setStuntId] = useState(6);


    return (
        <div>
            {/*<div className="dislike-zone" onDragOver={(e)=>onDragOver(e)}>*/}
            {/*</div>*/}

            <div className="flex-container">
                <h1 className="logo"><img src="./img/milogo.svg" alt="mi3"/> </h1>
                <h2 className="position-text">Position: Stunt double</h2>

                <Deck data={Workers} id={stuntId} />

                <div className="user-guide-icons">
                    <img src="./img/nope.svg" alt=""/>
                    <img src="./img/like.svg" alt=""/>
                </div>
            </div>

            {/*<div className="like-zone" onDragOver={(e)=>onDragOver(e)}>*/}

            {/*</div>*/}
        </div>
    );

}

export default FindStuntDouble;