# Mobile First Daily Interface (MFDI)

[![release](https://img.shields.io/github/release/tadashi-aikawa/mobile-first-daily-interface.svg)](https://github.com/tadashi-aikawa/mobile-first-daily-interface/releases/latest)
![downloads](https://img.shields.io/github/downloads/tadashi-aikawa/mobile-first-daily-interface/total)

![image](https://raw.githubusercontent.com/tadashi-aikawa/mobile-first-daily-interface/master/image.png)


[Obsidian]にてモバイルに最適なインターフェースでデイリーノートを扱うプラグインです。

- SNSやチャットツールのようなUI
- 記録先はデイリーノート

> **Note**
> 本プラグインは[Obsidian Memos] (現: [Thino]) の影響を強く受けています。そのため、[コミュニティプラグイン]には登録しません。また、英語のREADMEを記載する予定もありません。

## 対応OS

[Obsidian]がサポートする全てのプラットフォーム/OSに対応しているつもりです。

- Windows
- macOS (動作未確認)
- Linux (動作未確認)
- Android
- iOS (動作未確認)
- iPadOS (動作未確認)

画面はスマートフォンに最適化されていますが、PCやタブレットでも利用できます。

## ⏬インストール

[BRAT]を使って`tadashi-aikawa/mobile-first-daily-interface`でインストールします。

## 起動方法

[リボン]の『Mobile First Daily Interface』という鉛筆マークをクリックしてください。

デフォルトでは左サイドリーフに開かれます。

## 設定

### 表示リーフ

`default: left`

MFDI Viewを表示するリーフを指定します。

| 設定値  | 意味                               |
| ------- | ---------------------------------- |
| left    | 左サイドリーフに表示します         |
| right   | 右サイドリーフに表示します         |
| current | **現在選択中のリーフ**に表示します |

### Obsidian起動時に自動起動・アクティブにする

`default: false`

有効にすると、Obsidian起動時にMFDIが立ち上がります。

- 1つ以上のMFDI Viewが存在する場合
    - 最初の1つをアクティブにします (**[表示リーフ]の設定は考慮しません**)
- MFDI Viewが存在しない場合
    - [表示リーフ]の設定に従い、Viewを新規作成してアクティブにします

### 書き込むフォーマットをcallout形式にする

`default: false`

有効にすると、callout形式で書き込みます。callout形式の場合、デイリーノート内でのMarkdownの表示が有効になります。
この設定が有効・無効に関わらず、code block形式とcallout形式の両方の読み取りを行うので混在できます。

## 対応機能/ロードマップ

- [x] メッセージの投稿
  - [x] Markdown形式に対応
  - [x] サイトや画像のURLはプレビュー展開
- [x] タスクの追加・完了/未完了の切り替え
- [x] デイリーノートの自動生成
- [x] カレンダーUI
- [x] サイドリーフ表示
- [x] 自動起動
- [x] Bluesky投稿機能

## FAQ

> **Warning**
> FAQの内容は[Thino]がリリースされる前、[Obsidian Memos]の時代のものです。[Thino]では解消している可能性があります。

### なぜMFDIを作ったのか?

[Obsidian Memos]を使わず、自作した背景には動作速度の問題があります。

デイリーノートが1000ファイル近くあるせいか、[Obsidian Memos]ではメモの表示や投稿時に3～5秒程度固まってしまい実用に支障がありました。また、[Obsidian Memos]はしばらく更新されていなそうだったため、自分で必要な機能のみを搭載したプラグインを開発した方が良いと判断しました。

### [Obsidian Memos]との違いは?

[Obsidian Memos]と一番異なるのは、**1度に1日分のデイリーノートしか読み込まない**点です。そのため、表示速度が速く、メモリ使用量が小さくなり、性能の悪い端末や大きなVaultでの利用に適しています。

また、タスク管理などデイリーに関連する機能は積極的にサポートしていく予定です。

### 投稿を編集/削除したい場合は?

デイリーノートを直接編集してください。

### [Obsidian起動時に自動起動・アクティブにする]を有効にしても自動起動しない

以下のケースに該当しないか確認してください。たとえば、カレントリーフへ自動起動したいのに、左サイドリーフにもMFDIのViewが存在する場合はそれを削除する必要があります。

> - 1つ以上のMFDI Viewが存在する場合
>     - 最初の1つをアクティブにします (**[表示リーフ]の設定は考慮しません**)

また、[表示リーフ]が左サイドリーフや右サイドリーフになっている場合は、サイドリーフ内でMFDIがアクティブになっているだけです。いきなりサイドリーフがOpenされるわけではありません。

## その他

Mobile First Daily Interfaceに関するブログ記事もご覧ください。

[📘Obsidian Memos みたいなプラグイン Mobile First Daily Interfaceを作ったワケ \- Minerva](https://minerva.mamansoft.net/%F0%9F%93%98Articles/%F0%9F%93%98Obsidian+Memos+%E3%81%BF%E3%81%9F%E3%81%84%E3%81%AA%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3+Mobile+First+Daily+Interface%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%9F%E3%83%AF%E3%82%B1)


[Obsidian]: https://obsidian.md/
[BRAT]: https://github.com/TfTHacker/obsidian42-brat
[Obsidian Memos]: https://github.com/Quorafind/Obsidian-Memos
[Thino]: https://github.com/Quorafind/Obsidian-Thino
[コミュニティプラグイン]: https://help.obsidian.md/Advanced+topics/Community+plugins
[表示リーフ]: #表示リーフ
[リボン]: https://minerva.mamansoft.net/Notes/%E3%83%AA%E3%83%9C%E3%83%B3%20(Obsidian)
[Obsidian起動時に自動起動・アクティブにする]: #obsidian起動時に自動起動・アクティブにする
