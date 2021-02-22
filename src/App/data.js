import { currencyFormatter } from "./functions";
export const data = [
  {
    id: 1,
    name: "Martian Firma",
    budget: "10000.0000",
    budget_spent: "4500.0000",
    date_of_first_purchase: "2119-07-07",
  },
  {
    id: 2,
    name: "Solar Firma",
    budget: "1020.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 3,
    name: "Sophie Soma",
    budget: "1500.0000",
    budget_spent: "450.0000",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 4,
    name: "Tonia Jones",
    budget: "1603.2200",
    budget_spent: "451.3004",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 5,
    name: "Temi Okpoma",
    budget: "1623.2200",
    budget_spent: "491.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 6,
    name: "Solomon Okoro",
    budget: "1723.2200",
    budget_spent: "751.1114",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 7,
    name: "Uvere Okoro",
    budget: "1003.2200",
    budget_spent: "900.0054",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 8,
    name: "Ngozi Chukwurah",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },

  {
    id: 9,
    name: "Phebian Chukwurah",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 10,
    name: "Samantha Lawanson",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 11,
    name: "Sugar High",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 12,
    name: "Watermelon Sugar",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },

  {
    id: 13,
    name: "Justin Beiber",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 14,
    name: "Cristiano ronaldo",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 15,
    name: "Sandra Alexis",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 16,
    name: "Alexa Uvala",
    budget: "1123.2200",
    budget_spent: "451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 17,
    name: "Somi Candamien",
    budget: "1103.2200",
    budget_spent: "151.3754",
    date_of_first_purchase: "2120-01-14",
  },

  {
    id: 18,
    name: "Joey Bruno",
    budget: "3123.2200",
    budget_spent: "1451.3754",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 19,
    name: "Tasha Jones",
    budget: "1523.2200",
    budget_spent: "251.04",
    date_of_first_purchase: "2120-01-14",
  },
  {
    id: 20,
    name: "Shola Femi",
    budget: "1123.2200",
    budget_spent: "41.0054",
    date_of_first_purchase: "2120-01-14",
  },
];

export const headers = [
  { name: "name", title: "Company" },
  {
    name: "budget",
    title: "Budget (€)",
    formatter: ({ budget }) => currencyFormatter(budget),
  },
  {
    name: "budget_spent",
    title: "Budget Spent (€)",
    formatter: ({ budget_spent }) => currencyFormatter(budget_spent),
  },
  {
    name: "budget_left",
    title: "Budget Left (€)",
    formatter: ({ budget_spent, budget }) =>
      currencyFormatter(budget - budget_spent),
  },
  { name: "date_of_first_purchase", title: "Date of First Purchase" },
];
