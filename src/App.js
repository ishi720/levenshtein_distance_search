import React, { Component } from 'react';
import styles from './App.css'
import { pokeNameList } from './pokeNameList'

const App = () => {
  return <SuggestForm />
}

class SuggestForm extends React.Component {

  //初期化
  constructor(props) {
    super(props);
    this.state = {value: ''};

    //サジェストの設定
    this.suggestNum = 10;
    this.wordList = pokeNameList;
 
    //イベント
    this.handleChange = this.handleChange.bind(this);
  }

  // 画面ロード後の処理
  componentDidMount() {
    let suggestions = this.getSuggest(this.state.value, this.wordList, this.suggestNum);
    this.renderSuggest(suggestions);
  }

  // Inputタグイベント
  handleChange(event) {
    this.setState({value: event.target.value});

    this.state.value = this.hiraganaToKatakana(this.state.value);
    let suggestions = this.getSuggest(this.state.value, this.wordList, this.suggestNum);
    this.renderSuggest(suggestions);
  }

  /**
  * レーベンシュタイン距離の計測
  * @param {string} str1 文字列1
  * @param {string} str2 文字列2
  * @return {array} レーベンシュタイン距離の計測結果
  */
  levenshteinDistance(str1, str2) {
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
  }

  /**
  * 複数の文字列をレーベンシュタイン距離で評価した結果をソートし返却する
  * @param {string} searchWord 検索文字列
  * @param {array} wordList 検索対象の一覧
  * @param {number} n 返却する文字列の数
  * @return {array} 評価順のデータ
  */
  getSuggest(searchWord, wordList, n) {
    return wordList
      .sort((a, b) => this.levenshteinDistance(searchWord, a) - this.levenshteinDistance(searchWord, b))
      .slice(0, n);
  }


  /**
  * ひらがなをカタカナに変換する
  * @param {string} s ひらがな文字列
  * @return {string} カタカナ文字列
  */
  hiraganaToKatakana(s) {
    return s.normalize('NFKC').replace(/[\u3041-\u3096]/g, function(match) {
      return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
  }
  
  /**
  * サジェストを画面に描画する
  * @param {array} wordList 検索対象文字列の一覧
  */
  renderSuggest(wordList){
    let inputElement = document.getElementById('wordList');
    let wordEle = document.querySelectorAll(".keyword");
    wordEle.forEach((s) => {
      s.remove();
    });
  
    wordList.forEach((s) => {
      const set_ele = document.createElement("span");
      set_ele.textContent = s;
      set_ele.setAttribute('class','keyword');
      inputElement.append(set_ele);
     });
  }

  //htmlのレンダリング
  render() {
    return (
      <div>
        <input type="search" value={this.state.value} onChange={this.handleChange} autoComplete="off"/>
        <div id="wordList"></div>
      </div>
    );
  }
}

export default App;