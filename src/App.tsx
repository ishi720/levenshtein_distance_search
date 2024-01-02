import React, { useState, useEffect } from 'react';
import './App.scss';
import { pokeNameList } from './pokeNameList';

const App = () => {
  return <SuggestForm />;
};

const SuggestForm = () => {
  const [value, setValue] = useState<string>('');
  const suggestNum: number = 15 ;
  const wordList: string[] = pokeNameList;
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const suggestions: string[] = getSuggest(hiraganaToKatakana(value), wordList, suggestNum);
    setSuggestions(suggestions);
  }, [value, wordList, suggestNum]);

  // イベント
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
  };
  const handleClickWord = (word: string) => {
    setValue(word); // クリックされたワードを検索ボックスにセットする
  };
  /**
  * レーベンシュタイン距離の計測
  * @param {string} str1 文字列1
  * @param {string} str2 文字列2
  * @return {array} レーベンシュタイン距離の計測結果
  */
  const levenshteinDistance = (str1: string, str2: string) => {
    const len1 = str1.length;
    const len2 = str2.length;
    
    const dp: number[][] = [];
    
    for (let i = 0; i <= len1; i++) {
      dp[i] = [];
      for (let j = 0; j <= len2; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else {
          dp[i][j] = 0;
        }
      }
    }
    
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }
    
    return dp[len1][len2];
  };
  /**
  * 複数の文字列をレーベンシュタイン距離で評価した結果をソートし返却する
  * @param {string} searchWord 検索文字列
  * @param {array} wordList 検索対象の一覧
  * @param {number} n 返却する文字列の数
  * @return {array} 評価順のデータ
  */
  const getSuggest = (searchWord: string, wordList: string[], n: number) => {
    return wordList
      .sort((a, b) => levenshteinDistance(searchWord, a) - levenshteinDistance(searchWord, b))
      .slice(0, n);
  };
  /**
  * ひらがなをカタカナに変換する
  * @param {string} s ひらがな文字列
  * @return {string} カタカナ文字列
  */
  const hiraganaToKatakana = (s: string) => {
    return s.normalize('NFKC').replace(/[\u3041-\u3096]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="pokemonSearch">ポケモン名　</label>
        <input id="pokemonSearch" type="search" value={value} onChange={handleChange} autoComplete="off" />
      </div>
      <div id="wordList">
        <p>もしかして...</p>
        {suggestions.map((word, index) => (
          <span
            key={index}
            className="keyword"
            onClick={() => handleClickWord(word)} 
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;
