import audit from "../../assets/sidebar/audit.svg";
import fees from "../../assets/sidebar/fees.svg";
import prefe from "../../assets/sidebar/preference.svg";
import report from "../../assets/sidebar/report.svg";
import settlement from "../../assets/sidebar/settlement.svg";
import service from "../../assets/sidebar/services.svg";
import service_amount from "../../assets/sidebar/service_amount.svg";
import organization from "../../assets/sidebar/organization.svg";
import loan from "../../assets/sidebar/loan.svg";
import savings from "../../assets/sidebar/savings.svg";
import coins from "../../assets/sidebar/coins.svg";
import transactions from "../../assets/sidebar/transactions.svg";
import decision from "../../assets/sidebar/decision.svg";
import piggy from "../../assets/sidebar/piggy.svg";
import whitelist from "../../assets/sidebar/whitelist.svg";
import karma from "../../assets/sidebar/karma.svg";
import guard from "../../assets/sidebar/gaurd.svg";
import sack from "../../assets/sidebar/sack.svg";
import users from "../../assets/sidebar/users.svg";

export const route = [
  {
    title: "customers",
    routes: [
      {
        name: "users",
        link: "/users",
        icon: users,
        iconActive: users,
      },
      {
        name: "guarantors",
        link: "/",
        icon: guard,
        iconActive: guard,
      },
      {
        name: "loans",
        link: "/",
        icon: sack,
        iconActive: sack,
      },
      {
        name: "decision models",
        link: "/",
        icon: decision,
        iconActive: decision,
      },
      {
        name: "savings",
        link: "/",
        icon: piggy,
        iconActive: piggy,
      },
      {
        name: "loan requests",
        link: "/",
        icon: loan,
        iconActive: loan,
      },
      {
        name: "whitelist",
        link: "/",
        icon: whitelist,
        iconActive: whitelist,
      },
      {
        name: "karma",
        link: "/",
        icon: karma,
        iconActive: karma,
      },
    ],
  },
  {
    title: "BUSINESSES",
    routes: [
      {
        name: "Organization",
        link: "/",
        icon: organization,
        iconActive: organization,
      },
      {
        name: "Loan Products",
        link: "/",
        icon: loan,
        iconActive: loan,
      },
      {
        name: "Savings Products",
        link: "/",
        icon: savings,
        iconActive: savings,
      },
      {
        name: "Fees and Charges",
        link: "/",
        icon: coins,
        iconActive: coins,
      },
      {
        name: "Transactions",
        link: "/",
        icon: transactions,
        iconActive: transactions,
      },
      {
        name: "Services",
        link: "/",
        icon: service,
        iconActive: service,
      },
      {
        name: "Service Account",
        link: "/",
        icon: service_amount,
        iconActive: service_amount,
      },
      {
        name: "Settlements",
        link: "/",
        icon: settlement,
        iconActive: settlement,
      },
      {
        name: "Reports",
        link: "/",
        icon: report,
        iconActive: report,
      },
    ],
  },
  {
    title: "settings",
    routes: [
      {
        name: "Preferences",
        link: "/",
        icon: prefe,
        iconActive: prefe,
      },
      {
        name: "Fees and Pricing",
        link: "/",
        icon: fees,
        iconActive: fees,
      },
      {
        name: "Audit Logs",
        link: "/",
        icon: audit,
        iconActive: audit,
      },
    ],
  },
];
