import { FC, ReactNode } from "react";

export interface StatisticCardProps {
  icon: string;
  count: ReactNode;
  label: string;
}

const StatisticCard: FC<StatisticCardProps> = (props) => {
  return (
    <div className="flex gap-6 rounded-lg bg-white py-3 shadow-sm w-full">
      <img
        src={props.icon}
        alt={props.label}
        className="ms-5 h-16 w-16 object-cover"
      />
      <div className="flex flex-col">
        <p className="text-[26px] smd:text-[18px] lg:text-[20px]">
          {props.count}
        </p>
        <p className="text-sm text-gray-500">{props.label}</p>
      </div>
    </div>
  );
};
export default StatisticCard;
