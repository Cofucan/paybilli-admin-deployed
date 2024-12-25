import { FC } from "react"
import ArrowDownIcon from "./ArrowDownIcon"
import AddIcon from "./AddIcon"

interface PageButtonProps {
  onExportData?: (() => void) | (() => Promise<void>) 
  onAdd?: (() => void) | (() => Promise<void>)
  addText: string
}
const PageButtons: FC<PageButtonProps> = (props) => {
  return (
    <div className='flex justify-end mt-20 my-8 '>
      <div className='flex gap-5 mx-2 lg:mx-0'>
        <button className={`flex gap-2 px-6 py-3 font-semibold border  ${props.onAdd ? "bg-white border-[#4cb8ed] text-[#4cb8ed]" : " bg-[#4cb8ed] text-white border-gray-100"} rounded-xl`} onClick={props.onExportData}>
          <ArrowDownIcon className="size-6" pathClassName={props.onAdd ? "fill-[#4cb8ed]" : "fill-white"} />
          Export Data
        </button>
        {/* Invite User Button */}
        {props.onAdd ? <button
          onClick={props.onAdd}
          className='flex gap-2 px-6 py-3 bg-[#4cb8ed] font-medium border border-gray-100 text-white rounded-xl'
        >
          <AddIcon className="size-6" />
          {props.addText}
        </button> : <></>}
      </div>
    </div>)
}

export default PageButtons