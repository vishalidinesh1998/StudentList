import { createContext, useState } from "react";

const ArrContext = createContext();

function ArrContextProvider({ children }) {
  const [arrlist, setarrlist] = useState(["Arun", "Adhi","Bharathi","Baviya","saran"]);
 const [favouriteList, setFavouriteList] = useState([]);

  return (
    <ArrContext.Provider value={{ arrlist, setarrlist ,favouriteList,setFavouriteList}}>
      {children}
    </ArrContext.Provider>
  );
}

export default ArrContextProvider;
export { ArrContext };
