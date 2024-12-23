import BetUpdate from "../assets/BetUpdate.svg";
import SystemAlert from "../assets/SystemAlert.svg";
import FinancialIcon from "../assets/FinancialIcon.svg";
import UserAction from "../assets/UserAction.svg";
import NewUserReg from "../assets/NewUserReg.svg";
import AccountSuspension from "../assets/AccountSuspension.svg";
import EllipsePoint from "../assets/EllipsePoint.svg";

interface NotificationItemProps {
  icon: string;
  title: string;
  description: string;
  timestamp: string;
  isUnread?: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  icon,
  title,
  description,
  timestamp,
  isUnread = false,
}) => (
  <div className="flex items-center justify-between border-b-2 border-[#E4E7EC] px-5">
    <div className="my-5 flex items-center gap-3">
      <div className="h-[50px] w-[50px]">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-[85%] flex-col gap-2">
        <p className="font-semibold">
          {title}:{" "}
          <span className="text-[14px] font-normal text-[#525252]">
            {description}
          </span>
        </p>
        <p className="text-[#525252]">{timestamp}</p>
      </div>
    </div>
    {isUnread ? (
      <div className="h-2 w-2 rounded-lg bg-[#f97316]"></div>
    ) : (
      <img src={EllipsePoint} alt="Read icon" />
    )}
  </div>
);

const Notification = () => {
  const notifications = [
    {
      icon: BetUpdate,
      title: "Bet Update",
      description: "Bet ID: 1123454 has been Successfully closed",
      timestamp: "14 August 2024, 01:50pm",
      isUnread: true,
    },
    {
      icon: SystemAlert,
      title: "System Alert",
      description:
        "Schedule system maintenance on August 20, 2024, from 02:00 AM to 04:00 AM WAT",
      timestamp: "14 August 2024, 01:50pm",
    },
    {
      icon: FinancialIcon,
      title: "Financial Transaction",
      description:
        "Withdrawal request for $500 from User Name: Chinedu Oke has been approved",
      timestamp: "14 August 2024, 01:50pm",
    },
    {
      icon: UserAction,
      title: "User Action",
      description:
        "User Name: Bolajoko Tolu has submitted a dispute for Bet ID: 234355",
      timestamp: "14 August 2024, 01:50pm",
    },
    {
      icon: NewUserReg,
      title: "New User Registration",
      description: "A new user [Ahmed Idris] has registered",
      timestamp: "14 August 2024, 01:50pm",
    },
    {
      icon: AccountSuspension,
      title: "Account Suspension",
      description: "User [Oke Cynthia] has been suspended",
      timestamp: "14 August 2024, 01:50pm",
    },
  ];

  return (
    <section className="h-full w-full">
      <div className="border-l-[2px] border-[#E4E7EC]">
        <div className="flex items-center justify-between border-b-2 border-[#E4E7EC] px-5 py-3">
          <h1 className="text-xl font-semibold">Notifications</h1>
          <button className="rounded-lg border-2 border-[#E4E7EC] px-3 py-2 text-sm font-semibold">
            Mark As Read
          </button>
        </div>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            icon={notification.icon}
            title={notification.title}
            description={notification.description}
            timestamp={notification.timestamp}
            isUnread={notification.isUnread}
          />
        ))}
      </div>
    </section>
  );
};

export default Notification;
