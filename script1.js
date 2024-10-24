//data
let data = [
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
let data2 = [
  {
    id: 1,
    imageUrl:
      "https://assets-prd.ignimgs.com/2023/01/27/angrybirds-1674798875645.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/736x/64/96/41/649641d137ef473b771b1b2a7a686dfd.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://pics.craiyon.com/2023-08-29/f1bcd5d2eece4ad9a2b87bdfc1d39fe0.webp",
  },
  {
    id: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBHHgUyOeEVmvFvCPs_l73vhcVEVlVI5Vkg&s",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAngMnaaMs7bvjRT7uMWoy416es2AgX2AyyQ&s",
  },
  {
    id: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNcvIajgChg6iJ0iBi1qccAWZMH5nmOk-gQ&s",
  },
  {
    id: 1,
    imageUrl:
      "https://assets-prd.ignimgs.com/2023/01/27/angrybirds-1674798875645.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/736x/64/96/41/649641d137ef473b771b1b2a7a686dfd.jpg",
  },
  {
    id: 3,
    imageUrl:
      "https://pics.craiyon.com/2023-08-29/f1bcd5d2eece4ad9a2b87bdfc1d39fe0.webp",
  },
  {
    id: 4,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaBHHgUyOeEVmvFvCPs_l73vhcVEVlVI5Vkg&s",
  },
  {
    id: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAngMnaaMs7bvjRT7uMWoy416es2AgX2AyyQ&s",
  },
  {
    id: 6,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNcvIajgChg6iJ0iBi1qccAWZMH5nmOk-gQ&s",
  },
];

//all selector
const boxes = document.querySelectorAll(".box");
const winner = document.querySelector(".winner");
const newgame = document.querySelector(".newgame");
const timer = document.querySelector(".timer");

const theme = document.querySelector(".theme");
theme.addEventListener("click", function () {
  changeTheme();
  data = data2;
  
});

newgame.addEventListener("click", function () {
  newGame();
});

//variable
let count = 0;
let prevId = 0;
let prevItem;
let playgame = true;
let incre = 0;
if (playgame) {
  let ref = setInterval(myTimer, 1000);

  randomize(data);
  boxes.forEach((item, index) => {
    setId(item, data, index);

    item.addEventListener("click", function (e) {
      let audio = new Audio("click.wav");
      audio.play();
      showImg(e.target, data);
      removeCard(e.target, e.target.id, prevItem, prevId);
      console.log("prev " + prevId);
      console.log("current " + e.target.id);
      prevId = e.target.id;
      prevItem = e.target;
      win(ref);
    });
  });
}

function myTimer() {
  timer.innerHTML = incre;
  incre++;
}

function changeTheme() {
  newGame();
  for (let i = 0; i < 12; i++) {
    boxes[i].style.backgroundImage = 'url("card.png")';
    boxes[i].style.backgroundSize = "100%";
  }
}
function showImg(element, data) {
  for (let i = 0; i < data.length; i++) {
    if (element.id == data[i].id) {
      element.innerHTML = `<img src="${data[i].imageUrl}">`;
      setTimeout(function () {
        element.innerHTML = "";
      }, 1000);
    }
  }
}
function setId(item, data, index) {
  item.setAttribute("id", data[index].id);
}
function randomize(data) {
  data.sort(function () {
    return 0.5 - Math.random();
  });
}
function removeCard(item, id, prevItem, prevId) {
  if (item == prevItem) {
    let audio = new Audio("sound3.wav");
    audio.play();
    
    return;
  }
  if (id == prevId) {
    let audio = new Audio("succes.wav");
    audio.play();
    count += 1;
    item.style.visibility = "hidden";
    prevItem.style.visibility = "hidden";
  }
}

function newGame() {
  let audio = new Audio("newgame.mp3");
  audio.play();
  setTimeout(function(){
    audio.pause();
  },5000)
  document.querySelector(".wrapper").style.display = "grid";
  playgame = true;
  winner.style.display = "none";
  newgame.style.display = "none";

  boxes.forEach((item) => (item.style.visibility = "visible"));
  count = 0;
  prevId = 0;
  prevItem = null;
  incre = 0;
  
}


function win(ref) {
  if (count == 6) {
    clearInterval(ref);
    let audio = new Audio("kbc.mp3");
    audio.play();
    winner.style.display = "block";
    newgame.style.display = "block";
    playgame = false;
  }
}


