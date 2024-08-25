// @ts-nocheck
import * as Blockly from 'blockly/core';
import {javascriptGenerator, Order} from 'blockly/javascript';

// See: https://google.github.io/blockly-samples/examples/developer-tools/index.html


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
Blockly.common.defineBlocks({log: log});
                    
javascriptGenerator.forBlock['log'] = function(block) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_name = javascriptGenerator.valueToCode(block, 'NAME', Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = 'console.log("test from blockly");';
  return code;
}

const toolboxCategories = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: "#5C81A6",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
      ],
    },
    {
      kind: "category",
      name: "Math",
      colour: "#5CA65C",
      contents: [
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_number",
        },
      ],
    },
    {
      kind: "category",
      name: "Custom",
      colour: "#5CA699",
      contents: [
        {
          kind: "block",
          type: "log",
        }
      ],
    },
  ],
}

export {toolboxCategories}