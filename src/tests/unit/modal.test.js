import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import { Modal }from 'components';

describe('The <Modal/> component', () => {
  expect.extend(toHaveNoViolations);

  const defaultProps = {
    title: "Test Modal",
    setShown: jest.fn() ,
    shown:true,
    hasFooter:true,
    hasHeader: true,
    handleSubmit: jest.fn(),
    loading:false,
  };

  test('Should render button correctly', () => {
    const { asFragment } = render(<Modal {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });


  test('Should not fail any accessibility tests', async () => {
    const { container } = render(<Modal {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
