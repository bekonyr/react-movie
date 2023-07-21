import axios from "axios";
import React, { useEffect , useContext } from "react";
import { useState } from "react";
import { API_KEY } from "../../Data";

import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const Actors = ({Id}) => {
	const [actor, setActor] = useState([]);
    const {dark} = useContext(LanguageContext)

	const getActors = (key) => {
		axios(
			`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=${key}&language=ru-RU`
		).then((res) => setActor(res.data.cast));
	};
	useEffect(() => {
		getActors(API_KEY);
	}, []);
	// console.log(actor);
	return <div id="actor"
    style={{
        background: dark ?  " linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(81,89,92,1) 91%)" : "" ,
    }}
    >
        <div className="container">
            <div className="actor">
            {
                           actor.map(el =>(
                               <div className="actor--card">
                                       <Link to={`/movie/details/actors/${el.id}`}>

                                   {
                                       el.profile_path ?
                                           <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                           : <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" width={165} alt="img"/>
                                   }
                                   </Link>
                                   <center>
                                   <h4>{el.name}</h4>
                                   <p>{el.character}</p>

                                   </center>
                               </div>
                           ))
                       }
            </div>
        </div>
    </div>;
};

export default Actors;
