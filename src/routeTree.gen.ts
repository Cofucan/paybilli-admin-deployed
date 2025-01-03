/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as NoAuthImport } from "./routes/_no-auth";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AuthIndexImport } from "./routes/_auth/index";
import { Route as AuthWithdrawalImport } from "./routes/_auth/withdrawal";
import { Route as AuthWalletImport } from "./routes/_auth/wallet";
import { Route as AuthTransactionImport } from "./routes/_auth/transaction";
import { Route as AuthSupportImport } from "./routes/_auth/support";
import { Route as AuthRevenueImport } from "./routes/_auth/revenue";
import { Route as AuthNotificationImport } from "./routes/_auth/notification";
import { Route as AuthEscrowImport } from "./routes/_auth/escrow";
import { Route as AuthAuditImport } from "./routes/_auth/audit";
import { Route as AuthAdministratorImport } from "./routes/_auth/administrator";
import { Route as AuthUsersIndexImport } from "./routes/_auth/users/index";
import { Route as AuthSettingIndexImport } from "./routes/_auth/setting/index";
import { Route as AuthEventsIndexImport } from "./routes/_auth/events/index";
import { Route as NoAuthAccountResetPasswordImport } from "./routes/_no-auth/account.reset-password";
import { Route as NoAuthAccountLoginImport } from "./routes/_no-auth/account.login";
import { Route as AuthSettingActivityLogImport } from "./routes/_auth/setting/activity-log";
import { Route as AuthEventsCreateImport } from "./routes/_auth/events/create";
import { Route as AuthEventsEventIdImport } from "./routes/_auth/events/$eventId";
import { Route as AuthUsersUserIdIndexImport } from "./routes/_auth/users/$userId.index";
import { Route as AuthUsersUserIdEditImport } from "./routes/_auth/users/$userId.edit";

// Create/Update Routes

const NoAuthRoute = NoAuthImport.update({
  id: "/_no-auth",
  getParentRoute: () => rootRoute,
} as any);

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any);

const AuthIndexRoute = AuthIndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => AuthRoute,
} as any);

const AuthWithdrawalRoute = AuthWithdrawalImport.update({
  id: "/withdrawal",
  path: "/withdrawal",
  getParentRoute: () => AuthRoute,
} as any);

const AuthWalletRoute = AuthWalletImport.update({
  id: "/wallet",
  path: "/wallet",
  getParentRoute: () => AuthRoute,
} as any);

const AuthTransactionRoute = AuthTransactionImport.update({
  id: "/transaction",
  path: "/transaction",
  getParentRoute: () => AuthRoute,
} as any);

const AuthSupportRoute = AuthSupportImport.update({
  id: "/support",
  path: "/support",
  getParentRoute: () => AuthRoute,
} as any);

const AuthRevenueRoute = AuthRevenueImport.update({
  id: "/revenue",
  path: "/revenue",
  getParentRoute: () => AuthRoute,
} as any);

const AuthNotificationRoute = AuthNotificationImport.update({
  id: "/notification",
  path: "/notification",
  getParentRoute: () => AuthRoute,
} as any);

const AuthEscrowRoute = AuthEscrowImport.update({
  id: "/escrow",
  path: "/escrow",
  getParentRoute: () => AuthRoute,
} as any);

const AuthAuditRoute = AuthAuditImport.update({
  id: "/audit",
  path: "/audit",
  getParentRoute: () => AuthRoute,
} as any);

const AuthAdministratorRoute = AuthAdministratorImport.update({
  id: "/administrator",
  path: "/administrator",
  getParentRoute: () => AuthRoute,
} as any);

const AuthUsersIndexRoute = AuthUsersIndexImport.update({
  id: "/users/",
  path: "/users/",
  getParentRoute: () => AuthRoute,
} as any);

const AuthSettingIndexRoute = AuthSettingIndexImport.update({
  id: "/setting/",
  path: "/setting/",
  getParentRoute: () => AuthRoute,
} as any);

const AuthEventsIndexRoute = AuthEventsIndexImport.update({
  id: "/events/",
  path: "/events/",
  getParentRoute: () => AuthRoute,
} as any);

const NoAuthAccountResetPasswordRoute = NoAuthAccountResetPasswordImport.update({
  id: "/account/reset-password",
  path: "/account/reset-password",
  getParentRoute: () => NoAuthRoute,
} as any);

const NoAuthAccountLoginRoute = NoAuthAccountLoginImport.update({
  id: "/account/login",
  path: "/account/login",
  getParentRoute: () => NoAuthRoute,
} as any);

const AuthSettingActivityLogRoute = AuthSettingActivityLogImport.update({
  id: "/setting/activity-log",
  path: "/setting/activity-log",
  getParentRoute: () => AuthRoute,
} as any);

const AuthEventsCreateRoute = AuthEventsCreateImport.update({
  id: "/events/create",
  path: "/events/create",
  getParentRoute: () => AuthRoute,
} as any);

const AuthEventsEventIdRoute = AuthEventsEventIdImport.update({
  id: "/events/$eventId",
  path: "/events/$eventId",
  getParentRoute: () => AuthRoute,
} as any);

const AuthUsersUserIdIndexRoute = AuthUsersUserIdIndexImport.update({
  id: "/users/$userId/",
  path: "/users/$userId/",
  getParentRoute: () => AuthRoute,
} as any);

const AuthUsersUserIdEditRoute = AuthUsersUserIdEditImport.update({
  id: "/users/$userId/edit",
  path: "/users/$userId/edit",
  getParentRoute: () => AuthRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_auth": {
      id: "/_auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    "/_no-auth": {
      id: "/_no-auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof NoAuthImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth/administrator": {
      id: "/_auth/administrator";
      path: "/administrator";
      fullPath: "/administrator";
      preLoaderRoute: typeof AuthAdministratorImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/audit": {
      id: "/_auth/audit";
      path: "/audit";
      fullPath: "/audit";
      preLoaderRoute: typeof AuthAuditImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/escrow": {
      id: "/_auth/escrow";
      path: "/escrow";
      fullPath: "/escrow";
      preLoaderRoute: typeof AuthEscrowImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/notification": {
      id: "/_auth/notification";
      path: "/notification";
      fullPath: "/notification";
      preLoaderRoute: typeof AuthNotificationImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/revenue": {
      id: "/_auth/revenue";
      path: "/revenue";
      fullPath: "/revenue";
      preLoaderRoute: typeof AuthRevenueImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/support": {
      id: "/_auth/support";
      path: "/support";
      fullPath: "/support";
      preLoaderRoute: typeof AuthSupportImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/transaction": {
      id: "/_auth/transaction";
      path: "/transaction";
      fullPath: "/transaction";
      preLoaderRoute: typeof AuthTransactionImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/wallet": {
      id: "/_auth/wallet";
      path: "/wallet";
      fullPath: "/wallet";
      preLoaderRoute: typeof AuthWalletImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/withdrawal": {
      id: "/_auth/withdrawal";
      path: "/withdrawal";
      fullPath: "/withdrawal";
      preLoaderRoute: typeof AuthWithdrawalImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/": {
      id: "/_auth/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof AuthIndexImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/events/$eventId": {
      id: "/_auth/events/$eventId";
      path: "/events/$eventId";
      fullPath: "/events/$eventId";
      preLoaderRoute: typeof AuthEventsEventIdImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/events/create": {
      id: "/_auth/events/create";
      path: "/events/create";
      fullPath: "/events/create";
      preLoaderRoute: typeof AuthEventsCreateImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/setting/activity-log": {
      id: "/_auth/setting/activity-log";
      path: "/setting/activity-log";
      fullPath: "/setting/activity-log";
      preLoaderRoute: typeof AuthSettingActivityLogImport;
      parentRoute: typeof AuthImport;
    };
    "/_no-auth/account/login": {
      id: "/_no-auth/account/login";
      path: "/account/login";
      fullPath: "/account/login";
      preLoaderRoute: typeof NoAuthAccountLoginImport;
      parentRoute: typeof NoAuthImport;
    };
    "/_no-auth/account/reset-password": {
      id: "/_no-auth/account/reset-password";
      path: "/account/reset-password";
      fullPath: "/account/reset-password";
      preLoaderRoute: typeof NoAuthAccountResetPasswordImport;
      parentRoute: typeof NoAuthImport;
    };
    "/_auth/events/": {
      id: "/_auth/events/";
      path: "/events";
      fullPath: "/events";
      preLoaderRoute: typeof AuthEventsIndexImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/setting/": {
      id: "/_auth/setting/";
      path: "/setting";
      fullPath: "/setting";
      preLoaderRoute: typeof AuthSettingIndexImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/users/": {
      id: "/_auth/users/";
      path: "/users";
      fullPath: "/users";
      preLoaderRoute: typeof AuthUsersIndexImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/users/$userId/edit": {
      id: "/_auth/users/$userId/edit";
      path: "/users/$userId/edit";
      fullPath: "/users/$userId/edit";
      preLoaderRoute: typeof AuthUsersUserIdEditImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/users/$userId/": {
      id: "/_auth/users/$userId/";
      path: "/users/$userId";
      fullPath: "/users/$userId";
      preLoaderRoute: typeof AuthUsersUserIdIndexImport;
      parentRoute: typeof AuthImport;
    };
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthAdministratorRoute: typeof AuthAdministratorRoute;
  AuthAuditRoute: typeof AuthAuditRoute;
  AuthEscrowRoute: typeof AuthEscrowRoute;
  AuthNotificationRoute: typeof AuthNotificationRoute;
  AuthRevenueRoute: typeof AuthRevenueRoute;
  AuthSupportRoute: typeof AuthSupportRoute;
  AuthTransactionRoute: typeof AuthTransactionRoute;
  AuthWalletRoute: typeof AuthWalletRoute;
  AuthWithdrawalRoute: typeof AuthWithdrawalRoute;
  AuthIndexRoute: typeof AuthIndexRoute;
  AuthEventsEventIdRoute: typeof AuthEventsEventIdRoute;
  AuthEventsCreateRoute: typeof AuthEventsCreateRoute;
  AuthSettingActivityLogRoute: typeof AuthSettingActivityLogRoute;
  AuthEventsIndexRoute: typeof AuthEventsIndexRoute;
  AuthSettingIndexRoute: typeof AuthSettingIndexRoute;
  AuthUsersIndexRoute: typeof AuthUsersIndexRoute;
  AuthUsersUserIdEditRoute: typeof AuthUsersUserIdEditRoute;
  AuthUsersUserIdIndexRoute: typeof AuthUsersUserIdIndexRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthAdministratorRoute: AuthAdministratorRoute,
  AuthAuditRoute: AuthAuditRoute,
  AuthEscrowRoute: AuthEscrowRoute,
  AuthNotificationRoute: AuthNotificationRoute,
  AuthRevenueRoute: AuthRevenueRoute,
  AuthSupportRoute: AuthSupportRoute,
  AuthTransactionRoute: AuthTransactionRoute,
  AuthWalletRoute: AuthWalletRoute,
  AuthWithdrawalRoute: AuthWithdrawalRoute,
  AuthIndexRoute: AuthIndexRoute,
  AuthEventsEventIdRoute: AuthEventsEventIdRoute,
  AuthEventsCreateRoute: AuthEventsCreateRoute,
  AuthSettingActivityLogRoute: AuthSettingActivityLogRoute,
  AuthEventsIndexRoute: AuthEventsIndexRoute,
  AuthSettingIndexRoute: AuthSettingIndexRoute,
  AuthUsersIndexRoute: AuthUsersIndexRoute,
  AuthUsersUserIdEditRoute: AuthUsersUserIdEditRoute,
  AuthUsersUserIdIndexRoute: AuthUsersUserIdIndexRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

interface NoAuthRouteChildren {
  NoAuthAccountLoginRoute: typeof NoAuthAccountLoginRoute;
  NoAuthAccountResetPasswordRoute: typeof NoAuthAccountResetPasswordRoute;
}

const NoAuthRouteChildren: NoAuthRouteChildren = {
  NoAuthAccountLoginRoute: NoAuthAccountLoginRoute,
  NoAuthAccountResetPasswordRoute: NoAuthAccountResetPasswordRoute,
};

const NoAuthRouteWithChildren = NoAuthRoute._addFileChildren(NoAuthRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof NoAuthRouteWithChildren;
  "/administrator": typeof AuthAdministratorRoute;
  "/audit": typeof AuthAuditRoute;
  "/escrow": typeof AuthEscrowRoute;
  "/notification": typeof AuthNotificationRoute;
  "/revenue": typeof AuthRevenueRoute;
  "/support": typeof AuthSupportRoute;
  "/transaction": typeof AuthTransactionRoute;
  "/wallet": typeof AuthWalletRoute;
  "/withdrawal": typeof AuthWithdrawalRoute;
  "/": typeof AuthIndexRoute;
  "/events/$eventId": typeof AuthEventsEventIdRoute;
  "/events/create": typeof AuthEventsCreateRoute;
  "/setting/activity-log": typeof AuthSettingActivityLogRoute;
  "/account/login": typeof NoAuthAccountLoginRoute;
  "/account/reset-password": typeof NoAuthAccountResetPasswordRoute;
  "/events": typeof AuthEventsIndexRoute;
  "/setting": typeof AuthSettingIndexRoute;
  "/users": typeof AuthUsersIndexRoute;
  "/users/$userId/edit": typeof AuthUsersUserIdEditRoute;
  "/users/$userId": typeof AuthUsersUserIdIndexRoute;
}

export interface FileRoutesByTo {
  "": typeof NoAuthRouteWithChildren;
  "/administrator": typeof AuthAdministratorRoute;
  "/audit": typeof AuthAuditRoute;
  "/escrow": typeof AuthEscrowRoute;
  "/notification": typeof AuthNotificationRoute;
  "/revenue": typeof AuthRevenueRoute;
  "/support": typeof AuthSupportRoute;
  "/transaction": typeof AuthTransactionRoute;
  "/wallet": typeof AuthWalletRoute;
  "/withdrawal": typeof AuthWithdrawalRoute;
  "/": typeof AuthIndexRoute;
  "/events/$eventId": typeof AuthEventsEventIdRoute;
  "/events/create": typeof AuthEventsCreateRoute;
  "/setting/activity-log": typeof AuthSettingActivityLogRoute;
  "/account/login": typeof NoAuthAccountLoginRoute;
  "/account/reset-password": typeof NoAuthAccountResetPasswordRoute;
  "/events": typeof AuthEventsIndexRoute;
  "/setting": typeof AuthSettingIndexRoute;
  "/users": typeof AuthUsersIndexRoute;
  "/users/$userId/edit": typeof AuthUsersUserIdEditRoute;
  "/users/$userId": typeof AuthUsersUserIdIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_auth": typeof AuthRouteWithChildren;
  "/_no-auth": typeof NoAuthRouteWithChildren;
  "/_auth/administrator": typeof AuthAdministratorRoute;
  "/_auth/audit": typeof AuthAuditRoute;
  "/_auth/escrow": typeof AuthEscrowRoute;
  "/_auth/notification": typeof AuthNotificationRoute;
  "/_auth/revenue": typeof AuthRevenueRoute;
  "/_auth/support": typeof AuthSupportRoute;
  "/_auth/transaction": typeof AuthTransactionRoute;
  "/_auth/wallet": typeof AuthWalletRoute;
  "/_auth/withdrawal": typeof AuthWithdrawalRoute;
  "/_auth/": typeof AuthIndexRoute;
  "/_auth/events/$eventId": typeof AuthEventsEventIdRoute;
  "/_auth/events/create": typeof AuthEventsCreateRoute;
  "/_auth/setting/activity-log": typeof AuthSettingActivityLogRoute;
  "/_no-auth/account/login": typeof NoAuthAccountLoginRoute;
  "/_no-auth/account/reset-password": typeof NoAuthAccountResetPasswordRoute;
  "/_auth/events/": typeof AuthEventsIndexRoute;
  "/_auth/setting/": typeof AuthSettingIndexRoute;
  "/_auth/users/": typeof AuthUsersIndexRoute;
  "/_auth/users/$userId/edit": typeof AuthUsersUserIdEditRoute;
  "/_auth/users/$userId/": typeof AuthUsersUserIdIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | ""
    | "/administrator"
    | "/audit"
    | "/escrow"
    | "/notification"
    | "/revenue"
    | "/support"
    | "/transaction"
    | "/wallet"
    | "/withdrawal"
    | "/"
    | "/events/$eventId"
    | "/events/create"
    | "/setting/activity-log"
    | "/account/login"
    | "/account/reset-password"
    | "/events"
    | "/setting"
    | "/users"
    | "/users/$userId/edit"
    | "/users/$userId";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | ""
    | "/administrator"
    | "/audit"
    | "/escrow"
    | "/notification"
    | "/revenue"
    | "/support"
    | "/transaction"
    | "/wallet"
    | "/withdrawal"
    | "/"
    | "/events/$eventId"
    | "/events/create"
    | "/setting/activity-log"
    | "/account/login"
    | "/account/reset-password"
    | "/events"
    | "/setting"
    | "/users"
    | "/users/$userId/edit"
    | "/users/$userId";
  id:
    | "__root__"
    | "/_auth"
    | "/_no-auth"
    | "/_auth/administrator"
    | "/_auth/audit"
    | "/_auth/escrow"
    | "/_auth/notification"
    | "/_auth/revenue"
    | "/_auth/support"
    | "/_auth/transaction"
    | "/_auth/wallet"
    | "/_auth/withdrawal"
    | "/_auth/"
    | "/_auth/events/$eventId"
    | "/_auth/events/create"
    | "/_auth/setting/activity-log"
    | "/_no-auth/account/login"
    | "/_no-auth/account/reset-password"
    | "/_auth/events/"
    | "/_auth/setting/"
    | "/_auth/users/"
    | "/_auth/users/$userId/edit"
    | "/_auth/users/$userId/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren;
  NoAuthRoute: typeof NoAuthRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  NoAuthRoute: NoAuthRouteWithChildren,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_no-auth"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/administrator",
        "/_auth/audit",
        "/_auth/escrow",
        "/_auth/notification",
        "/_auth/revenue",
        "/_auth/support",
        "/_auth/transaction",
        "/_auth/wallet",
        "/_auth/withdrawal",
        "/_auth/",
        "/_auth/events/$eventId",
        "/_auth/events/create",
        "/_auth/setting/activity-log",
        "/_auth/events/",
        "/_auth/setting/",
        "/_auth/users/",
        "/_auth/users/$userId/edit",
        "/_auth/users/$userId/"
      ]
    },
    "/_no-auth": {
      "filePath": "_no-auth.tsx",
      "children": [
        "/_no-auth/account/login",
        "/_no-auth/account/reset-password"
      ]
    },
    "/_auth/administrator": {
      "filePath": "_auth/administrator.tsx",
      "parent": "/_auth"
    },
    "/_auth/audit": {
      "filePath": "_auth/audit.tsx",
      "parent": "/_auth"
    },
    "/_auth/escrow": {
      "filePath": "_auth/escrow.tsx",
      "parent": "/_auth"
    },
    "/_auth/notification": {
      "filePath": "_auth/notification.tsx",
      "parent": "/_auth"
    },
    "/_auth/revenue": {
      "filePath": "_auth/revenue.tsx",
      "parent": "/_auth"
    },
    "/_auth/support": {
      "filePath": "_auth/support.tsx",
      "parent": "/_auth"
    },
    "/_auth/transaction": {
      "filePath": "_auth/transaction.tsx",
      "parent": "/_auth"
    },
    "/_auth/wallet": {
      "filePath": "_auth/wallet.tsx",
      "parent": "/_auth"
    },
    "/_auth/withdrawal": {
      "filePath": "_auth/withdrawal.tsx",
      "parent": "/_auth"
    },
    "/_auth/": {
      "filePath": "_auth/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/events/$eventId": {
      "filePath": "_auth/events/$eventId.tsx",
      "parent": "/_auth"
    },
    "/_auth/events/create": {
      "filePath": "_auth/events/create.tsx",
      "parent": "/_auth"
    },
    "/_auth/setting/activity-log": {
      "filePath": "_auth/setting/activity-log.tsx",
      "parent": "/_auth"
    },
    "/_no-auth/account/login": {
      "filePath": "_no-auth/account.login.tsx",
      "parent": "/_no-auth"
    },
    "/_no-auth/account/reset-password": {
      "filePath": "_no-auth/account.reset-password.tsx",
      "parent": "/_no-auth"
    },
    "/_auth/events/": {
      "filePath": "_auth/events/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/setting/": {
      "filePath": "_auth/setting/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/users/": {
      "filePath": "_auth/users/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/users/$userId/edit": {
      "filePath": "_auth/users/$userId.edit.tsx",
      "parent": "/_auth"
    },
    "/_auth/users/$userId/": {
      "filePath": "_auth/users/$userId.index.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
