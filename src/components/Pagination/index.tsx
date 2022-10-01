import React, { useEffect, useState } from 'react';
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
  const { next, previous } = pagination;
  const [paginationData, setPaginationData] = useState<any>({
    count: pagination.count || null,
    limit: pagination.limit || null,
    offset: pagination.offset || null,
    currentPage: null,
    totalPages: null,
  });

  useEffect(() => {
    setPaginationData((prev: any) => ({
      ...prev,
      totalPages: Math.ceil(prev.count / prev.limit),
      currentPage: Math.floor(Number(paginationData.offset) / Number(paginationData.limit)) + 1,
    }));
  }, [pagination]);

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
            Showing <span className="font-medium">{Number(paginationData.offset) + 1}</span> to{' '}
            <span className="font-medium">
              {Number(paginationData.currentPage) * Number(paginationData.limit)}
            </span>{' '}
            of <span className="font-medium">{Number(paginationData.count)}</span> results
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
