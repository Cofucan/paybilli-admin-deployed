import { FC } from "react";

interface TableActionDropdownProps {
  id: string;
  data: {
    onClick: ((id: string) => Promise<void>) | ((id: string) => void),
    icon: string,
    title: string
  }[];
}

const TableActionDropdown: FC<TableActionDropdownProps> = (props) => {
  return (
    <ul className="flex flex-col gap-3 border bg-white border-gray-300 rounded-md w-[10vw] h-full px-3 py-2 shadow-md">
      {props.data.map((x, i) => <li key={i}>
        <button onClick={() => x.onClick(props.id)} className={"text-gray-600 text-sm font-medium flex items-center gap-2"}>
          <img src={x.icon} alt={""} className={"block"} />
          <span className={"inline-block"}>{x.title}</span>
        </button>
      </li>)}
    </ul>
  );
};

export default TableActionDropdown;
