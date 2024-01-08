import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {

  beforeEach(() => {
    render(<App />);
  });

  test('サジェストの個数のテスト', () => {
    // 特定のクラス名を持つ要素を取得
    const showSuggestEle = document.getElementsByClassName('keyword');
   
    // クラス名が 'keyword' の要素の数を取得
    const showSuggestCount = showSuggestEle.length;

    // アサーション: 'keyword' クラス名の要素数が期待値と一致するかを確認
    expect(showSuggestCount).toBe(15);
  });

  test('サジェスト結果のテスト(ぴかちう → ピカチュウ)', () => {
    const searchInput = screen.getByLabelText('ポケモン名');
    fireEvent.change(searchInput, { target: { value: 'ぴかちう' } });

    // 特定のクラス名を持つ要素を取得
    const elementsWithKeywordClass = document.getElementsByClassName('keyword');
   
    // クラス名が 'keyword' の要素の数を取得
    const numberOfKeywordElements = elementsWithKeywordClass.length;

    // アサーション: 'keyword' クラス名の要素数が期待値と一致するかを確認
    expect(numberOfKeywordElements).toBe(15);

    const hitKeyword = elementsWithKeywordClass[0].innerHTML;
    expect(hitKeyword).toBe("ピカチュウ");
  });

  test('サジェスト結果のテスト(てらぱらす → テラパゴス)', () => {
    const searchInput = screen.getByLabelText('ポケモン名');
    fireEvent.change(searchInput, { target: { value: 'てらぱらす' } });

    // 特定のクラス名を持つ要素を取得
    const elementsWithKeywordClass = document.getElementsByClassName('keyword');
   
    // クラス名が 'keyword' の要素の数を取得
    const numberOfKeywordElements = elementsWithKeywordClass.length;

    // アサーション: 'keyword' クラス名の要素数が期待値と一致するかを確認
    expect(numberOfKeywordElements).toBe(15);

    const hitKeyword = elementsWithKeywordClass[0].innerHTML;
    expect(hitKeyword).toBe("テラパゴス");
  });

});
