const outputDiv = document.getElementById('output-container');
const outputDivHeight = outputDiv.clientHeight;
const outputDivWidth = outputDiv.clientWidth;
let foodCoordinates;
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
         "max": 5
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

Blockly.JavaScript['foodcollector'] = function(block) {
   let numOfElephants = parseInt(block.getFieldValue('elephantnum'));
   let numOfApples = parseInt(block.getFieldValue('applenum'));
   var code = `
      const placeFoodItems = (foodCount) => {
         foodCoordinates = [];
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
               'background' : "url('apple.png')",
               'background-position': 'center',
               'background-size': 'cover'
            }
            Object.assign(newFoodItem.style, styles);
            var rect = newFoodItem.getBoundingClientRect();
            foodCoordinates.push({
               'top': Math.floor(rect.top),
               'left': Math.floor(rect.left),
               'bottom': Math.floor(rect.bottom),
               'right': Math.floor(rect.right)
            });
         }
         console.log(foodCoordinates);
      }

      const placeAnimals = (animalCount) => {
         for (var i = 0; i < animalCount; i++) {
            const top = Math.floor((Math.random() * outputDivHeight) - 30);
            const left = Math.floor((Math.random() * outputDivWidth) - 30);
            const newAnimalItem = document.createElement('div');
            outputDiv.append(newAnimalItem);
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
      
      placeFoodItems(${numOfApples});
      placeAnimals(${numOfElephants});
      `
      return code;
}

// var animalPosition = newAnimalItem.getBoundingClientRect();
// checkCollision({
//    left: animalPosition.left,
//    right: animalPosition.right,
//    top: animalPosition.top,
//    bottom: animalPosition.bottom
// })

// const checkCollision = (animalPosition) => {
//    const left = animalPosition.left;
//    const right = animalPosition.right;
//    const top = animalPosition.top;
//    const bottom = animalPosition.bottom;
//    const foodItems = document.querySelectorAll('.food-item');
   
//    for (var i = 0; i < foodCoordinates.length; i++) {
//       let isOverlapping = !(
//          left > element.right ||
//          right < element.left ||
//          bottom < element.top ||
//          top > element.bottom
//       );
//       if (isOverlapping) {
//          foodItems[i].remove();
//       }
//    }
// }