import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("할 일 목록 제목을 보여준다", () => {
    render(<App />);
    expect(screen.getByText("할 일 목록")).toBeInTheDocument();
  });

  it("초기 할 일 항목들을 보여준다", () => {
    render(<App />);
    expect(screen.getByText("공부하기")).toBeInTheDocument();
    expect(screen.getByText("청소하기")).toBeInTheDocument();
  });
});
