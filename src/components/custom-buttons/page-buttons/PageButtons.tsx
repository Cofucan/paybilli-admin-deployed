import { FC } from "react"
import ArrowDownIcon from "./ArrowDownIcon"
import AddIcon from "./AddIcon"
import FormField from "../../form/FormField"

interface PageButtonProps {
  onExportData?: (() => void) | (() => Promise<void>)
  onAdd?: (() => void) | (() => Promise<void>)
  addText: string
}
const PageButtons: FC<PageButtonProps> = (props) => {
  return (
    <div className='flex justify-end mt-20 my-8 '>
      <div className='flex gap-5 mx-2 lg:mx-0'>
        <FormField.Button onClick={props.onExportData} intent={"admin"} themeSize={'36'} themeColor={props.onAdd ? "rounded-blue" : "full-blue"}>  
          <ArrowDownIcon className="size-6" pathClassName={props.onAdd ? "fill-[#4cb8ed]" : "fill-white"} />
          Export Data</FormField.Button>
        {/* Invite User Button */}
        {props.onAdd ? <FormField.Button onClick={props.onAdd} intent={"admin"} themeSize={"36"} themeColor={"full-blue"}>
          <AddIcon className="size-6" />
          {props.addText}
        </FormField.Button> : <></>}
      </div>
    </div>)
}

export default PageButtons