import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('サジェストの個数のテスト', () => {
    render(<App />);
    // サジェストの数のテスト
    expect(screen.getAllByTestId('suggestion')).toHaveLength(15);
  });

  test('サジェスト結果のテスト(ぴかちう → ピカチュウ)', () => {
    render(<App />);

    // inputタグにぴかちうを入力
    const searchInput = screen.getByLabelText('ポケモン名');
    fireEvent.change(searchInput, { target: { value: 'ぴかちう' } });

    // サジェストの1つ目をクリック
    fireEvent.click(screen.getAllByTestId('suggestion')[0]);

    // inputタグがピカチュウに更新されるかテスト
    const afterInput = screen.getByLabelText('ポケモン名') as HTMLInputElement;
    expect(afterInput.value).toBe('ピカチュウ');

  });

  test('サジェスト結果のテスト(てらぱらす → テラパゴス)', () => {
    render(<App />);

    // inputタグにてらぱらすを入力
    const searchInput = screen.getByLabelText('ポケモン名');
    fireEvent.change(searchInput, { target: { value: 'てらぱらす' } });

    // サジェストの1つ目をクリック
    fireEvent.click(screen.getAllByTestId('suggestion')[0]);

    // inputタグがテラパゴスに更新されるかテスト
    const afterInput = screen.getByLabelText('ポケモン名') as HTMLInputElement;
    expect(afterInput.value).toBe('テラパゴス');
  });
});
