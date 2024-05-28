// 'use strict';

// var tinderContainer = document.querySelector('.tinder');
// var allCards = document.querySelectorAll('.tinder--card');
// var nope = document.getElementById('nope');
// var love = document.getElementById('love');

// function initCards(card, index) {
//   var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

//   newCards.forEach(function (card, index) {
//     card.style.zIndex = allCards.length - index;
//     card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
//     card.style.opacity = (10 - index) / 10;
//   });
  
//   tinderContainer.classList.add('loaded');
// }

// initCards();

// allCards.forEach(function (el) {
//   var hammertime = new Hammer(el);

//   hammertime.on('pan', function (event) {
//     el.classList.add('moving');
//   });

//   hammertime.on('pan', function (event) {
//     if (event.deltaX === 0) return;
//     if (event.center.x === 0 && event.center.y === 0) return;

//     tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
//     tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

//     var xMulti = event.deltaX * 0.03;
//     var yMulti = event.deltaY / 80;
//     var rotate = xMulti * yMulti;

//     event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
//   });

//   hammertime.on('panend', function (event) {
//     console.log('event: ', event);
//     el.classList.remove('moving');
//     tinderContainer.classList.remove('tinder_love');
//     tinderContainer.classList.remove('tinder_nope');

//     var moveOutWidth = document.body.clientWidth;
//     var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

//     event.target.classList.toggle('removed', !keep);

//     if (keep) {
//       event.target.style.transform = '';
//     } else {
//       var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
//       var toX = event.deltaX > 0 ? endX : -endX;
//       var endY = Math.abs(event.velocityY) * moveOutWidth;
//       var toY = event.deltaY > 0 ? endY : -endY;
//       var xMulti = event.deltaX * 0.03;
//       var yMulti = event.deltaY / 80;
//       var rotate = xMulti * yMulti;

//       event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
//       initCards();
//     }
//   });
// });

// function createButtonListener(love) {
//   return function (event) {
//     var cards = document.querySelectorAll('.tinder--card:not(.removed)');
//     var moveOutWidth = document.body.clientWidth * 1.5;

//     if (!cards.length) return false;

//     var card = cards[0];

//     card.classList.add('removed');

//     if (love) {
//       card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
//     } else {
//       card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
//     }

//     initCards();

//     event.preventDefault();
//   };
// }

// var nopeListener = createButtonListener(false);
// var loveListener = createButtonListener(true);

// nope.addEventListener('click', nopeListener);
// love.addEventListener('click', loveListener);


'use strict';

var json = [
  {
    "title": "Powerpoint!",
    "description": "You need to make a presentation of max. 10 slides what should you do?",
    "r": "Create a presentation of 15 slides",
    "l": "Create a presentation of 10 slides",
    "rCost": 500,
    "lCost": 0,
    "rRevenue": -100,
    "lRevenue": 10,
    "rMessage": "Lets see if they notice, hehe",
    "lMessage": "Boring!"
  },
  {
    "title": "Scaling",
    "description": "Your bakery is experiencing an increase in demand, you want to scale your bun production. How should you scale?",
    "r": "Buy a HUGE oven (scale vertically)",
    "l": "Buy a few more ovens (scale horizontally)",
    "rCost": 100,
    "lCost": 20,
    "rRevenue": 90,
    "lRevenue": 100,
    "rMessage": "Go big or go home!!!",
    "lMessage": "Now we're cookin'"
  },
  {
    "title": "Automation Upgrade",
    "description": "To improve efficiency, your factory is considering automation. Which investment is better?",
    "r": "Invest in advanced AI systems",
    "l": "Upgrade to semi-automatic machinery",
    "rCost": 200,
    "lCost": 50,
    "rRevenue": 250,
    "lRevenue": 70,
    "rMessage": "Futuristic efficiency!",
    "lMessage": "A solid step forward!"
  },
  {
    "title": "Staff Training",
    "description": "Your company's customer service ratings are low. How should you improve?",
    "r": "Hire a professional trainer",
    "l": "Create an online training module",
    "rCost": 40,
    "lCost": 15,
    "rRevenue": 50,
    "lRevenue": 20,
    "rMessage": "Team expertise enhanced!",
    "lMessage": "Self-paced improvement!"
  },
  {
    "title": "Inventory Management",
    "description": "Inventory discrepancies are causing losses. How do you want to manage inventory?",
    "r": "Implement a RFID system",
    "l": "Increase manual stock checks",
    "rCost": 100,
    "lCost": 10,
    "rRevenue": 80,
    "lRevenue": 30,
    "rMessage": "Tech to the rescue!",
    "lMessage": "Keeping it traditional!"
  }
  ,
  {
    "title": "Product Diversification",
    "description": "Sales are stagnating with current products. How do you diversify?",
    "r": "Add a new product line",
    "l": "Enhance existing products",
    "rCost": 150,
    "lCost": 70,
    "rRevenue": 200,
    "lRevenue": 100,
    "rMessage": "New horizons ahead!",
    "lMessage": "Old is gold, but better!"
  }
  ,
  {
    "title": "Marketing Campaigns",
    "description": "Market competition is intense. How do you want to boost your marketing?",
    "r": "Launch a viral social media campaign",
    "l": "Invest in local advertisements",
    "rCost": 70,
    "lCost": 30,
    "rRevenue": 100,
    "lRevenue": 40,
    "rMessage": "We're trending!",
    "lMessage": "Locals love us!"
  }
];

// Modals -------------------------
var editJson = localStorage.getItem("editJson");
console.log("editJson json... ", editJson)
if (!editJson){
  editJson = json;
}else{
  console.log("set json... ")
  json = JSON.parse(editJson);
}
var editJsonContainer = document.getElementById("editJson");
// editJsonContainer.innerHTML = JSON.stringify(editJson)
editJsonContainer.value = JSON.stringify(editJson, null, 4);
const modal = document.querySelector('.modal');
const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');

openButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});

function updateJson(e){
  console.log(e.target.value)
  json = JSON.parse(e.target.value);
  localStorage.setItem("editJson", e.target.value)
}

var r = document.getElementById("r");
var l = document.getElementById("l");
var message = document.getElementById("message");
var resultsContainer = document.getElementById("result");
var revenueContainer = document.getElementById("revenue");
var costContainer = document.getElementById("cost");
var currentIndex = 0;
var revenue = 0;
var costs = 0;
var margin = 0;

function updateOptions(isRight){
  r.innerHTML = json[currentIndex].r;
  l.innerHTML = json[currentIndex].l;
  if (isRight){
    message.innerHTML = json[currentIndex].rMessage;
    animateText(json[currentIndex-1].rMessage)
    revenue += json[currentIndex].rRevenue;
    costs += json[currentIndex].rCost;
  }else if (isRight === false){
    message.innerHTML = json[currentIndex].lMessage;
    animateText(json[currentIndex-1].lMessage)
    revenue += json[currentIndex].lRevenue;
    costs += json[currentIndex].lCost;
    if (costs < 0){
      costs = 0
    }
  }
  revenueContainer.innerHTML = "Revenue: $" + revenue;
  costContainer.innerHTML = "Costs: $" + costs;
  console.log(`revenue: ${revenue}, ${costs}`)
}

function jsonToHtml(jsonData) {
  console.log("jsonData... ", jsonData)
  // Find the container where the cards will be appended
  var container = document.getElementById('cards-container');
  
  // Ensure the container is empty before adding new content
  container.innerHTML = '';

  // Iterate through each item in the JSON array
  jsonData.forEach(function(item, index) {
      // Create the card element
      var card = document.createElement('div');
      card.setAttribute('data-index', index);
      card.className = 'tinder--card';

      // Create the title element
      var title = document.createElement('h3');
      title.textContent = item.title;

      // Create the description element
      var description = document.createElement('p');
      description.textContent = item.description;

      // Append the title and description to the card
      card.appendChild(title);
      card.appendChild(description);

      // Append the card to the container
      container.appendChild(card);
  });

}

jsonToHtml(json);
updateOptions();

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');

function initCards(card, index) {
  // jsonToHtml(json);
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });

  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';

      currentIndex += 1;
      var isRight = event.deltaX > 0;
      if (currentIndex >= json.length){
        resultsContainer.innerHTML = `GAME OVER<br><br> Revenue: ${revenue}, costs: ${costs}`
      }else{
        updateOptions(isRight);
      }

      // Log swipe direction
      if (event.deltaX > 0) {
        console.log('right');
      } else {
        console.log('left');
      }

      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
      console.log('right');
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      console.log('left');
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);


function plotBreakeven(){
  var trace1 = {
    x: [1, 2],
    y: [10, 15],
    type: 'scatter'
  };
  
  var trace2 = {
    x: [1, 2],
    y: [16, 5],
    type: 'scatter'
  };
  
  var data = [trace1, trace2];
  
  Plotly.newPlot('breakeven', data);
}
// plotBreakeven();


function animateText(text) {
  const flashTextElement = document.getElementById('flashText');
  flashTextElement.textContent = text;
  flashTextElement.style.display = 'block';

  // let isVisible = true;
  // const interval = setInterval(() => {
  //     isVisible = !isVisible;
  //     flashTextElement.style.opacity = isVisible ? 1 : 0;
  // }, 500); // Change visibility every 500 milliseconds

  // Stop the animation after 5 seconds
  setTimeout(() => {
      flashTextElement.style.display = 'none';
  }, 1000);
}
