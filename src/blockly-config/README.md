# Blockly Configuration

## Creating a custom block

A custom block needs three things:

1. The block definition - this controls the visual aspect of the block and what connectors it has.
2. The code generator - this creates the JavaScript code that is run based on the configuration of the block.
3. Inclusion in the toolbox - the blockly toolbox is on the left of the blockly canvas. You must include your block in the toolbox.

First, create a file in the [./blocks/](./blocks/) folder. 

e.g. `./blocks/createRect.ts` will contain the the block definition and generator for the `Create Rect` block.

### Blockly Block Creator
It is helpful to use the online tool to build your block.

See: https://google.github.io/blockly-samples/examples/developer-tools/index.html

Once you design your block with the visual editor, set the configuration for export:

Block definition format: [x] JavaScript
Blockly import format: [x] Import (esm/cjs)
Code generator language: [x] JavaScript

Then, copy the three code outputs, and place them in the file you just created.

We leave the semicolons and variable naming for easy updates.

However, move the registration of your block to the top of the [./blockly-toolbox.ts]([./blockly-toolbox.ts) file.

e.g. 

```TypeScript
Blockly.common.defineBlocks({createRect: createRectBlock });
javascriptGenerator.forBlock['createRect'] = createRectGenerator
```

Remove those lines from your block file, name your generator function, and export the block definition and generator instead.

e.g.

```JavaScript
export { createRectBlock, createRectGenerator }
```

> [!NOTE]
> You should also add `//@ts-nocheck` to the top of your block file.
