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

  const handleChangePage = (pag: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    changePageTo(pag);
  };

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / perPage);
  }, [totalItems]);

  const itemRangeShowing = useMemo(() => {
    let from = Number(perPage * (currentPage - 1)) + 1;
    let to = Number(currentPage) * Number(perPage);

    if (to > totalItems) to = totalItems;

    return {
      from,
      to,
    };
  }, [currentPage, totalItems]);

  const rangePages = useMemo(() => {
    let prevPages = Array.from(Array(currentPage).keys())
      .filter((num) => num > 0)
      .map((num) => ({ number: num }))
      .reverse()
      .slice(0, currentPage === totalPages ? 4 : currentPage === totalPages - 1 ? 3 : 2)
      .reverse();

    let nextPages: any = Array.from(Array(totalPages + 1).keys())
      .filter((num) => num > currentPage)
      .map((num) => ({ number: num }))
      .slice(0, currentPage === 1 ? 4 : currentPage === 2 ? 3 : 2);

    return [...prevPages, { number: currentPage }, ...nextPages];
  }, [currentPage, totalPages]);

  return (
    <div className="drop-shadow-lg sticky rounded-lg bottom-3 flex items-center justify-between bg-black px-4 py-3 mb-3">
      <div className="flex flex-1 items-center justify-center md:justify-between">
        <div className="hidden md:block">
          <p className="text-sm text-silver">
            Showing <span className="font-medium">{itemRangeShowing.from}</span> to{' '}
            <span className="font-medium">{itemRangeShowing.to}</span> of{' '}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => handleChangePage(1)}
              className="relative cursor-pointer inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-mid" aria-hidden="true" />
            </button>
            <button
              disabled={currentPage === 1}
              onClick={() => handleChangePage(currentPage - 1)}
              className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronLeftIcon className="h-5 w-5 text-gray-mid" aria-hidden="true" />
            </button>

            {rangePages.map((page) => (
              <button
                key={page.number}
                disabled={currentPage === page.number}
                onClick={() => handleChangePage(page.number)}
                className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
              >
                <p
                  className={`w-5 ${currentPage === page.number ? 'text-black' : 'text-gray-mid'}`}
                >
                  {page.number}
                </p>
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handleChangePage(currentPage + 1)}
              className="relative cursor-pointer inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronRightIcon className="h-5 w-5 text-gray-mid" aria-hidden="true" />
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handleChangePage(totalPages)}
              className="relative cursor-pointer inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-silver hover:bg-gray-50 focus:z-20"
            >
              <ChevronDoubleRightIcon className="h-5 w-5 text-gray-mid" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
