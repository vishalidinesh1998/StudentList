import { useContext } from "react";
import { ArrContext } from "../Arrcontext";

function Student() {
  const { arrlist, favouriteList, setFavouriteList } = useContext(ArrContext);

  function addfavuroitlist(name) {
    if (!favouriteList.includes(name)) {
      setFavouriteList([...favouriteList, name]);
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2 p-4">Student List</h2>
      <table className="text-center">
        <tbody>
          {arrlist.map((item, index) => {
            const isDisabled = favouriteList.includes(item); //  per item disable

            return (
              <tr key={index}>
                <td className="text-xl font-bold">{index + 1}. {item}</td>
                <td>
                  <button
                    className={`text-white font-semibold rounded-sm p-2 ${isDisabled ? 'bg-gray-400' : 'bg-black'}`}
                    onClick={() => addfavuroitlist(item)}
                    disabled={isDisabled} // disable only this button
                  >
                    {isDisabled ? 'Already in Favourite' : 'Add to Favourite List'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
