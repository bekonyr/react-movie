import axios from "axios";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { API_KEY } from "../../Data";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { LanguageContext } from "../../context";



const Search = () => {
	const [find, setFind] = useState([]);
	const { movieName } = useParams();
	const {language } = useContext(LanguageContext)
	const {dark } = useContext(LanguageContext)

	const getSearch = (key) => {
		axios(
			`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=${language}&query=${movieName}`
		).then((res) => setFind(res.data.results));
	};
	useEffect(() => {
		getSearch(API_KEY);
	}, [find, language]);
	// console.log(find);
	return (
		<div id="popular"
		style={{
			background: dark
				? " linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(81,89,92,1) 91%)"
				: "",
		}}>
			<div className="container">
				<div className="popular">

					{find.map((el) => (
						<MovieCard key={el.id} el={el} />
					))}
				</div>

			</div>
		</div>
	);
};

export default Search;
//https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}
