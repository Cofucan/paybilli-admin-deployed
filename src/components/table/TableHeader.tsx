import { FormEvent, useState } from "react";
import SearchIcon from "./SearchIcon.tsx";
import FilterIcon from "./FilterIcon.tsx";

export interface TableHeaderProps {
  onBulkSearch?: () => void;
  onFilter?: () => void;
  placeholder?: string;
  title: string;
  onSearch?: (search: string) => void;
  filterOptions: { header: string; onClick: () => void }[];
}

const TableHeader = (props: TableHeaderProps) => {
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    if (props.onSearch) {
      props.onSearch(e.currentTarget.value);
    }
  };
  const [headerIndex, setHeaderIndex] = useState(0);

  function handleClick(index: number, option: { onClick: () => void }) {
    setHeaderIndex(index);
    option.onClick();
  }

  return (
    <div className='mt-4 space-y-5 text-base'>
      <div className='grid grid-cols-3 items-center rounded-t-lg border-b-2 border-gray-200 bg-white px-3'>
        <div className='hidden lg:block'>
          <h1 className='text-lg font-medium text-black'>{props.title}</h1>
        </div>
        {props.onSearch || props.onFilter ? (
          <div className='col-span-3 flex items-center justify-between gap-2 py-2 lg:col-span-2 lg:gap-0'>
            {props.onSearch ? (
              <div className='flex max-w-xl items-center rounded-lg border border-gray-300 lg:mx-4 lg:p-2 xl:w-full'>
                <SearchIcon />
                <input
                  className='w-full border-none text-gray-700 placeholder-gray-950 outline-none placeholder:text-xs focus:border-none focus:ring-0 smd:text-sm placeholder:lg:text-lg'
                  type='text'
                  placeholder={props.placeholder ?? props.title}
                  onInput={handleSearch}
                />
              </div>
            ) : (
              <></>
            )}
            {props.onFilter ? (
              <div
                className='flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 lg:py-4'
                onClick={props.onFilter}
              >
                <FilterIcon />
                <button className='text-xs text-gray-500 smd:text-sm'>Filter</button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      {props.filterOptions.length > 0 || props.onBulkSearch ? (
        <div className={"space-y-6 px-6"}>
          {props.filterOptions.length > 0 ? (
            <ul className='mb-1 flex flex-col items-center justify-between gap-2 rounded-xl border border-[#58bff2] px-4 py-2 text-sm text-gray-500 lg:flex-row lg:border-gray-200'>
              {props.filterOptions.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      handleClick(index, option);
                    }}
                    className={`border-none px-5 py-3 ${index === headerIndex ? "rounded-lg bg-[#93dbff] bg-opacity-50 text-black" : "text-gray-500"}`}
                  >
                    {option.header}{" "}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )}
          {props.onBulkSearch ? (
            <button
              className='mb-4 inline-block rounded-lg border-2 border-[#58bff2] bg-white px-4 py-2 text-sm font-semibold text-[#4cb8ed] transition-colors'
              onClick={props.onBulkSearch}
            >
              Bulk Action
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TableHeader;
