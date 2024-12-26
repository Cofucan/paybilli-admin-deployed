export interface TableActionDropdownProps<T> {
  id: T;
  data: {
    onClick: (id: T) => Promise<void> | void;
    icon: string;
    title: string;
  }[];
}

const TableActionDropdown = <T,>(props: TableActionDropdownProps<T>) => {
  return (
    <ul className='flex h-full w-[10vw] flex-col gap-3 rounded-md border border-gray-300 bg-white px-3 py-2 shadow-md'>
      {props.data.map((x, i) => (
        <li key={i}>
          <button
            onClick={() => x.onClick(props.id)}
            className={"flex items-center gap-2 text-sm font-medium text-gray-600"}
          >
            <img src={x.icon} alt={""} className={"block"} />
            <span className={"inline-block"}>{x.title}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TableActionDropdown;
