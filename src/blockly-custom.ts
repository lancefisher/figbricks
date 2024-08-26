// @ts-nocheck
import * as Blockly from 'blockly/core';
import {javascriptGenerator, Order} from 'blockly/javascript';

// See: https://google.github.io/blockly-samples/examples/developer-tools/index.html

// Log
const log = {
  init: function() {
    this.appendValueInput('NAME')
      .appendField('log');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({ log: log })
javascriptGenerator.forBlock['log'] = function(block) {
  const value_name = javascriptGenerator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `
  console.log(${value_name});
  `;
  return code;
}

// Create Rect
const createRect = {
  init: function() {
    this.appendValueInput('NAME')
    .setCheck('String')
      .appendField('Create Rect, named');
    this.appendValueInput('X')
      .appendField('X');
    this.appendValueInput('Y')
    .setCheck('Number')
      .appendField('Y');
    this.appendValueInput('W')
    .setCheck('Number')
      .appendField('W');
    this.appendValueInput('H')
    .setCheck('Number')
      .appendField('H');
    this.appendValueInput('FILL')
    .setCheck('String')
      .appendField('Fill');
    this.setInputsInline(false)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Creates a rectangle');
    this.setHelpUrl('');
    this.setColour('#1ABCFE');
  }
};
Blockly.common.defineBlocks({createRect: createRect});

javascriptGenerator.forBlock['createRect'] = function(block) {
  const value_name = javascriptGenerator.valueToCode(block, 'NAME', Order.ATOMIC);
  const value_x = javascriptGenerator.valueToCode(block, 'X', Order.ATOMIC);
  const value_y = javascriptGenerator.valueToCode(block, 'Y', Order.ATOMIC);
  const value_w = javascriptGenerator.valueToCode(block, 'W', Order.ATOMIC);
  const value_h = javascriptGenerator.valueToCode(block, 'H', Order.ATOMIC);
  const value_fill = javascriptGenerator.valueToCode(block, 'FILL', Order.ATOMIC);
  let code = `
  const rect = figma.createRectangle();
  rect.name = ${value_name};
  rect.x = ${value_x};
  rect.y = ${value_y};
  rect.resize(${value_w}, ${value_h});
  rect.fills = [figma.util.solidPaint(${value_fill})];
  figma.currentPage.appendChild(rect);
  `;
  return code;
}
