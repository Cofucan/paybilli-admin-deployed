import { FC } from 'react'
import { TableStructure } from './hooks/useTable'

const TableContent: FC<{
    structure: TableStructure
}> = ({ structure }) => {
    return (
        <table className="w-full text-sm">
            <thead>
                <tr>{structure.headers.map(x => <th key={x.id} className="text-center p-4">{x.content}</th>)}</tr>
            </thead>
            <tbody>
                {structure.rows.map((rows, i) => <tr key={i}>{rows.map(x => <td key={x.id} className='text-center p-2'>{x.content}</td>)}</tr>)}
            </tbody>
        </table>)
}

export default TableContent