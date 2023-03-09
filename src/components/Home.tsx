import React, {useContext, useEffect} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {characters, defaultHero, navItems, StarWarsContext} from "../utils/constants";
import {useNavigate, useParams} from "react-router-dom";

const Home = () => {
    const {hero} = useContext(StarWarsContext);
    const navigate = useNavigate();
    const {heroId = ''} = useParams();
    useEffect(()=>{
        if (!Object.keys(characters).includes(heroId)) {
            navigate(`/${navItems[0].route}/${hero}`);
        }
    },[])
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;