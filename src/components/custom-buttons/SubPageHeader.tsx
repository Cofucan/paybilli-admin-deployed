import { Link, LinkProps } from "@tanstack/react-router";
import { FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
interface SubPageHeaderProps extends LinkProps {
  title: string;
}
const SubPageHeader: FC<SubPageHeaderProps> = ({ title, ...props }) => {
  return (
    <div className='mb-10 space-x-4'>
      <Link className='inline-flex items-center gap-2' {...props}>
        <span className='sr-only'>Go Back</span>
        <FaArrowLeftLong className='text-2xl text-black hover:text-black' />
      </Link>
      <h1 className='inline-block text-xl font-semibold leading-[28px] text-[#1D1D1D] smd:text-[34px]'>
        {title}
      </h1>
    </div>
  );
};

export default SubPageHeader;
