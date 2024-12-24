import { FC, Fragment, ReactNode } from "react";
import StatisticCard, { StatisticCardProps } from "./StatisticCard.tsx";
import StatisticCardLoading from "./StatisticCardLoading.tsx";

interface StatisticListProps {
  isLoading: boolean;
  stats: StatisticCardProps[];
  children?: ReactNode;
  title: string;
}

const StatisticList: FC<StatisticListProps> = (props) => {
  return (
    <div className="lg:w-full">
      <div className="mx-auto mt-14 w-[95%] smd:mt-14 lg:mt-8 xl:mt-4">
        <h1 className="py-10 text-[34px] font-semibold leading-[28px] text-[#1D1D1D] xl:py-5">
          {props.title}
        </h1>
        {props.children}
      </div>
      <div className="mx-3 flex gap-2 xl:ml-8 xl:mr-10">
        {props.stats.map((x, i) => (
          <Fragment key={i}>
            {props.isLoading ? (
              <StatisticCardLoading />
            ) : (
              <StatisticCard {...x} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default StatisticList;
