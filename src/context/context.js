import React, { useContext, createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
	const [page, setPage] = useState(6);
	const [theme, setTheme] = useState("dark");
	const [countries, setCountries] = useState([]);
	const [countriesDisplay, setCountriesDisplay] = useState([]);
	const [countriesCache, setCountriesCache] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const response = await axios.get(
			"https://restcountries.eu/rest/v2/all"
		);
		const data = await response.data;
		return data;
	};

	return (
		<AppContext.Provider
			value={{
				countries,
				setCountries,
				countriesDisplay,
				setCountriesDisplay,
				fetchData,
				theme,
				setTheme,
				page,
				setPage,
				countriesCache,
				setCountriesCache,
				isLoading,
				setIsLoading,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
