import React, { useMemo } from 'react';
import { IPaginationData } from '@/models/states.model';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';

interface Props {
  pagination: IPaginationData;
}

const Pagination = ({ pagination }: Props) => {
  const { perPage, totalItems, currentPage, changePageTo } = pagination;

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / perPage);
  }, [totalItems]);

  return (
    <div className="drop-shadow-lg sticky rounded-lg bottom-2 flex items-center justify-between bg-main px-4 py-3 mb-2">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm text-silver">
            Showing <span className="font-medium">{Number(perPage * (currentPage - 1)) + 1}</span>{' '}
            to <span className="font-medium">{Number(currentPage) * Number(perPage)}</span> of{' '}
            <span className="font-medium">{Number(totalItems)}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => changePageTo(1)}
              className="relative cursor-pointer inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronDoubleLeftIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </button>
            <button
              disabled={currentPage === 1}
              onClick={() => changePageTo(currentPage - 1)}
              className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronLeftIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => changePageTo(currentPage + 1)}
              className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronRightIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => changePageTo(totalPages)}
              className="relative cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronDoubleRightIcon className="h-5 w-5 text-black" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
