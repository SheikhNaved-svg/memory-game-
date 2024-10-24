const box = document.querySelectorAll(".box");
let data= [
  {
    id: 1,
    imageUrl: "/spiderman.webp",
  },
  {
    id: 2,
    imageUrl: "/wanda.jpg",
  },
  {
    id: 3,
    imageUrl: "/natasha.jpg",
  },
  {
    id: 4,
    imageUrl: "/iron.jpg",
  },
  {
    id: 5,
    imageUrl: "/thor.jpg",
  },
  {
    id: 6,
    imageUrl: "/captain.jpg",
  },
  {
    id: 1,
    imageUrl: "/spiderman.webp",
  },
  {
    id: 2,
    imageUrl: "/wanda.jpg",
  },
  {
    id: 3,
    imageUrl: "/natasha.jpg",
  },
  {
    id: 4,
    imageUrl: "/iron.jpg",
  },
  {
    id: 5,
    imageUrl: "/thor.jpg",
  },
  {
    id: 6,
    imageUrl: "/captain.jpg",
  },
];
arr.sort(function () {
  return 0.5 - Math.random();
});


for (let i = 0; i < arr.length; i++) {
  box[i].setAttribute("id", arr[i].id);
}
let prevId = 0;
let prevItem;
let count = 0;

box.forEach((item) => {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < 12; i++) {
      if (arr[i].id == e.target.id) {
        e.target.innerHTML = `<img src="${arr[i].imageUrl}" >`;
        setTimeout(function () {
          e.target.innerHTML = "";
        }, 1000);
      }
    }

    console.log("previous id" + prevId);
    if (prevId == e.target.id) {
      count += 1;

      e.target.style.visibility = "hidden";
      prevItem.style.visibility = "hidden";

      if (count == 6) {
        win();
      }
    }
    console.log("current id" + e.target.id);
    prevId = e.target.id;
    prevItem = e.target;
  });
});

function newGame(){

}
function win() {
  let audio = new Audio("kbc.mp3");
  audio.play();
  document.querySelector(".winner").style.display = "block";
  document.querySelector('.newgame').style.display="block"
}
