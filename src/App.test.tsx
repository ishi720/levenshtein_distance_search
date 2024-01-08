import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('サジェストの個数のテスト', () => {
    render(<App />);
    // 特定のクラス名を持つ要素を取得
    const showSuggestEle = document.getElementsByClassName('keyword');
   
    // サジェストの数を取得
    const showSuggestCount = showSuggestEle.length;

    // サジェストの数のテスト
    expect(showSuggestCount).toBe(15);
  });

  test('サジェスト結果のテスト(ぴかちう → ピカチュウ)', () => {
    render(<App />);

    // inputタグにぴかちうを入力
    const searchInput = screen.getByLabelText('ポケモン名');
    fireEvent.change(searchInput, { target: { value: 'ぴかちう' } });

    // サジェストの1つ目をクリック
    const elementsWithKeywordClass = document.getElementsByClassName('keyword');
    fireEvent.click(elementsWithKeywordClass[0]);

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
    const elementsWithKeywordClass = document.getElementsByClassName('keyword');
    fireEvent.click(elementsWithKeywordClass[0]);

    // inputタグがテラパゴスに更新されるかテスト
    const afterInput = screen.getByLabelText('ポケモン名') as HTMLInputElement;
    expect(afterInput.value).toBe('テラパゴス');
  });
});
