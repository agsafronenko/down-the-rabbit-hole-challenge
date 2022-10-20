// There are 100 holes (from 0 to 99), all in a row, and a long tunnel connecting them.
// A rabbit lives down there, and you're trying to catch him.
// The rabbit starts down 1 one of the holes, but you don't know which. Every time you look down into a hole the rabbit moves. But he only moves one hole — either left or right.
// 1) How can you find the rabbit?
// 2) And how long will it take?

// Solution:

// How can you find the rabbit?

let move = 1;
let rabbit = Math.floor(Math.random() * 100);
let human = 0;
let direction = "right";

console.log("init", move, "rabbit-human", rabbit, "-", human);

while (rabbit !== human) {
  move++;

  // the rabbit randomly moves - either left or right
  Math.random() < 0.5 ? (rabbit === 0 ? rabbit++ : rabbit--) : rabbit === 99 ? rabbit-- : rabbit++;

  // human moves from the left to the right till the penultimate hole (#98) where he stands twice to break the even/odd sequence and starts moving to the left (there is no need to check the last hole (#99) while standing in the penultimate(#98) for two times in a row because if the rabbit is there (in #99), he will appear in the penultimate hole (#98) on the second time)
  direction === "right" ? (human !== 98 ? human++ : (direction = "left")) : human--;

  console.log("move", move, "       rabbit - human position", rabbit, "-", human);
}

// And how long will it take?

// If you unlucky to catch the rabbit earlier, it will take you maximum 197 moves with the algorithm written above:

// 99 moves to the right from the #0 to #98;
// 98 moves to the left from #98 hole (which is checked twice) to #1 (the rabbit can not be in #0 when the human is in #1 on his 197 move as standing twice on the penultimate hole (#98) breaks the even/odd sequance)

// in total: 99 + 98 = 197 moves

// checking above calcultaions for the worst case scenario:

let moveWorstCase = 1;
let rabbitWorstCase = Math.ceil(Math.random());
let humanWorstCase = 0;
let directionWorstCase = "right";

console.log("initWorstCase", moveWorstCase, "rabbit-humanWorstCase", rabbitWorstCase, "-", humanWorstCase);

while (rabbitWorstCase !== humanWorstCase) {
  moveWorstCase++;

  Math.random() < 0.5 ? (rabbitWorstCase === 0 ? rabbitWorstCase++ : rabbitWorstCase--) : rabbitWorstCase === 1 ? rabbitWorstCase-- : rabbitWorstCase++;

  directionWorstCase === "right" ? (humanWorstCase !== 98 ? humanWorstCase++ : (directionWorstCase = "left")) : humanWorstCase--;

  //   console.log("moveWorstCase", moveWorstCase, "       rabbit - human positionWorstCase", rabbitWorstCase, "-", humanWorstCase);
}
console.log("moveWorstCase", moveWorstCase, "       rabbit - human positionWorstCase", rabbitWorstCase, "-", humanWorstCase);
