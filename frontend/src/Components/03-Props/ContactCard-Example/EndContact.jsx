'use strict';

import EndContactCard from "./EndContactCard";

const EndContact = () => {
    return (
        <div className="contacts">
            <EndContactCard 
                name="Harry Pawter" 
                phone="123234345" 
                email="harry.pawter@gmail.com" 
                img="https://placedog.net/300/200?id=43"
            />
            <EndContactCard 
                name="Jimmy Chew" 
                phone="234345456" 
                email="mr.jimmy@gmail.com" 
                img="https://placedog.net/400/200?id=5"/>
            <EndContactCard 
                name="Bark Wahlberg"
                img="https://placedog.net/300/200?id=66"
                phone="(212) 555-3456"
                email="bark@facebook.woof"
            />
            <EndContactCard 
                name="Indiana Bones"
                img="https://placedog.net/300/240?id=3"
                phone="(212) 555-5678"
                email="indiana.bones@hotmail.com" 
            />
        </div>
    )
}

export default EndContact; 