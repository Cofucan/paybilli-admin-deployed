import { FormEvent, useState } from "react";
import SearchIcon from "./SearchIcon.tsx";
import FilterIcon from "./FilterIcon.tsx";

export interface TableHeaderProps {
  onBulkSearch?: () => void;
  onFilter?: () => void;
  placeholder?: string;
  title: string;
  onSearch?: (search: string) => void;
  filterOptions: { header: string, onClick: () => void }[];
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
    <div className="space-y-5 mt-4 text-base">
      <div className="bg-white grid grid-cols-3 border-b-2 border-gray-200 rounded-t-lg items-center px-3">
        <div className="hidden lg:block"><h1 className="text-lg text-black font-medium">{props.title}</h1></div>
        {props.onSearch || props.onFilter ?
          <div className="flex gap-2 lg:gap-0 justify-between col-span-3 lg:col-span-2 items-center py-2">
            {props.onSearch ?
              <div className="flex xl:w-full max-w-xl items-center border border-gray-300 rounded-lg lg:p-2 lg:mx-4">
                <SearchIcon />
                <input
                  className="border-none focus:border-none focus:ring-0 outline-none w-full placeholder:text-xs placeholder:lg:text-lg smd:text-sm text-gray-700 placeholder-gray-950"
                  type="text" placeholder={props.placeholder ?? props.title} onInput={handleSearch} />
              </div> : <></>}
            {props.onFilter ?
              <div
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-3 lg:py-4"
                onClick={props.onFilter}>
                <FilterIcon />
                <button className="text-gray-500 text-xs smd:text-sm">Filter</button>
              </div> : <></>}
          </div> : <></>}
      </div>
      {props.filterOptions.length > 0 || props.onBulkSearch ? <div className={"space-y-6 px-6"}>
          {props.filterOptions.length > 0 ? <ul
            className="flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 mb-1 border gap-2 border-[#58bff2] lg:border-gray-200 rounded-xl py-2 px-4">
            {props.filterOptions.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleClick(index, option);
                  }}
                  className={`px-5 py-3 border-none ${index === headerIndex ? "bg-[#93dbff] rounded-lg text-black bg-opacity-50" : "text-gray-500"}`}>{option.header} </button>
              </li>))}
          </ul> : <></>}
          {props.onBulkSearch ? <button
            className="mb-4 text-sm border-2 px-4 py-2 rounded-lg font-semibold transition-colors bg-white text-[#4cb8ed] border-[#58bff2] inline-block"
            onClick={props.onBulkSearch}>Bulk
            Action
          </button> : <></>}
        </div>
        : <></>}
    </div>
  );
};

export default TableHeader;