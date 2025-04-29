//テキストエリアに文字が入力されるのをきっかけに
//入力された文字数を数えるという処理が発生する
//lengthでカウントする
//文字が入力されると処理を実行する　まず指示に利用する要素（定数）準備

const text = document.querySelector("#text");
const count = document.querySelector("#count")

//text.addEventListener("keyup", () => {
    //キー入力されたときの処理
//});

//数を数えるには数えたい文字列の後に.lengthをつなげるだけ
//"文字列".length
//文字数は定数countに表示させたいからcount.textCountに
//文字が入れられるようにしておく
//すでに入力された値は　要素.valueで取得できる
//テキストエリアはtextって定数に入れてるからtext.value
//に続けて.length
text.addEventListener("keyup", () => {
    count.textContent = text.value.length;
});
//keyup テキストエリアにキーボードで入力したときに処理を
//するためのイベント。正確には「キーから手が離れたとき」