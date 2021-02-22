import { data } from "./data";
export const fetchData = () => {
  return data;
};

export const isValid = (values) => {
  let errors = {};
  if (!values.budget) {
    errors.budget = "Total budget is required ";
  }
  if (!/^[0-9]*(?:\.[0-9]{0,4})?$/i.test(values.budget)) {
    errors.budget = "Enter valid amount";
  }
  if (Number(values.budget) < Number(values.budget_spent)) {
    errors.budget = `Total budget must be greater than ${values.budget_spent}`;
  }
  return errors;
};
