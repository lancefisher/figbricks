//@ts-nocheck
import * as Blockly from 'blockly/core';
import {javascriptGenerator, Order} from 'blockly/javascript';


// Create Rect
const createRectBlock = {
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

function createRectGenerator(block) {
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

export { createRectBlock, createRectGenerator }
