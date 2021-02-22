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
  it("show the sended message", () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Form {...defaultProps}  />);
    const inputValue = "12";

    fireEvent.change( getByPlaceholderText(/budget/i), {
      target: { value: inputValue },
    });
    fireEvent.click(getByText(/submit/i));

    expect(onSubmit).toBeCalled();
  });

  //   const defaultProps = {
  //     type: "text",
  //     onChange: jest.fn(),
  //     label: "First Name",
  //     placeholder: "Enter first name",
  //     name: "firstName",
  //   };

  //   test("Should render input correctly", () => {
  //     const { asFragment } = render(<Input {...defaultProps} />);
  //     expect(asFragment()).toMatchSnapshot();
  //   });

  //   test("Should render input label correctly", () => {
  //     const { getByText } = render(<Input {...defaultProps} />);
  //     expect(getByText(/First Name/)).toBeInTheDocument();
  //   });

  //   test("Should call the onChange handler when it is provided", () => {
  //     const { getByPlaceholderText } = render(<Input {...defaultProps} />);
  //     const defaultField = getByPlaceholderText(defaultProps.placeholder);
  //     const inputValue = "Anwuli";

  //     fireEvent.change(defaultField, { target: { value: inputValue } });
  //     expect(defaultField.value).toBe(inputValue);
  //   });
});
