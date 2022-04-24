const Jojo = document.getElementById("jojo-button");
const Kimetu = document.getElementById("kimetu-button");
const Kyojin = document.getElementById("kyojin-button");
const Man = document.getElementById("man-button");
const Bay = document.getElementById("bay-button");
const Madrid = document.getElementById("rmd-button");
const comment = document.getElementById("comment");
const comment2 = document.getElementById("comment2");

const AnimeChoose = function (number) {
  if (number === 0) {
    comment.textContent = "正解!! WRYYY!!!";
  } else if (number === 1) {
    comment.textContent = "不正解!! アニメ２期まだ見れてないです...";
  } else {
    comment.textContent = "不正解!! まだファイナルシーズン見れてないです...";
  }
};

Jojo.onclick = function (number) {
  AnimeChoose(0);
};
Kimetu.onclick = function (number) {
  AnimeChoose(1);
};
Kyojin.onclick = function (number) {
  AnimeChoose(2);
};

const SoccerChoose = function (number) {
  if (number === 0) {
    comment2.textContent = "不正解!!  Red-Devils with McGwire & PL !!";
  } else if (number === 1) {
    comment2.textContent = "正解!!  昔も今も大好きです";
  } else {
    comment2.textContent =
      "正解!!  銀河系。スターの集まり。 夢のあるチームです";
  }
};

Man.onclick = function (number) {
  SoccerChoose(0);
};
Bay.onclick = function (number) {
  SoccerChoose(1);
};
Madrid.onclick = function (number) {
  SoccerChoose(2);
};
