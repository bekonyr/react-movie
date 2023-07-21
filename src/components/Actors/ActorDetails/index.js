import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../../../Data";
import { Link, useParams } from "react-router-dom";
import { LanguageContext } from "../../../context";
import MovieActor from "../../../Page/MovieActor";


const ActorDetails = () => {
	const [actorDetails, setActorsDetails] = useState({});
    const [next , setNext] = useState(false);
	const { actorId } = useParams();
	const {language} = useContext(LanguageContext);
	const {dark} = useContext(LanguageContext)

	const getActorDetails = (key) => {
		axios(
			`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=${language}`
		).then((res) => setActorsDetails(res.data));
	};
	useEffect(() => {
		getActorDetails(API_KEY);
	}, [language]);
	console.log(actorDetails);
	const {
		profile_path,
		birthday,
		place_of_birth,
		also_known_as,
		biography,
		name,
        known_for_department,
	} = actorDetails;
	return (
		<div id={"actorDetails"}
		style={{
			background: dark ? "black" : "white",
			color: dark ? "white" :  "black" ,
		}}>
			<div className="container">
				<div className="actorDetails">
					<div className="actorDetails--block">
                    <img
						src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`}
						alt="img"
					/>
                    <h2>Персональная информация</h2>
                    <h3>Известность за</h3>
                    <h4>{known_for_department}</h4>
                <h3>Дата рождения</h3>
                <h4>{birthday}  ({2023 - birthday?.slice(0,4) }лет)</h4>
                <h3>Место рождения</h3>
                <h4>{place_of_birth}</h4>
       
                <ul> Также известность как{
                    also_known_as?.map(el => <li>{el}</li>)
                }
                </ul>
                    </div>
					<div className="actorDetails--text">
						<h1>{name}</h1>
						<h3>Биография</h3>
                        <p>
							{biography?.slice(0, 500)}
							{next ? biography : ""}
							<span
								style={{ color: "blue", cursor: "pointer" }}
								onClick={() => {
									setNext(!next);
								}}
							>
								{next ? "   ... Close" : " Read MORE..."}
							</span>
						</p>  
						<MovieActor Id={actorId}/>                     
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActorDetails;
