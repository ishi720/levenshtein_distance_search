import React, { Component } from 'react';
import styles from './App.css'

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
    this.wordList = ['フシギダネ','フシギソウ','フシギバナ','ヒトカゲ','リザード','リザードン','ゼニガメ','カメール','カメックス','キャタピー','トランセル','バタフリー','ビードル','コクーン','スピアー','ポッポ','ピジョン','ピジョット','コラッタ','ラッタ','オニスズメ','オニドリル','アーボ','アーボック','ピカチュウ','ライチュウ','サンド','サンドパン','ニドラン♀','ニドリーナ','ニドクイン','ニドラン♂','ニドリーノ','ニドキング','ピッピ','ピクシー','ロコン','キュウコン','プリン','プクリン','ズバット','ゴルバット','ナゾノクサ','クサイハナ','ラフレシア','パラス','パラセクト','コンパン','モルフォン','ディグダ','ダグトリオ','ニャース','ペルシアン','コダック','ゴルダック','マンキー','オコリザル','ガーディ','ウインディ','ニョロモ','ニョロゾ','ニョロボン','ケーシィ','ユンゲラー','フーディン','ワンリキー','ゴーリキー','カイリキー','マダツボミ','ウツドン','ウツボット','メノクラゲ','ドククラゲ','イシツブテ','ゴローン','ゴローニャ','ポニータ','ギャロップ','ヤドン','ヤドラン','コイル','レアコイル','カモネギ','ドードー','ドードリオ','パウワウ','ジュゴン','ベトベター','ベトベトン','シェルダー','パルシェン','ゴース','ゴースト','ゲンガー','イワーク','スリープ','スリーパー','クラブ','キングラー','ビリリダマ','マルマイン','タマタマ','ナッシー','カラカラ','ガラガラ','サワムラー','エビワラー','ベロリンガ','ドガース','マタドガス','サイホーン','サイドン','ラッキー','モンジャラ','ガルーラ','タッツー','シードラ','トサキント','アズマオウ','ヒトデマン','スターミー','バリヤード','ストライク','ルージュラ','エレブー','ブーバー','カイロス','ケンタロス','コイキング','ギャラドス','ラプラス','メタモン','イーブイ','シャワーズ','サンダース','ブースター','ポリゴン','オムナイト','オムスター','カブト','カブトプス','プテラ','カビゴン','フリーザー','サンダー','ファイヤー','ミニリュウ','ハクリュー','カイリュー','ミュウツー','ミュウ','チコリータ','ベイリーフ','メガニウム','ヒノアラシ','マグマラシ','バクフーン','ワニノコ','アリゲイツ','オーダイル','オタチ','オオタチ','ホーホー','ヨルノズク','レディバ','レディアン','イトマル','アリアドス','クロバット','チョンチー','ランターン','ピチュー','ピィ','ププリン','トゲピー','トゲチック','ネイティ','ネイティオ','メリープ','モココ','デンリュウ','キレイハナ','マリル','マリルリ','ウソッキー','ニョロトノ','ハネッコ','ポポッコ','ワタッコ','エイパム','ヒマナッツ','キマワリ','ヤンヤンマ','ウパー','ヌオー','エーフィ','ブラッキー','ヤミカラス','ヤドキング','ムウマ','アンノーン','ソーナンス','キリンリキ','クヌギダマ','フォレトス','ノコッチ','グライガー','ハガネール','ブルー','グランブル','ハリーセン','ハッサム','ツボツボ','ヘラクロス','ニューラ','ヒメグマ','リングマ','マグマッグ','マグカルゴ','ウリムー','イノムー','サニーゴ','テッポウオ','オクタン','デリバード','マンタイン','エアームド','デルビル','ヘルガー','キングドラ','ゴマゾウ','ドンファン','ポリゴン2','オドシシ','ドーブル','バルキー','カポエラー','ムチュール','エレキッド','ブビィ','ミルタンク','ハピナス','ライコウ','エンテイ','スイクン','ヨーギラス','サナギラス','バンギラス','ルギア','ホウオウ','セレビィ','キモリ','ジュプトル','ジュカイン','アチャモ','ワカシャモ','バシャーモ','ミズゴロウ','ヌマクロー','ラグラージ','ポチエナ','グラエナ','ジグザグマ','マッスグマ','ケムッソ','カラサリス','アゲハント','マユルド','ドクケイル','ハスボー','ハスブレロ','ルンパッパ','タネボー','コノハナ','ダーテング','スバメ','オオスバメ','キャモメ','ペリッパー','ラルトス','キルリア','サーナイト','アメタマ','アメモース','キノココ','キノガッサ','ナマケロ','ヤルキモノ','ケッキング','ツチニン','テッカニン','ヌケニン','ゴニョニョ','ドゴーム','バクオング','マクノシタ','ハリテヤマ','ルリリ','ノズパス','エネコ','エネコロロ','ヤミラミ','クチート','ココドラ','コドラ','ボスゴドラ','アサナン','チャーレム','ラクライ','ライボルト','プラスル','マイナン','バルビート','イルミーゼ','ロゼリア','ゴクリン','マルノーム','キバニア','サメハダー','ホエルコ','ホエルオー','ドンメル','バクーダ','コータス','バネブー','ブーピッグ','パッチール','ナックラー','ビブラーバ','フライゴン','サボネア','ノクタス','チルット','チルタリス','ザングース','ハブネーク','ルナトーン','ソルロック','ドジョッチ','ナマズン','ヘイガニ','シザリガー','ヤジロン','ネンドール','リリーラ','ユレイドル','アノプス','アーマルド','ヒンバス','ミロカロス','ポワルン','カクレオン','カゲボウズ','ジュペッタ','ヨマワル','サマヨール','トロピウス','チリーン','アブソル','ソーナノ','ユキワラシ','オニゴーリ','タマザラシ','トドグラー','トドゼルガ','パールル','ハンテール','サクラビス','ジーランス','ラブカス','タツベイ','コモルー','ボーマンダ','ダンバル','メタング','メタグロス','レジロック','レジアイス','レジスチル','ラティアス','ラティオス','カイオーガ','グラードン','レックウザ','ジラーチ','デオキシス','ナエトル','ハヤシガメ','ドダイトス','ヒコザル','モウカザル','ゴウカザル','ポッチャマ','ポッタイシ','エンペルト','ムックル','ムクバード','ムクホーク','ビッパ','ビーダル','コロボーシ','コロトック','コリンク','ルクシオ','レントラー','スボミー','ロズレイド','ズガイドス','ラムパルド','タテトプス','トリデプス','ミノムッチ','ミノマダム','ガーメイル','ミツハニー','ビークイン','パチリス','ブイゼル','フローゼル','チェリンボ','チェリム','カラナクシ','トリトドン','エテボース','フワンテ','フワライド','ミミロル','ミミロップ','ムウマージ','ドンカラス','ニャルマー','ブニャット','リーシャン','スカンプー','スカタンク','ドーミラー','ドータクン','ウソハチ','マネネ','ピンプク','ペラップ','ミカルゲ','フカマル','ガバイト','ガブリアス','ゴンベ','リオル','ルカリオ','ヒポポタス','カバルドン','スコルピ','ドラピオン','グレッグル','ドクロッグ','マスキッパ','ケイコウオ','ネオラント','タマンタ','ユキカブリ','ユキノオー','マニューラ','ジバコイル','ベロベルト','ドサイドン','モジャンボ','エレキブル','ブーバーン','トゲキッス','メガヤンマ','リーフィア','グレイシア','グライオン','マンムー','ポリゴンZ','エルレイド','ダイノーズ','ヨノワール','ユキメノコ','ロトム','ユクシー','エムリット','アグノム','ディアルガ','パルキア','ヒードラン','レジギガス','ギラティナ','クレセリア','フィオネ','マナフィ','ダークライ','シェイミ','アルセウス','ビクティニ','ツタージャ','ジャノビー','ジャローダ','ポカブ','チャオブー','エンブオー','ミジュマル','フタチマル','ダイケンキ','ミネズミ','ミルホッグ','ヨーテリー','ハーデリア','ムーランド','チョロネコ','レパルダス','ヤナップ','ヤナッキー','バオップ','バオッキー','ヒヤップ','ヒヤッキー','ムンナ','ムシャーナ','マメパト','ハトーボー','ケンホロウ','シママ','ゼブライカ','ダンゴロ','ガントル','ギガイアス','コロモリ','ココロモリ','モグリュー','ドリュウズ','タブンネ','ドッコラー','ドテッコツ','ローブシン','オタマロ','ガマガル','ガマゲロゲ','ナゲキ','ダゲキ','クルミル','クルマユ','ハハコモリ','フシデ','ホイーガ','ペンドラー','モンメン','エルフーン','チュリネ','ドレディア','バスラオ','メグロコ','ワルビル','ワルビアル','ダルマッカ','ヒヒダルマ','マラカッチ','イシズマイ','イワパレス','ズルッグ','ズルズキン','シンボラー','デスマス','デスカーン','プロトーガ','アバゴーラ','アーケン','アーケオス','ヤブクロン','ダストダス','ゾロア','ゾロアーク','チラーミィ','チラチーノ','ゴチム','ゴチミル','ゴチルゼル','ユニラン','ダブラン','ランクルス','コアルヒー','スワンナ','バニプッチ','バニリッチ','バイバニラ','シキジカ','メブキジカ','エモンガ','カブルモ','シュバルゴ','タマゲタケ','モロバレル','プルリル','ブルンゲル','ママンボウ','バチュル','デンチュラ','テッシード','ナットレイ','ギアル','ギギアル','ギギギアル','シビシラス','シビビール','シビルドン','リグレー','オーベム','ヒトモシ','ランプラー','シャンデラ','キバゴ','オノンド','オノノクス','クマシュン','ツンベアー','フリージオ','チョボマキ','アギルダー','マッギョ','コジョフー','コジョンド','クリムガン','ゴビット','ゴルーグ','コマタナ','キリキザン','バッフロン','ワシボン','ウォーグル','バルチャイ','バルジーナ','クイタラン','アイアント','モノズ','ジヘッド','サザンドラ','メラルバ','ウルガモス','コバルオン','テラキオン','ビリジオン','トルネロス','ボルトロス','レシラム','ゼクロム','ランドロス','キュレム','ケルディオ','メロエッタ','ゲノセクト','ハリマロン','ハリボーグ','ブリガロン','フォッコ','テールナー','マフォクシー','ケロマツ','ゲコガシラ','ゲッコウガ','ホルビー','ホルード','ヤヤコマ','ヒノヤコマ','ファイアロー','コフキムシ','コフーライ','ビビヨン','シシコ','カエンジシ','フラベベ','フラエッテ','フラージェス','メェークル','ゴーゴート','ヤンチャム','ゴロンダ','トリミアン','ニャスパー','ニャオニクス','ヒトツキ','ニダンギル','ギルガルド','シュシュプ','フレフワン','ペロッパフ','ペロリーム','マーイーカ','カラマネロ','カメテテ','ガメノデス','クズモー','ドラミドロ','ウデッポウ','ブロスター','エリキテル','エレザード','チゴラス','ガチゴラス','アマルス','アマルルガ','ニンフィア','ルチャブル','デデンネ','メレシー','ヌメラ','ヌメイル','ヌメルゴン','クレッフィ','ボクレー','オーロット','バケッチャ','パンプジン','カチコール','クレベース','オンバット','オンバーン','ゼルネアス','イベルタル','ジガルデ','ディアンシー','フーパ','ボルケニオン','モクロー','フクスロー','ジュナイパー','ニャビー','ニャヒート','ガオガエン','アシマリ','オシャマリ','アシレーヌ','ツツケラ','ケララッパ','ドデカバシ','ヤングース','デカグース','アゴジムシ','デンヂムシ','クワガノン','マケンカニ','ケケンカニ','オドリドリ','アブリー','アブリボン','イワンコ','ルガルガン','ヨワシ','ヒドイデ','ドヒドイデ','ドロバンコ','バンバドロ','シズクモ','オニシズクモ','カリキリ','ラランテス','ネマシュ','マシェード','ヤトウモリ','エンニュート','ヌイコグマ','キテルグマ','アマカジ','アママイコ','アマージョ','キュワワー','ヤレユータン','ナゲツケサル','コソクムシ','グソクムシャ','スナバァ','シロデスナ','ナマコブシ','タイプ:ヌル','シルヴァディ','メテノ','ネッコアラ','バクガメス','トゲデマル','ミミッキュ','ハギギシリ','ジジーロン','ダダリン','ジャラコ','ジャランゴ','ジャラランガ','カプ・コケコ','カプ・テテフ','カプ・ブルル','カプ・レヒレ','コスモッグ','コスモウム','ソルガレオ','ルナアーラ','ウツロイド','マッシブーン','フェローチェ','デンジュモク','テッカグヤ','カミツルギ','アクジキング','ネクロズマ','マギアナ','マーシャドー','ベベノム','アーゴヨン','ツンデツンデ','ズガドーン','ゼラオラ','メルタン','メルメタル','サルノリ','バチンキー','ゴリランダー','ヒバニー','ラビフット','エースバーン','メッソン','ジメレオン','インテレオン','ホシガリス','ヨクバリス','ココガラ','アオガラス','アーマーガア','サッチムシ','レドームシ','イオルブ','クスネ','フォクスライ','ヒメンカ','ワタシラガ','ウールー','バイウールー','カムカメ','カジリガメ','ワンパチ','パルスワン','タンドン','トロッゴン','セキタンザン','カジッチュ','アップリュー','タルップル','スナヘビ','サダイジャ','ウッウ','サシカマス','カマスジョー','エレズン','ストリンダー','ヤクデ','マルヤクデ','タタッコ','オトスパス','ヤバチャ','ポットデス','ミブリム','テブリム','ブリムオン','ベロバー','ギモー','オーロンゲ','タチフサグマ','ニャイキング','サニゴーン','ネギガナイト','バリコオル','デスバーン','マホミル','マホイップ','タイレーツ','バチンウニ','ユキハミ','モスノウ','イシヘンジン','コオリッポ','イエッサン','モルペコ','ゾウドウ','ダイオウドウ','パッチラゴン','パッチルドン','ウオノラゴン','ウオチルドン','ジュラルドン','ドラメシヤ','ドロンチ','ドラパルト','ザシアン','ザマゼンタ','ムゲンダイナ','ダクマ','ウーラオス','ザルード','レジエレキ','レジドラゴ','ブリザポス','レイスポス','バドレックス','アヤシシ','バサキリ','ガチグマ','イダイトウ','オオニューラ','ハリーマン','ラブトロス','ニャオハ','ニャローテ','マスカーニャ','ホゲータ','アチゲータ','ラウドボーン','クワッス','ウェルカモ','ウェーニバル','グルトン','パフュートン','タマンチュラ','ワナイダー','マメバッタ','エクスレッグ','パモ','パモット','パーモット','ワッカネズミ','イッカネズミ','パピモッチ','バウッツェル','ミニーブ','オリーニョ','オリーヴァ','イキリンコ','コジオ','ジオズム','キョジオーン','カルボウ','グレンアルマ','ソウブレイズ','ズピカ','ハラバリー','カイデン','タイカイデン','オラチフ','マフィティフ','シルシュルー','タギングル','アノクサ','アノホラグサ','ノノクラゲ','リククラゲ','ガケガニ','カプサイジ','スコヴィラン','シガロコ','ベラカス','ヒラヒナ','クエスパトラ','カヌチャン','ナカヌチャン','デカヌチャン','ウミディグダ','ウミトリオ','オトシドリ','ナミイルカ','イルカマン','ブロロン','ブロロローム','モトトカゲ','ミミズズ','キラーメ','キラフロル','ボチ','ハカドック','カラミンゴ','アルクジラ','ハルクジラ','ミガルーサ','ヘイラッシャ','シャリタツ','コノヨザル','ドオー','リキキリン','ノココッチ','ドドゲザン','イダイナキバ','サケブシッポ','アラブルタケ','ハバタクカミ','チヲハウハネ','スナノケガワ','テツノワダチ','テツノツツミ','テツノカイナ','テツノコウベ','テツノドクガ','テツノイバラ','セビエ','セゴール','セグレイブ','コレクレー','サーフゴー','チオンジェン','パオジアン','ディンルー','イーユイ','トドロクツキ','テツノブジン','コライドン','ミライドン','ウネルミナモ','テツノイサハ','カミッチュ','チャデス','ヤバソチャ','イイネイヌ','マシマシラ','キチキギス','オーガポン','テラパゴス','タケルライコ','テツノカシラ','ブリジュラス'];
 
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
  * @return {string} s カタカナ文字列
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