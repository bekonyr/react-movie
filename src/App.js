import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./Page/MovieDetails";
import ActorDetails from "./components/Actors/ActorDetails";
import Search from "./Page/Search";
function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/popular"} element={<Popular />} />
				<Route path={"/card"} element={<TopRated />} />
				<Route path={"/movie/details/:movieId"} element={<MovieDetails />} />
				<Route
					path={"/movie/details/actors/:actorId"}
					element={<ActorDetails />}
				/>
				<Route path={"/movie/search/:movieName"} element={<Search />} />
			</Routes>
		</div>
	);
}

export default App;
