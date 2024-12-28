import { FC, ReactNode } from "react";

export interface StatisticCardProps {
  icon: string;
  count: ReactNode;
  label: string;
}

const StatisticCard: FC<StatisticCardProps> = (props) => {
  return (
    <div className='flex w-full gap-6 rounded-lg bg-white py-3 shadow-sm'>
      <img src={props.icon} alt={props.label} className='ms-2 size-14 object-cover' />
      <div className='flex flex-col'>
        <p className='text-[26px] smd:text-[18px] lg:text-[20px]'>{props.count}</p>
        <p className='text-sm text-gray-500'>{props.label}</p>
      </div>
    </div>
  );
};
export default StatisticCard;
