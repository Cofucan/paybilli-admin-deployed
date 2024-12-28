import TableHeader, { TableHeaderProps } from "./TableHeader.tsx";
import TableContent from "./TableContent.tsx";
import TablePagination from "./TablePagination.tsx";
import { FC } from "react";
import { TableStructure } from "./hooks/useTable.tsx";
import { TablePaginationHook } from "./hooks/useTablePagination.ts";

type TableSectionProps = TableHeaderProps &
  TablePaginationHook & {
    structure: TableStructure;
  };

const TableSection: FC<TableSectionProps> = (props) => {
  return (
    <section className='rounded-t-lg bg-white shadow'>
      <TableHeader {...props} />
      <div className={"p-6 pt-0 overflow-x-auto"}>
        <TableContent {...props} />
        <TablePagination {...props} />
      </div>
    </section>
  );
};
export default TableSection;
