import { render, screen } from '@testing-library/react';
import Button from "./Button";
import { BookStoreThemeProvider } from '@/context/themeContext';

describe("Button Component Test", () => {
  it('렌더 확인', () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">버튼</Button>
      </BookStoreThemeProvider>
    );

    // 2. 확인
    expect(screen.getByText('버튼')).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">버튼</Button>
      </BookStoreThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "1.5rem" })
  });
});