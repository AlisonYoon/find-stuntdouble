import React, {useState, useEffect} from 'react';
import Card from "./Card";
import Draggable from "react-draggable";

const judgeLikeDislike = (positionX) => {
    if(positionX < -150) {
        alert("disliked");
    } else if (positionX > -150) {
        alert("liked");
    } else {
        //needs error handling for the case when user doesn't swipe at all but just clicks on the card
    }
};

function Deck(props) {

    const [positionX, setPositionX] = useState(-150);

    //store user choice in "liked" array as state
    const [liked, setLiked] = useState([]);


    useEffect(()=>{
        judgeLikeDislike(positionX);
        //below console.log is to check the final point X
        //console.log('newpositionX', positionX);
    }, [positionX]);

    const onDragStart = (e, props) => {
        e.preventDefault();
        //below console.log is to check starting point X
        //console.log('starting', positionX);
    };

    const onDragOver = (e, props) => {
        // Here, I can grab the picked card's node to see which card is picked. By looking at its image source for example. Then I can store the name and image source in the "like" state.
        // console.log(props.node);
        props.node.style.display = "none";
        setPositionX(props.x);
    };



    return (
        <div>
            <div className="flex-container stunt-card-container">
                    <div className="draggable-card">
                    {
                        props.data.map((workers) => (
                            <Draggable
                                handle=".draggable-card" // refers to the child that is draggable component
                                defaultPosition={{x: -150, y: 0}} //defaultPosition is starting point
                                grid={[2,2]} // grid size that the component moves on. the smaller the number, smoother action.
                                onStart={onDragStart}
                                onStop={onDragOver}
                                key={workers.stuntId} // "Each Child in the list should have unique key value" error message resolved
                            >
                                <div className="draggable-card">
                                    <Card imgSrc={workers.img} name={workers.name}/>
                                </div>
                            </Draggable>
                        ))
                    }
                    </div>
            </div>
        </div>
    );
}

export default Deck;