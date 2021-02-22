import React from "react";

import { render, fireEvent } from "@testing-library/react";
import Form from "App/editForm";

describe("The <Edit/> component", () => {
  const defaultProps = {
    data: {
      id: 1,
      name: "Martian Firma",
      budget: "10000.0000",
      budget_spent: "4500.0000",
      date_of_first_purchase: "2119-07-07",
    },
    setShown: jest.fn(),
    shown: true,
  };
  it("Should display error if value is invalid", () => {
    const { getByPlaceholderText, getByText,getByTestId } = render(
      <Form {...defaultProps} />
    );
    const inputValue = "hello";
    const form = getByTestId("edit-budget");

    fireEvent.change(getByPlaceholderText(/budget/i), {
      target: { value: inputValue },
    });
    fireEvent.submit(form);
    expect(getByTestId("input-error")).toBeInTheDocument();
    expect(getByText(`Enter valid amount`)).toBeInTheDocument();
  });

  it("Should display error if value is less than budget_spent", () => {
    const { getByPlaceholderText,getByText,  getByTestId } = render(
      <Form {...defaultProps} />
    );
    const inputValue = "12";
    const form = getByTestId("edit-budget");

    fireEvent.change(getByPlaceholderText(/budget/i), {
      target: { value: inputValue },
    });
    fireEvent.submit(form);
    expect(getByTestId("input-error")).toBeInTheDocument();
    expect(getByText(`Total budget must be greater than ${defaultProps.data.budget_spent}`)).toBeInTheDocument();
  
  });
  it("Should display confirmation on success", () => {
    const { getByPlaceholderText,getByText,  getByTestId } = render(
      <Form {...defaultProps} />
    );
    const inputValue = "990002";
    const form = getByTestId("edit-budget");

    fireEvent.change(getByPlaceholderText(/budget/i), {
      target: { value: inputValue },
    });
    fireEvent.submit(form);
    expect(getByText(`Budget updated to`)).toBeInTheDocument();
  });
  it("Should close modal on click of success button", () => {
    const { getByPlaceholderText,getByText,  getByTestId } = render(
      <Form {...defaultProps} />
    );
    const inputValue = "919000.4400";
    const form = getByTestId("edit-budget");

    fireEvent.change(getByPlaceholderText(/budget/i), {
      target: { value: inputValue },
    });
    fireEvent.submit(form);
    fireEvent.click(getByText(/return to dashboard/i));
    expect(defaultProps.setShown).toHaveBeenCalled()
  });
});
