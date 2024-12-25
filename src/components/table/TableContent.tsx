import { FC } from 'react'
import { TableStructure } from './hooks/useTable'

const TableContent: FC<{
    structure: TableStructure
}> = ({ structure }) => {
    return (
        <table className="w-full text-sm table-striped">
            <thead>
                <tr>{structure.headers.map(x => <th key={x.id} className="p-4 text-black/80 text-left font-medium relative table-header-border">{x.content}</th>)}</tr>
            </thead>
            <tbody>
                {structure.rows.map((rows, i) => <tr key={i}>{rows.map(x => <td key={x.id} className='p-2 text-black/80'>{x.content}</td>)}</tr>)}
            </tbody>
        </table>)
}

export default TableContent