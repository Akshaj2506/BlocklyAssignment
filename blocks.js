const apples = document.querySelectorAll('.food-item');
const animals = document.querySelectorAll('.animal-item');
const outputDiv = document.getElementById('output-container');
const outputDivHeight = outputDiv.clientHeight;
const outputDivWidth = outputDiv.clientWidth;
let numOfApples;
Blockly.common.defineBlocksWithJsonArray([{
   "type": "foodcollector",
   "message0": "How many Elephants? %1 %2 %3 How many apples to collect? %4 %5 %6",
   "args0": [
      {
         "type": "field_image",
         "src": "elephant.png",
         "width": 35,
         "height": 35,
         "alt": "*",
         "flipRtl": false
      },
      {
         "type": "field_number",
         "name": "elephantnum",
         "value": 0,
         "min": 1,
         "max": 15
      },
      {
         "type": "input_value",
         "name": "elephant_counter"
      },
      {
         "type": "field_image",
         "src": "apple.png",
         "width": 30,
         "height": 30,
         "alt": "*",
         "flipRtl": false
      },
      {
         "type": "field_number",
         "name": "applenum",
         "value": 0,
         "min": 1,
         "max": 100
      },
      {
         "type": "input_value",
         "name": "food"
      }
   ],
   "colour": 300,
   "tooltip": "",
   "helpUrl": ""
}])

Blockly.JavaScript['foodcollector'] = function (block) {
   let numOfElephants = parseInt(block.getFieldValue('elephantnum'));
   numOfApples = parseInt(block.getFieldValue('applenum'));
   var code = `

      placeFoodItems(${numOfApples});
      placeAnimals(${numOfElephants});

      const animals = document.querySelectorAll('.animal-item');
      const apples = document.querySelectorAll('.food-item');
      
      if (apples.length > 0) {
         let moving = setInterval(move, 2000);

      }
      if (apples.length == 0) {
         clearInterval(moving);
         alert("All the apples have been eaten");
      }
      `
   return code;

}
const placeFoodItems = (foodCount) => {
   const scoreboard = document.createElement('div');
   scoreboard.id = "scoreboard";
   outputDiv.append(scoreboard);
   for (var i = 0; i < foodCount; i++) {
      const top = Math.floor((Math.random() * outputDivHeight) - 30);
      const left = Math.floor((Math.random() * outputDivWidth) - 30);
      const newFoodItem = document.createElement('div');
      newFoodItem.classList.add('food-item');
      outputDiv.append(newFoodItem);
      const styles = {
         'height': '30px',
         'width': '30px',
         'position': 'absolute',
         'top': top,
         'left': left,
         'background': "url('apple.png')",
         'background-position': 'center',
         'background-size': 'cover'
      }
      Object.assign(newFoodItem.style, styles);
   }
}

const placeAnimals = (animalCount) => {
   for (var i = 0; i < animalCount; i++) {
      const top = Math.floor((Math.random() * outputDivHeight) - 30);
      const left = Math.floor((Math.random() * outputDivWidth) - 30);
      const newAnimalItem = document.createElement('div');
      outputDiv.append(newAnimalItem);
      newAnimalItem.classList.add('animal-item');
      const styles = {
         'height': '50px',
         'width': '50px',
         'position': 'absolute',
         'top': top,
         'left': left,
         'background': "url('elephant.png')",
         'background-position': 'center',
         'background-size': 'cover',
         'z-index': '5'
      }
      Object.assign(newAnimalItem.style, styles);
   }
}

const move = () => {
   const animals = document.querySelectorAll('.animal-item');
   animals.forEach((animal) => {
      animal.style.top = `${(Math.random() * outputDivHeight) - 30}`;
      animal.style.left = `${(Math.random() * outputDivWidth) - 30}`;
      animal.style.transition = '3s';
   })
   checkCollision();
   document.getElementById('scoreboard').innerHTML = `${numOfApples - (document.querySelectorAll('.food-item').length)}`;

}

const checkCollision = () => {
   const animals = document.querySelectorAll('.animal-item');
   const apples = document.querySelectorAll('.food-item');
   for (var i = 0; i < animals.length; i++) {
      for (var j = 0; j < apples.length; j++) {
         let isOverlapping = !(
            animals[i].getBoundingClientRect().right < apples[j].getBoundingClientRect().left ||
            animals[i].getBoundingClientRect().left > apples[j].getBoundingClientRect().right ||
            animals[i].getBoundingClientRect().top > apples[j].getBoundingClientRect().bottom ||
            animals[i].getBoundingClientRect().bottom < apples[j].getBoundingClientRect().top
         )
         if (isOverlapping) {
            apples[j].remove();
         }
      }
   }
}