Blockly.common.defineBlocksWithJsonArray([{
   "type": "circle",
   "message0": "createCircle %1 width %2 length %3 %4 color %5 %6 top %7 left %8 %9",
   "args0": [
      {
         "type": "input_value",
         "name": "measurements"
      },
      {
         "type": "field_number",
         "name": "width",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "length",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "size",
         "align": "CENTRE"
      },
      {
         "type": "field_colour",
         "name": "color",
         "colour": "#ff0000"
      },
      {
         "type": "input_value",
         "name": "colors",
         "align": "CENTRE"
      },
      {
         "type": "field_number",
         "name": "top",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "left",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "position",
         "align": "CENTRE"
      }
   ],
   "previousStatement": null,
   "nextStatement": null,
   "colour": 230,
   "tooltip": "",
   "helpUrl": ""
},
{
   "type": "rectangle",
   "message0": "createRectangle %1 width %2 length %3 %4 color %5 %6 top %7 left %8 %9",
   "args0": [
      {
         "type": "input_value",
         "name": "measurements"
      },
      {
         "type": "field_number",
         "name": "width",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "length",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "NAME",
         "align": "CENTRE"
      },
      {
         "type": "field_colour",
         "name": "color",
         "colour": "#ff0000"
      },
      {
         "type": "input_value",
         "name": "colors",
         "align": "CENTRE"
      },
      {
         "type": "field_number",
         "name": "top",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "left",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "position",
         "align": "CENTRE"
      }
   ],
   "previousStatement": null,
   "nextStatement": null,
   "colour": 180,
   "tooltip": "",
   "helpUrl": ""
},
{
   "type": "triangle",
   "message0": "createTriangle %1 width %2 length %3 %4 color %5 %6 top %7 left %8 %9",
   "args0": [
      {
         "type": "input_value",
         "name": "measurements"
      },
      {
         "type": "field_number",
         "name": "width",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "length",
         "value": 50,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "size",
         "align": "CENTRE"
      },
      {
         "type": "field_colour",
         "name": "color",
         "colour": "#ff0000"
      },
      {
         "type": "input_value",
         "name": "colors",
         "align": "CENTRE"
      },
      {
         "type": "field_number",
         "name": "top",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "field_number",
         "name": "left",
         "value": 0,
         "min": 0,
         "max": 1000
      },
      {
         "type": "input_value",
         "name": "position",
         "align": "CENTRE"
      }
   ],
   "previousStatement": null,
   "nextStatement": null,
   "colour": 90,
   "tooltip": "",
   "helpUrl": ""
}])
Blockly.JavaScript['rectangle'] = function(block) {
   var width = block.getFieldValue('width');
   var height = block.getFieldValue('length');
   var color = block.getFieldValue('color');
   var top = block.getFieldValue('top');
   var left = block.getFieldValue('left');
   var code = `
   var newDiv = document.createElement('div');
   var container = document.getElementById('output-container');
   container.append(newDiv); 
   var styles = {
      'width' : ${width},
      'height': ${height},
      'position': 'absolute',
      'top': ${top},
      'left': ${left}
   };
   Object.assign(newDiv.style,styles);
   newDiv.style.backgroundColor = "${color}";\n`

   console.log(code);
   return code;
}
Blockly.JavaScript['circle'] = function(block) {
   var width = block.getFieldValue('width');
   var height = block.getFieldValue('length');
   var color = block.getFieldValue('color');
   var top = block.getFieldValue('top');
   var left = block.getFieldValue('left');
   var code = `
   var newDiv = document.createElement('div');
   var container = document.getElementById('output-container');
   container.append(newDiv); 
   var styles = {
      'width' : ${width},
      'height': ${height},
      'position': 'absolute',
      'border-radius': '100%',
      'top': ${top},
      'left': ${left}
   };
   Object.assign(newDiv.style,styles);
   newDiv.style.backgroundColor = "${color}";\n`

   console.log(code);
   return code;
}
Blockly.JavaScript['triangle'] = function(block) {
   var base = block.getFieldValue('width');
   var sides = block.getFieldValue('length');
   var color = block.getFieldValue('color');
   var top = block.getFieldValue('top');
   var left = block.getFieldValue('left');
   var code = 
   `var newTriangle = document.createElement('div');
   var container = document.getElementById('output-container');
   container.append(newTriangle); 
   var styles = {
      'border-left': '${sides}px solid transparent',
      'border-right': '${sides}px solid transparent',
      'position': 'absolute',
      'top': ${top},
      'left': ${left}
   };
   Object.assign(newTriangle.style, styles);
   newTriangle.style.borderBottom = "${base}px solid ${color}";\n`;

   console.log(code);
   return code;
}
