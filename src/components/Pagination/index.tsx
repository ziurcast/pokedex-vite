import React from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { IPaginationData } from '@/models/states.model';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  pagination: IPaginationData;
}

const Pagination = ({ pagination }: Props) => {
  const navegate = useNavigate();
  const location = useLocation();
  const { next, previous, limit, offset, count } = pagination;

  const handlePaginate = (url: string | null) => {
    const { pathname } = location;
    if (url) {
      const { query } = queryString.parseUrl(url);
      const search = `?${queryString.stringify(query)}`;
      navegate({
        search,
        pathname,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="drop-shadow-lg sticky rounded-lg bottom-2 flex items-center justify-between bg-main px-4 py-3 mb-2">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-silver">
            Showing <span className="font-medium">{offset || 1}</span> to{' '}
            <span className="font-medium">{limit}</span> of{' '}
            <span className="font-medium">{count}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePaginate(previous)}
              className="relative cursor-pointer inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* <div
              aria-current="page"
              className="relative cursor-pointer z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-silver focus:z-20"
            >
              1
            </div>
            <div className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20">
              2
            </div>
            <div className="relative cursor-pointer hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20 md:inline-flex">
              3
            </div>
            <span className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver">
              ...
            </span>
            <div className="relative cursor-pointer hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20 md:inline-flex">
              8
            </div>
            <div className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20">
              9
            </div>
            <div className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20">
              10
            </div> */}
            <button
              onClick={() => handlePaginate(next)}
              className="relative cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
