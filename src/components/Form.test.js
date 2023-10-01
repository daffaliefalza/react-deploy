import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

// test untuk mengecek product name tidak mengandung symbol
test("product name input should not contain symbols", () => {
  render(<Form />);
  const nameInput = screen.getByLabelText("Product Name");

  fireEvent.change(nameInput, { target: { value: "Product@Name" } });

  const errorMessage = screen.getByText(
    /Invalid input. Please check your data./i
  );

  expect(errorMessage).toBeInTheDocument();
});

// test untuk mengecek input tidak melebihi 25 karakter
test("product name input should not be greater than 25 characters", () => {
  render(<Form />);
  const nameInput = screen.getByLabelText("Product Name");

  fireEvent.change(nameInput, {
    target: { value: "Product Name With a Very Long Name" },
  });

  const errorMessage = screen.getByText(
    /Invalid input. Please check your data./i
  );

  expect(errorMessage).toBeInTheDocument();
});

// test untuk mengecek semua field tidak kosong
test("all fields should not be empty", () => {
  render(<Form />);
  const addButton = screen.getByText("Add Product");

  fireEvent.click(addButton);

  const errorMessage = screen.getByText(/All fields are required/i);

  expect(errorMessage).toBeInTheDocument();
});
