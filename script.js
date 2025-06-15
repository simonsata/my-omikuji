// おみくじの候補
const fortunes = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"];

// ボタンがクリックされたら…
document.getElementById("drawButton").addEventListener("click", function() {
  const result = document.getElementById("result");
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  result.textContent = `あなたの運勢は…「${fortunes[randomIndex]}」！`;
});
