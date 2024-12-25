import { useEffect, useState } from "react";

export interface TablePaginationConfig {
  totalItems?: number;
  totalPages?: number;
  itemsPerPage?: number;
  currentPage?: number;
  initialPage?: number;
}

export interface TablePaginationState {
  initialPage: number
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
  currentPage: number;
}

export interface TablePaginationActions {
  setPageIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
  hasNext: () => boolean;
  hasPrev: () => boolean;
  first: () => void;
  last: () => void;
}

export type TablePaginationHook = TablePaginationState & TablePaginationActions;

/**
 * Custom hook for managing Tablepagination state and actions
 * @param config Initial Tablepagination configuration
 * @returns Combined Tablepagination state and actions
 */
function useTablePagination(config: TablePaginationConfig): TablePaginationHook {
  const initialPage = config.initialPage ?? 1;
  const [totalItems, setTotalItems] = useState(config.totalItems ?? -1);
  const [itemsPerPage, setItemsPerPage] = useState(config.itemsPerPage ?? 10);
  const [totalPages, setTotalPages] = useState(config.totalPages ?? -1);
  const [currentPage, setCurrentPage] = useState(config.currentPage ?? initialPage);

  useEffect(() => {
    setTotalItems(config.totalItems ?? -1);
  }, [config.totalItems]);
  useEffect(() => {
    setItemsPerPage(config.itemsPerPage ?? 10);
  }, [config.itemsPerPage]);
  useEffect(() => {
    setTotalPages(config.totalPages ? config.totalPages + initialPage - 1 : -1);
  }, [config.totalPages, initialPage]);
  useEffect(() => {
    setCurrentPage(config.currentPage ?? initialPage);
  }, [config.currentPage, initialPage]);

  useEffect(() => {
    if (totalPages === -1 && totalItems !== -1) {
      setTotalPages(Math.ceil(totalItems / itemsPerPage) - 1 + initialPage);
    }
  }, [totalPages, itemsPerPage, totalItems, initialPage]);
  useEffect(() => {
    if (totalItems === -1 && totalPages !== -1) {
      setTotalItems(totalPages * itemsPerPage);
    }
  }, [totalItems, totalPages, itemsPerPage]);

  const setPageIndex = (index: number) => {
    setCurrentPage(Math.max(1, Math.min(index, totalPages)));
  };

  const next = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const prev = () => {
    setCurrentPage(Math.max(currentPage - 1, initialPage));
  };
  

  const hasNext = () => currentPage < totalPages;
  const hasPrev = () => currentPage > initialPage;

  const first = () => { setPageIndex(initialPage); };
  const last = () => { setPageIndex(totalPages); };

  return {
    initialPage,
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    setPageIndex,
    next,
    prev,
    hasNext,
    hasPrev,
    first,
    last,
  };
}

export default useTablePagination;
