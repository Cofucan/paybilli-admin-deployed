import { useEffect, useMemo, useState } from "react";

export interface TablePaginationConfig {
  totalItems?: number;
  totalPages?: number;
  itemsPerPage: number;
  currentPage: number;
}

export interface TablePaginationState {
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

function useTableTablePagination(
  config: TablePaginationConfig
): TablePaginationHook {
  const [data, setData] = useState<TablePaginationState>({
    totalItems: config.totalItems ?? -1,
    totalPages: config.totalPages ?? Math.ceil((config.totalItems ?? 0) / config.itemsPerPage),
    itemsPerPage: config.itemsPerPage,
    currentPage: config.currentPage,
  });

  // Update state only when config values actually change
  useEffect(() => {
    setData((prev) => {
      const newState = {
        ...prev,
        totalItems: config.totalItems ?? prev.totalItems,
        totalPages: config.totalPages ?? Math.ceil((config.totalItems ?? prev.totalItems) / config.itemsPerPage),
        itemsPerPage: config.itemsPerPage,
        currentPage: config.currentPage,
      };

      // Return new state only if values differ
      return JSON.stringify(prev) !== JSON.stringify(newState) ? newState : prev;
    });
  }, [config.totalItems, config.totalPages, config.itemsPerPage, config.currentPage]);

  // Actions memoized to avoid recreation
  const TablepaginationActions: TablePaginationActions = useMemo(() => ({
    setPageIndex: (index: number) => {
      if (index >= 0 && index <= data.totalPages) {
        setData((prev) => ({ ...prev, currentPage: index }));
      }
    },

    next: () => {
      if (data.currentPage < data.totalPages) {
        setData((prev) => ({ ...prev, currentPage: prev.currentPage + 1 }));
      }
    },

    prev: () => {
      if (data.currentPage > 0) {
        setData((prev) => ({ ...prev, currentPage: prev.currentPage - 1 }));
      }
    },

    hasNext: () => data.currentPage < data.totalPages,

    hasPrev: () => data.currentPage > 0,

    first: () => {
      setData((prev) => ({ ...prev, currentPage: 0 }));
    },

    last: () => {
      setData((prev) => ({ ...prev, currentPage: prev.totalPages }));
    },
  }), [data]);

  return {
    ...data,
    ...TablepaginationActions,
  };
}

export default useTableTablePagination;
