import React, { useState, useEffect } from 'react';
import styles from './App.scss';
import { pokeNameList } from './pokeNameList';

const App = () => {
  return <SuggestForm />;
};

const SuggestForm = () => {
  const [value, setValue] = useState('');
  const suggestNum = 10;
  const wordList = pokeNameList;
  const [suggestions, setSuggestions] = useState([]);

  // 初期化
  useEffect(() => {
    const suggestions = getSuggest(hiraganaToKatakana(value), wordList, suggestNum);
    // renderSuggest(suggestions);
    setSuggestions(suggestions);
  }, [value, wordList]);

  // イベント
  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
  };
  const handleClickWord = (word) => {
    setValue(word); // クリックされたワードを検索ボックスにセットする
  };
  /**
  * レーベンシュタイン距離の計測
  * @param {string} str1 文字列1
  * @param {string} str2 文字列2
  * @return {array} レーベンシュタイン距離の計測結果
  */
  const levenshteinDistance = (str1, str2) => {
    const len1 = str1.length;
    const len2 = str2.length;
    
    const dp = [];
    
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
  const getSuggest = (searchWord, wordList, n) => {
    return wordList
      .sort((a, b) => levenshteinDistance(searchWord, a) - levenshteinDistance(searchWord, b))
      .slice(0, n);
  };
  /**
  * ひらがなをカタカナに変換する
  * @param {string} s ひらがな文字列
  * @return {string} カタカナ文字列
  */
  const hiraganaToKatakana = (s) => {
    return s.normalize('NFKC').replace(/[\u3041-\u3096]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
  };
  /**
  * サジェストを画面に描画する
  * @param {array} wordList 検索対象文字列の一覧
  */
  const renderSuggest = (wordList) => {
    const inputElement = document.getElementById('wordList');
    const wordEle = document.querySelectorAll('.keyword');
    wordEle.forEach((s) => {
      s.remove();
    });

    wordList.forEach((s) => {
      const set_ele = document.createElement('span');
      set_ele.textContent = s;
      set_ele.setAttribute('class', 'keyword');
      inputElement.append(set_ele);
    });
  };

  //htmlのレンダリング
  return (
    <div>
      <input type="search" value={value} onChange={handleChange} autoComplete="off" />
      <div id="wordList">
        {suggestions.map((word, index) => (
          <span
            key={index}
            className="keyword"
            onClick={() => handleClickWord(word)} // クリック時に検索ボックスにワードをセットする
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default App;