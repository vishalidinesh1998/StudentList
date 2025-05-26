import { useContext } from "react";
import { ArrContext } from "../Arrcontext";

function Favourit() {
  const { arrlist, setarrlist, favouriteList, setFavouriteList } = useContext(ArrContext);

  const Removelist = (name) => {
    const index = favouriteList.indexOf(name);
    if (index !== -1) {
      // Add back to arrlist if not already there
      if (!arrlist.includes(name)) {
        setarrlist([...arrlist, name]);
      }

      // Remove from favouriteList
      setFavouriteList([
        ...favouriteList.slice(0, index),
        ...favouriteList.slice(index + 1),
      ]);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2 p-4">Favourite List</h2>
      <table>
        <tbody>
          {favouriteList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}. {item}</td>
              <td>
                <button
                  className="bg-red-500 text-white font-semibold rounded-sm p-2"
                  onClick={() => Removelist(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Favourit;
