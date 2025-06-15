// おみくじの候補
const fortunes = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"];
const sound = document.getElementById("sound");

document.getElementById("drawButton").addEventListener("click", function () {
  // 音を最初から再生
  sound.currentTime = 0;
  sound.play();

  const result = document.getElementById("result");
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  result.textContent = `あなたの運勢は…「${fortunes[randomIndex]}」！`;

  // アニメーションのクラスを追加
  result.classList.remove("animate");
  void result.offsetWidth; // アニメーションをリセット
  result.classList.add("animate");
});

