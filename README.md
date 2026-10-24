# levenshtein distance search

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/075acf87d28141c4834c8f4f6c4a3d46)](https://app.codacy.com/gh/ishi720/levenshtein_distance_search/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Coverage Status](https://coveralls.io/repos/github/ishi720/levenshtein_distance_search/badge.svg?branch=master)](https://coveralls.io/github/ishi720/levenshtein_distance_search?branch=master)

# アプリ説明

レーベンシュタイン距離を使った検索機能

# イメージ

![68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3437333039372f64616534353335662d623461662d656132352d623735342d6161393330373233396562392e676966](https://github.com/ishi720/levenshtein_distance_search/assets/26811527/44078ff8-9923-4029-beb7-1403020feb36)

# 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| 言語 | TypeScript |
| UI | React 19 |
| スタイル | Sass (SCSS) |
| ビルド・開発サーバー | Vite |
| テスト | Vitest / React Testing Library / jsdom |
| Lint | ESLint |
| 実行環境 | Node.js 24 |
| CI | GitHub Actions / Coveralls |
| 配信 | Docker（nginx） |

# ユニットテスト

```bash
# 依存パッケージのインストール
$ npm ci

# ウォッチモードで実行
$ npm test

# 1 回だけ実行
$ npm test -- --run

# カバレッジ付きで実行（coverage/ に出力）
$ npm test -- --run --coverage
```

# Docker Build

```bash
$ docker build -t levenshtein_distance_search .
$ docker run -d -p 80:80 levenshtein_distance_search
```
