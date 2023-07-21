import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { API_KEY } from "../../Data";
import { LanguageContext } from "../../context";


const Trailer = ({ Id }) => {
	const block = document.querySelector(".zoom");


	const [trailer, setTrailer] = useState([]);
	const {language } = useContext(LanguageContext)
	const {dark } = useContext(LanguageContext)
	const getTrailer = (key) => {
		axios(
			`https://api.themoviedb.org/3/movie/${Id}/videos?api_key=${key}&language=${language}`
		).then((res) => setTrailer(res.data.results));
	};
	useEffect(() => {
		getTrailer(API_KEY);
	}, [language]);
	
	console.log(trailer);
	return (
		<div id="trailer"
		style={{
			background: dark ?  " linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(81,89,92,1) 91%)" : "" ,
		}}
		>
			<div className="container">
				<div className="trailer">
					{trailer.slice(0, 10).map((el) => (
						<div className="trailer--scrol">
							
							<iframe
								width="304"
								height="206"
								src={`https://www.youtube.com/embed/${el.key}`}
								title="FAST X | Official Trailer"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
					))}

				
				</div>
			</div>
		</div>
	);
};

export default Trailer;
