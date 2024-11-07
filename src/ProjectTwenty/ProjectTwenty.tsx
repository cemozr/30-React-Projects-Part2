import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { nextPage, previousPage } from "./paginationSlice";

const itemPerPage: number = 5;

export const ProjectTwenty = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.paginationReducer.currentPage
  );

  const items: string[] = Array.from(
    { length: 25 },
    (_, index) => `Item ${index + 1}`
  );
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const displayedItems = items.slice(startIndex, endIndex);
  return (
    <div>
      <h1 className="text-4xl mb-3 text-white">Pagination</h1>
      <div className="border-2 p-4 rounded-md  border-purple-800">
        <ul className="p-2 flex items-center flex-col ">
          {displayedItems.map((displayedItem, i) => {
            return (
              <li key={i} className="text-white">
                {displayedItem}
              </li>
            );
          })}
        </ul>
        <div className="mt flex justify-center gap-4">
          <button
            className="p-2 m-2 w-20 border-2 rounded border-purple-800 bg-purple-400 text-white hover:bg-purple-800 cursor-pointer"
            onClick={() => dispatch(previousPage(currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="p-2 m-2 w-20 border-2 rounded border-purple-800 bg-purple-400 text-white hover:bg-purple-800 cursor-pointer"
            onClick={() => dispatch(nextPage(currentPage + 1))}
            disabled={endIndex >= items.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
