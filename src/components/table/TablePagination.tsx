import { FC } from "react";
import { TablePaginationHook } from "./hooks/useTablePagination";

const TablePagination: FC<TablePaginationHook> = (props) => {
  return (
    <div className='mt-4 flex items-center justify-between text-sm'>
      <button
        type='button'
        onClick={props.first}
        className='flex items-center gap-2 rounded-lg border border-gray-400 px-4 py-1 hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/25 disabled:shadow-none'
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 448 512'
          className='inline-block text-xs'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'></path>
        </svg>
        <span className='inline-block'>First</span>
      </button>
      <ul className='flex items-center justify-center gap-4'>
        <li title='Previous Page' aria-disabled={(!props.hasPrev()).valueOf()}>
          <button
            type='button'
            tabIndex={-1}
            disabled={!props.hasPrev()}
            onClick={props.prev}
            className='grid size-8 place-items-center rounded text-sm transition-colors duration-200 hover:bg-black/15 disabled:cursor-not-allowed disabled:text-black/25 disabled:shadow-none disabled:hover:bg-transparent'
          >
            <span role='img' aria-label='left' className='inline-block'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='left'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z'></path>
              </svg>
            </span>
          </button>
        </li>
        {...[-2, -1, 0, 1, 2].map((offset) => {
          const page = props.currentPage + offset;
          if (page < 1 || page > props.totalPages) return <></>;
          return (
            <li
              title={page.toString()}
              className={page === props.currentPage ? "active" : ""}
              tabIndex={0}
              key={page}
            >
              <button
                onClick={() => {
                  props.setPageIndex(page);
                }}
                className={`size-8 rounded border font-semibold transition-colors duration-200 hover:bg-black/15 ${page === props.currentPage ? "border-blue-600 text-blue-600" : "border-transparent"}`}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li title='Next Page' aria-disabled={(!props.hasNext()).valueOf()}>
          <button
            type='button'
            disabled={!props.hasNext()}
            onClick={props.next}
            className='grid size-8 place-items-center rounded text-sm transition-colors duration-200 hover:bg-black/15 disabled:cursor-not-allowed disabled:text-black/25 disabled:shadow-none disabled:hover:bg-transparent'
          >
            <span role='img' aria-label='right'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='right'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z'></path>
              </svg>
            </span>
          </button>
        </li>
      </ul>
      <button
        type='button'
        disabled={!props.hasNext()}
        onClick={props.last}
        className='flex items-center gap-2 rounded-lg border border-gray-400 px-4 py-1 hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:bg-black/5 disabled:text-black/25 disabled:shadow-none'
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 448 512'
          className='inline-block text-xs'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'></path>
        </svg>
        <span className='inline-block'>Last</span>
      </button>
    </div>
  );
};

export default TablePagination;
