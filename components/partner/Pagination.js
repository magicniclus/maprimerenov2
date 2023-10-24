import React, { useEffect } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { getTotalContactsCount } from "../../firebase/dataManager"; // Remplacez par le chemin correct

const Pagination = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTotalCount() {
      try {
        const count = await getTotalContactsCount();
        dispatch({ type: "SET_TOTAL_CONTACTS", payload: count });
      } catch (error) {
        console.error("Error fetching total contacts count:", error);
      }
    }

    fetchTotalCount();
  }, []);

  const numberOfContact = useSelector((state) => state.totalContacts);
  const numberOfPage = Math.ceil(numberOfContact / 10);
  const pageIsSelected = useSelector((state) => state.pagination);

  const handleClick = (pageNumber) => {
    dispatch({ type: "UPDATE_PAGINATION", payload: pageNumber });
  };

  const renderPages = () => {
    let pages = [];
    for (let i = 1; i <= numberOfPage; i++) {
      if (
        i === 1 ||
        i === numberOfPage ||
        (i >= pageIsSelected - 2 && i <= pageIsSelected + 2)
      ) {
        pages.push(
          <a
            key={i}
            href="#"
            onClick={() => handleClick(i)}
            className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
              pageIsSelected === i
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {i}
          </a>
        );
      } else if (i === 2 || i === numberOfPage - 1) {
        pages.push(
          <span
            key={i}
            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          >
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <a
          href="#"
          onClick={() => pageIsSelected > 1 && handleClick(pageIsSelected - 1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">{renderPages()}</div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          onClick={() =>
            pageIsSelected < numberOfPage && handleClick(pageIsSelected + 1)
          }
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
