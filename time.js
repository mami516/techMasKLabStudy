// タイマーを表示する場所を取得する
const timer = document.getElementById("timer");

// カウントダウンを行う関数
function countdown() {

    // 現在の日時を取得する
    const now = new Date();

    // 来年の1月1日 0時0分0秒を設定する
    const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

    // 現在時刻から来年までの残り時間を計算する
    const remaining = nextYear - now;

    // 残り時間が0以下になった場合
    if (remaining <= 0) {
        timer.textContent = "00時00分00秒";
        return;
    }

    // ミリ秒を秒に変換する
    const totalSeconds = Math.floor(remaining / 1000);

    // 残り時間から「時」を計算する
    const hours = Math.floor(totalSeconds / 3600);

    // 残り時間から「分」を計算する
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    // 残り時間から「秒」を計算する
    const seconds = totalSeconds % 60;

    // 1桁の数字の場合は0を付けて2桁にする
    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    // タイマーに残り時間を表示する
    timer.textContent = `${hh}時${mm}分${ss}秒`;
}

// 最初にカウントダウンを実行する
countdown();

// 1秒ごとにカウントダウンを更新する
setInterval(countdown, 1000);