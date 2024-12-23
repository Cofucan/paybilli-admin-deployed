import { FormEvent, useState } from 'react'

export interface TableHeaderProps {
    title: string
    onSearch: (search: string) => void
    filterOptions: { header: string, onClick: () => void }[]
}
const TableHeader = (props: TableHeaderProps) => {
    const handleSearch = (e: FormEvent<HTMLInputElement>) => { props.onSearch(e.currentTarget.value); }
    const [headerIndex, setHeaderIndex] = useState(0)
    return (
        <div className='space-y-4 my-4'>
            <div className='flex gap-4 items-center'>
                <h2 className='text-xl font-semibold mr-auto'>{props.title}</h2>
                <input type="search" placeholder="Search..." onInput={handleSearch} className='border rounded w-1/2' />
                <button className='rounded border px-5 py-2 '>Filter </button>
            </div>
            {props.filterOptions.length > 0 ? <ul className='flex gap-6 '>
                {props.filterOptions.map((option, index) => <li onClick={() => { setHeaderIndex(index); option.onClick() }} key={index} className={`px-5 py-2 rounded cursor-pointer ${index === headerIndex ? "bg-slate-800 text-white" : "border-slate-800"}`}>{option.header}</li>)}
            </ul> : <></>}
            <div>
                <button className='bg-slate-700 text-white rounded border px-5 py-2 '>Bulk Actions</button>
                
            </div>
        </div>
    )
}

export default TableHeader