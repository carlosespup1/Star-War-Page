import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [charactersAll, setCharacters] = useState([]);
    const [favorities, setFavorities] = useState([]);

    const fetchData = async () => {
        const API = 'https://swapi.dev/api/people/';
        const data = await fetch(API);
        const parseData = await data.json();
        setCharacters(parseData.results);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
       <DataContext.Provider
         value={{charactersAll, favorities ,setFavorities}}
       >
        { children }
       </DataContext.Provider>
    )
}