import React, {useContext} from 'react';
import {friends, StarWarsContext} from "../utils/constants";
import Friend from "./Friend";
import {characters} from "../utils/constants";

const DreamTeam = () => {
    const {hero} = useContext(StarWarsContext);
    return (
        <section className="float-end w-50 row border mx-1 mt-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(friend => friend !== characters[hero].img)
                .map((f, i) => <Friend key={i} pos={i+1} friend={f}/>)}
        </section>
    );
};

export default DreamTeam;