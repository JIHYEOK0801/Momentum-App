const quotes = [
  {
    quote: "축구는 인생에서 별로 중요하지 않은 것들 중에서만 가장 중요하다",
    author: "카를로 안첼로티",
  },
  {
    quote: "땀에 젖은 유니폼, 그것이 내가 보여줄 수 있는 전부다.",
    author: "폴 스콜스",
  },
  {
    quote: "쓰러질지언정 무릎은 꿇지 않는다.",
    author: "박지성",
  },
  {
    quote:
      "실력이 떨어지면 남들보다 더 많은 노력을 기울여 이를 극복하면 되는 것이다. 무엇보다 가장 필요한 것은 스스로 하고자 하는 의지이다.",
    author: "거스 히딩크",
  },
  {
    quote: "축구를 혼자 한다는 사람이 있다면 그건 내 인생에 대한 모독이다.",
    author: "지네딘 지단",
  },
  {
    quote:
      "나는 세계 최고의 선수다. 자기에 대한 믿음이 없다면 그 사람은 끝난 것이다.",
    author: "즐라탄 이브라히모비치",
  },
  {
    quote: "미친 사람이 이성적인 사람보다 세상을 많이 변화시킨다.",
    author: "에릭 칸토나",
  },
  {
    quote:
      "축구를 할 수만 있다면 수명이 줄어들어도 좋다고 생각할 정도였다. 내가 사용한 유일한 도핑은 바로 끊임없는 노력이었다.",
    author: "로베르토 바조",
  },
  {
    quote:
      "인간의 도덕과 의무에 대해 내가 알고 있는 것은 모두 축구에서 배웠다.",
    author: "알베르 카뮈",
  },
  {
    quote: "폼은 일시적이지만 클래스는 영원하다",
    author: "빌 샹클리",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
