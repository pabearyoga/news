import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useData = () => useContext(FilterContext);

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
   
  const changeInput = (e) => {
    switch (e.target.name) {
      case 'Search':
        setSearch(e.target.value)
        break;
      case 'Category':
        setFilterCategory(e.target.value.toLowerCase())
        break;
      case 'Country':
        switch (e.target.value) {
          case 'United Kingdom':
            setFilterCountry('gb')
            break;
          case 'Ukraine':
            setFilterCountry('ua')
            break;
          case 'Germany':
            setFilterCountry('de')
            break;
          case 'Poland':
            setFilterCountry('pl')
            break;
          case 'USA':
            setFilterCountry('us')
            break;
        
          default:
            break;
        }
        break;
      default:
        break;
    }
    }

  return (
    <FilterContext.Provider value={{ search, filterCategory, filterCountry, changeInput}}>
      {children}
    </FilterContext.Provider>
  );
};