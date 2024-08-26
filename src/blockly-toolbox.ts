import './blockly-custom'

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
      name: "Text",
      colour: "#5CA68D",
      contents: [
        { kind: "block", type: "text" },
        { kind: "block", type: "text_join" },
        { kind: "block", type: "text_append" },
        { kind: "block", type: "text_length" },
        { kind: "block", type: "text_isEmpty" },
        { kind: "block", type: "text_indexOf" },
        { kind: "block", type: "text_charAt" },
        { kind: "block", type: "text_getSubstring" },
        { kind: "block", type: "text_changeCase" },
        { kind: "block", type: "text_trim" },
        { kind: "block", type: "text_print" },
        { kind: "block", type: "text_prompt_ext" },
      ]
    },
    {
      kind: 'category',
      name: 'Math',
      colour: '#5C68A6',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_trig' },
        { kind: 'block', type: 'math_constant' },
        { kind: 'block', type: 'math_number_property' },
        { kind: 'block', type: 'math_round' },
        { kind: 'block', type: 'math_on_list' },
        { kind: 'block', type: 'math_modulo' },
        { kind: 'block', type: 'math_constrain' },
        { kind: 'block', type: 'math_random_int' },
        { kind: 'block', type: 'math_random_float' },
        { kind: 'block', type: 'math_atan2' },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: "#5CA65C",
      contents: [
        { kind: "block", type: "controls_repeat_ext" },
        { kind: "block", type: "controls_whileUntil" },
        { 
          kind: "block", 
          type: "controls_for",
          inputs: {
                "FROM": {
                    "block": {
                        "type": "math_number",
                        "fields": {
                            "NUM": 0
                        }
                    }
                },
                "TO": {
                    "block": {
                        "type": "math_number",
                        "fields": {
                            "NUM": 5
                        }
                    }
                },
                "BY": {
                    "block": {
                        "type": "math_number",
                        "fields": {
                            "NUM": 1
                        }
                    }
                }
            }
        },
        { kind: "block", type: "controls_forEach" },
        { kind: "block", type: "controls_flow_statements" },
      ]
    },
    {
      kind: "category",
      name: "Variables",
      colour: "#A65C81",
      custom: "VARIABLE"
    },
    {
      kind: "category",
      name: "Figma",
      colour: "#1ABCFE",
      contents: [
        { 
          kind: "block",
          type: "log",
          "inputs": {
                "NAME": {
                    "block": {
                        "type": "text",
                        "fields": {
                            "TEXT": ""
                        }
                    }
                }
            }
        },
        { 
          kind: "block", 
          type: "createRect",
          inputs: {
            NAME: {
              block: {
                  type: "text",
                  fields: {
                      TEXT: "Rectangle 1"
                  }
              }
            },
            X: {
              block: { 
                type: "math_number", 
                fields: { "NUM": 200} 
              }
            },
            Y: {
              block: { 
                type: "math_number", 
                fields: { "NUM": -250} 
              }
            },
            W: {
              block: { 
                type: "math_number", 
                fields: { "NUM": 20} 
              }
            },
            H: {
              block: { 
                type: "math_number", 
                fields: { "NUM": 20} 
              }
            },
            FILL: {
              block: {
                  type: "text",
                  fields: {
                      TEXT: "#FF0000FF"
                  }
              }
            },
          }
        },
      ],
    },
  ],
}

export {toolboxCategories}