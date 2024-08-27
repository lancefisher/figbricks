//@ts-nocheck
import * as Blockly from 'blockly/core';
import {javascriptGenerator, Order} from 'blockly/javascript';

const logBlock = {
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

function logGenerator(block) {
  const value_name = javascriptGenerator.valueToCode(block, 'NAME', Order.ATOMIC);
  const code = `
  console.log(${value_name});
  `;
  return code;
}

export { logBlock, logGenerator }