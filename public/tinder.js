'use strict';

var json = [
  {
    "title": "Pricing Dilemma",
    "description": "How should we price our vintage Nappa Valley Wine",
    "leftOption": "Based on what it costs",
    "leftOutcome": "You're missing out on margins!",
    "rightOption": "Based on what the market will pay",
    "rightOutcome": "Great choice, you know your customers are willing to pay!"
  },
  {
    "title": "Oligopoly",
    "description": "How come there is an oligopoly in this case?",
    "leftOption": "There is only one actor",
    "leftOutcome": "No, that would be monopoly",
    "rightOption": "There are few actors dominating the market and limited competition",
    "rightOutcome": "Correct. Ox only had the choice between AWS and GCP & Azure,so prices were set"
  },
  {
    "title": "Fundraising",
    "description": "Should income from fundraising be budgeted",
    "leftOption": "No, the income is too uncertain",
    "leftOutcome": "This would unable you to make full use of the potential income",
    "rightOption": "Yes, to make sure the budget reflects all income streams",
    "rightOutcome": "Indeed. Makes it possible to utilize the potential in a better way"
  },
  {
    "title": "Regression Analysis",
    "description": "When to use regression analysis?",
    "leftOption": "Small set of linear data",
    "leftOutcome": "That would not help much",
    "rightOption": "Large set of non-linear data",
    "rightOutcome": "Perfect for explaining cost behavior"
  },
  {
    "title": "Topline",
    "description": "What refers top line?",
    "leftOption": "Margin",
    "leftOutcome": "You're missing out on margins!",
    "rightOption": "Gross revenue",
    "rightOutcome": "Top line appears at the top of the income statement!"
  },
  {
    "title": "Tools",
    "description": "What are Management Accounting tools?",
    "leftOption": "Pricing models",
    "leftOutcome": "Yes",
    "rightOption": "Databases like CRM",
    "rightOutcome": "No"
  },
  {
    "title": "Consultation meetings",
    "description": "Formality?",
    "leftOption": "Yes",
    "leftOutcome": "Those who doesn't know how to use would miss out a lot of stuff.",
    "rightOption": "No",
    "rightOutcome": "Important to listen, share, and participate."
  },
  {
    "title": "Customer Profitability Analysis",
    "description": "Which curves are used for CPA?",
    "leftOption": "Shark curves",
    "leftOutcome": "Close but they are other species",
    "rightOption": "Whale curves",
    "rightOutcome": "Better roughly right than precisely wrong!"
  },
  {
    "title": "Contribution Margin",
    "description": "What is CM?",
    "leftOption": "Sales Revenue - Variable Costs",
    "leftOutcome": "Spot on!",
    "rightOption": "Sales Revenue - Fixed costs",
    "rightOutcome": "Try Again!"
  },
  {
    "title": "Activity-based costing (ABC)",
    "description": "You should always apply ABC",
    "leftOption": "Yes, ABC provides more accurate cost allocation by tracing expenses directly to specific activities/ products",
    "leftOutcome": "True, but there are things to be aware of, so have a look at the right option",
    "rightOption": "No, ABC can be complex and costly to implement and maintain, requiring detailed data collection and analysis.",
    "rightOutcome": "True. The data might be both difficult to obtain and can have faults. However, see also the left option."
  },
  {
    "title": "Break-even",
    "description": "A break-even analysis is a waste of time",
    "leftOption": "Yes, you should look for profit!",
    "leftOutcome": "A break-even analysis might actually help you identify at which point you will make profit",
    "rightOption": "No, it can provide useful information",
    "rightOutcome": "A break-even analysis helps determine the sales volume needed to cover all costs, providing insights into profitability and informing pricing, budgeting, and financial planning decisions"
  },
  {
    "title": "Non vs for profit",
    "description": "Are there any differences between how they are and should be run?",
    "leftOption": "No, even non-profits should at least break-even",
    "leftOutcome": "It seems that you then have forgotten a non-profit’s value proposition",
    "rightOption": "Yes, non-profits might have values, goals, that will affect both their strategic and operational decisions",
    "rightOutcome": "Correct. For-profits will focus primarily on the profit, as opposed to non-profits that will put emphasis on their value proposition"
  },
  {
    "title": "Fundraising",
    "description": "Should income from fundraising be budgeted?",
    "leftOption": "No, the income is too uncertain",
    "leftOutcome": "This would unable you to make full use of the potential income",
    "rightOption": "Yes, to make sure the budget reflects all income streams",
    "rightOutcome": "Indeed. Makes it possible to utilize the potential in a better way"
  },
  {
    "title": "Indirect fixed cost",
    "description": "When scaling up, should you include indirect fixed costs in your calculations?",
    "leftOption": "Yes, as they will affect the operating income",
    "leftOutcome": "Correct, and this might change your decision to scale up",
    "rightOption": "No, fixed is fixed",
    "rightOutcome": "That is unfortunately incorrect. Leaving indirect fixed costs out, might be a costly mistake"
  },
  {
    "title": "Mind your language!",
    "description": "Management accounting involves the intricate orchestration of fiscal paradigms to optimize enterprise performance metrics, leveraging dynamic synergies and strategic foresight to drive holistic organizational excellence.",
    "leftOption": "Yes, great idea. Using difficult language makes you seem smart and you can charge more",
    "leftOutcome": "No, this is consultinglish and hard for anyone to understand",
    "rightOption": "No. You will only confuse the listeners/viewers",
    "rightOutcome": "The use of visual elements and understandable language helps everyone understand"
  },
  {
    "title": "Groupwork",
    "description": "Should you divide the work between you or work as a team",
    "leftOption": "Teamwork makes the dream work",
    "leftOutcome": "Correct. Doing the job as group makes the presentation more coherent",
    "rightOption": "Yes. It saves time.",
    "rightOutcome": "It might save time, but the end result is rarely as good as when you work as a team"
  },
  {
    "title": "Sharing across groups",
    "description": "Should you share your findings/thoughts with other groups",
    "leftOption": "Sharing is caring",
    "leftOutcome": "Correct. The main point is to learn.",
    "rightOption": "No, I won’t do the work for others",
    "rightOutcome": "Too bad. The collective learning (output) is better when everyone shares their thoughts and ideas"
  },
  {
    "title": "Budgeting",
    "description": "Is setting full-year budgets a generally a good idea?",
    "leftOption": "Yes, of course. It is the only way to plan",
    "leftOutcome": "Nice!",
    "rightOption": "No, as it will not take into account the rapid changes",
    "rightOutcome": "Abolutely. Forecasting will give more flexibility"
  },
  {
    "title": "Course description",
    "description": "Should you read the course description?",
    "leftOption": "No, waste of time. Just get the job done",
    "leftOutcome": "Well, you might, but handing in 15 pages when the limit is 10 might not be a great idea….",
    "rightOption": "Of course you should!",
    "rightOutcome": "Correct. Avoids you looking silly when handing in too many pages…a"
  },
  {
    "title": "ChatGPT",
    "description": "Should you make use of ChatGPT or similar?",
    "leftOption": "No, that is cheating!",
    "leftOutcome": "Wrong – the focus should be on using the tools that are at your disposal",
    "rightOption": "Yes, you would at any other time….",
    "rightOutcome": "Correct. Use the tools available to you to learn more"
  }
];

var burger_tomato = function(burgerLayerIndex){
  return `<div id="burger-layer-${burgerLayerIndex}" class="burger__tomato"></div>` 
}
var burger_lettuce = function(burgerLayerIndex){
  return `<div id="burger-layer-${burgerLayerIndex}" class="burger__lettuce">
  <div class="lettuce1"></div>
  <div class="lettuce2"></div>
  <div class="lettuce3"></div>
  <div class="lettuce4"></div>
</div>` 
}
var burger_cheese = function(burgerLayerIndex){
  return `
  <div id="burger-layer-${burgerLayerIndex}" class="burger__cheese">
      <div class="cheese__melt"></div>
      <div class="cheese__melt1"></div>
      <div class="cheese__melt2"></div>
      <div class="cheese__melt3"></div>
      <div class="cheese__melt4"></div>
      <div class="cheese__space"></div>
      <div class="cheese__space1"></div>
      <div class="cheese__space2"></div>
  </div>` 
}
var burger_meat = function(burgerLayerIndex){
  return `<div id="burger-layer-${burgerLayerIndex}" class="burger__meat"></div>` 
}

var burgerSections = [
  burger_meat,
  burger_cheese,
  burger_lettuce,
  burger_tomato
]

// Modals -------------------------
var editJson = json;// localStorage.getItem("editJson");
var editJsonContainer = document.getElementById("editJson");

function updateJson(e){
  console.log(e.target.value)
  json = JSON.parse(e.target.value);
  localStorage.setItem("editJson", e.target.value)
}

var r = document.getElementById("r");
var l = document.getElementById("l");
var resultsContainer = document.getElementById("result");
var burgerTop = document.getElementById("bunTop");
var burgerLayerIndex = 0;
var currentBurgerLayer = 0;
var currentIndex = 0;
var burgerLayers = 1;

function handleSwipeLogic(isRight){
  console.log('currentIndex: ', currentIndex)
  if (isRight){
    animateText(json[currentIndex-1].rightOutcome)
    insertHTMLAfter(burgerSections[burgerLayerIndex](currentIndex), burgerTop);
    burgerLayerIndex += 1;
    if (burgerLayerIndex > 3){
      burgerLayerIndex = 0;
    }
  }else if (isRight === false){
    animateText(json[currentIndex-1].leftOutcome)
    removeNextElement();
  }
}


function updateOptions(isRight){
  r.innerHTML = json[currentIndex].rightOption;
  l.innerHTML = json[currentIndex].leftOption;
  handleSwipeLogic(isRight);
}

function insertHTMLAfter(newHTML, existingElement) {
  // Create a temporary container to hold the new HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = newHTML;

  // Get the parent of the existing element
  const parent = existingElement.parentNode;

  // Insert each child of the temporary container after the existing element
  while (tempDiv.firstChild) {
    parent.insertBefore(tempDiv.firstChild, existingElement.nextSibling);
    existingElement = existingElement.nextSibling;
  }
  burgerLayers += 1;
}

function removeNextElement() {
  var element = document.getElementById('bunTop');
  var isBunBottom = element.nextElementSibling.id === "bunBottom";
  if (element && element.nextElementSibling && !isBunBottom) {
    element.nextElementSibling.remove();
    burgerLayers -= 1;
  } else {
    console.log('No next element found or the element with ID "bunTop" does not exist.');
  }
}

function jsonToHtml(jsonData) {
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

    // Add rotation classes based on the swipe direction
  if (event.deltaX > 0) {
    document.getElementById('r').classList.add('rotated-right');
    document.getElementById('l').classList.remove('rotated-left');
  } else {
    document.getElementById('r').classList.remove('rotated-right');
    document.getElementById('l').classList.add('rotated-left');
  }
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

    // reset rotation classes
    document.getElementById('r').classList.remove('rotated-right');
    document.getElementById('l').classList.remove('rotated-left');
    document.getElementById('r').classList.add('rotated-level');
    document.getElementById('l').classList.add('rotated-level');
    setTimeout(function(){
      document.getElementById('r').classList.remove('rotated-level');
      document.getElementById('l').classList.remove('rotated-level');
    }, 300);

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

      // currentIndex += 1;
      var isRight = event.deltaX > 0;
      swipeHandler(isRight);
      // if (currentIndex >= json.length){
      //   if (burgerLayers >= 1){
      //     document.getElementById("backgroundLogo").classList.remove('hidden');
      //   }else{
      //     document.getElementById("backgroundLogo").classList.remove('hidden');
      //     document.getElementById("gameOverText").innerHTML = "You're not worth g<sup>2</sup>'s time, try group 5!"
      //   }
      //   l.classList.add('hidden');
      //   r.classList.add('hidden')
      // }else{
      //   updateOptions(isRight);
      // }

      initCards();
    }
  });
});

function swipeHandler(isRight){
  currentIndex += 1;
  if (currentIndex >= json.length){
    if (burgerLayers >= 1){
      document.getElementById("backgroundLogo").classList.remove('hidden');
    }else{
      document.getElementById("backgroundLogo").classList.remove('hidden');
      document.getElementById("gameOverText").innerHTML = "You're not worth g<sup>2</sup>'s time, try group 5!"
    }
    l.classList.add('hidden');
    r.classList.add('hidden');

    document.getElementById("nope").classList.add('hidden');
    document.getElementById("love").classList.add('hidden');
    document.getElementById("resetButton").classList.remove('hidden');
    document.getElementById("results-arrow").classList.remove('hidden');
  }else{
    updateOptions(isRight);
  }
}

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
      swipeHandler(true);
      handleSwipeLogic(true);
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      console.log('left');
      swipeHandler(false);
      handleSwipeLogic(false);
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);

function replaceClass(element, oldClass, newClass) {
  if (element.classList.contains(oldClass)) {
    element.classList.remove(oldClass);
  }
  element.classList.add(newClass);
}

function removeAllClasses(element) {
  element.className = '';
}

function hasClass(element, className) {
  return element.classList.contains(className);
}

function animateText(text) {
  const flashTextElement = document.getElementById('flashText');
  flashTextElement.textContent = text;
  flashTextElement.style.display = 'block';
  setTimeout(() => {
      flashTextElement.style.display = 'none';
  }, 10000);
}
