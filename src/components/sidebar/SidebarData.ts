import Home from "./assets/Home.svg";
import HomeGray from "./assets/HomeGray.svg";
import UserWhite from "./assets/UserWhite.svg";
import User from "./assets/user.svg";
import EventWhite from "./assets/eventwhite.svg";
import Event from "./assets/event.svg";
import EscrowWhite from "./assets/escrowwhite.svg";
import Escrow from "./assets/escrow.svg";
import WalletWhite from "./assets/WalletWhite.svg";
import Wallet from "./assets/wallet.svg";
import TransactionWhite from "./assets/transactionWhite.svg";
import Transaction from "./assets/transaction.svg";
import WithdrawWhite from "./assets/withdrawWhite.svg";
import Withdraw from "./assets/withdraw.svg";
import RevenueWhite from "./assets/revenuewhite.svg";
import Revenue from "./assets/revenue.svg";
import SettingsWhite from "./assets/SettingWhite.svg";
import Setting from "./assets/setting.svg";
import Notification from "./assets/notification.svg";
import SupportWhite from "./assets/supportWhite.svg";
import Support from "./assets/support.svg";
import AdminWhite from "./assets/adminWhite.svg";
import Admin from "./assets/admin.svg";
import AuditWhite from "./assets/auditwhite.svg";
import Audit from "./assets/audit.svg";
import { LinkProps } from "@tanstack/react-router";
// Function to determine active state and image
export const getImage = (isActive: boolean, activeImage: string, inactiveImage: string) =>
  isActive ? activeImage : inactiveImage;

// Sidebar items
export const sidebarItems: {
  label: string;
  activeImage: string;
  inactiveImage: string;
  to: Exclude<LinkProps["to"], undefined>;
}[] = [
  {
    label: "Dashboard",
    to: "/",
    activeImage: Home,
    inactiveImage: HomeGray,
  },
  {
    label: "Users",
    to: "/users",
    activeImage: UserWhite,
    inactiveImage: User,
  },
  {
    label: "Events",
    to: "/events",
    activeImage: EventWhite,
    inactiveImage: Event,
  },
  {
    label: "Escrow Bets",
    to: "/escrow",
    activeImage: EscrowWhite,
    inactiveImage: Escrow,
  },
  {
    label: "Wallets",
    to: "/wallet",
    activeImage: WalletWhite,
    inactiveImage: Wallet,
  },
  {
    label: "Transactions",
    to: "/transaction",
    activeImage: TransactionWhite,
    inactiveImage: Transaction,
  },
  {
    label: "Withdrawals",
    to: "/withdrawal",
    activeImage: WithdrawWhite,
    inactiveImage: Withdraw,
  },
  {
    label: "Revenue",
    to: "/revenue",
    activeImage: RevenueWhite,
    inactiveImage: Revenue,
  },
  {
    label: "Settings",
    to: "/setting",
    activeImage: SettingsWhite,
    inactiveImage: Setting,
  },
  {
    label: "Notifications",
    to: "/notification",
    activeImage: Notification,
    inactiveImage: Notification,
  },
  {
    label: "Support",
    to: "/support",
    activeImage: SupportWhite,
    inactiveImage: Support,
  },
  {
    label: "Administrator",
    to: "/administrator",
    activeImage: AdminWhite,
    inactiveImage: Admin,
  },
  {
    label: "Audit Trail",
    to: "/audit",
    activeImage: AuditWhite,
    inactiveImage: Audit,
  },
];
