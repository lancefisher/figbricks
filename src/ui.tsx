import '!prismjs/themes/prism.css'

import {
  Button,
  Container,
  render,
  VerticalSpace,
  useWindowResize,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import * as Blockly from 'blockly/core';
import { useBlocklyWorkspace } from 'react-blockly'
import { javascriptGenerator } from 'blockly/javascript';
import { toolboxCategories } from './blockly-toolbox'

import '!./styles.css'

import { InsertCodeHandler } from './types'

function Plugin() {

  function onWindowResize(windowSize: { width: number; height: number }) {
    emit('RESIZE_WINDOW', windowSize)
  }

  useWindowResize(onWindowResize, {
    minWidth: 120,
    minHeight: 120,
    maxWidth: 800,
    maxHeight: 800
  })
  const initialXml =
  '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';

  const [code, setCode] = useState('')

  const workspaceDidChange = useCallback((workspace: any) => {
    //Blockly.svgResize(workspace);
    console.log('workspaceDidChange', workspace)

    const generatedCode = javascriptGenerator.workspaceToCode(workspace)
    setCode(generatedCode)
  }, [])

  const handleRunClick = useCallback(() => {
    //console.log(Blockly.serialization.workspaces.save(Blockly.getMainWorkspace()))
    emit<InsertCodeHandler>('INSERT_CODE', code)
  }, [code])

  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxCategories,
    initialXml: initialXml,
    workspaceConfiguration: {
      grid: {
        spacing: 20,
        length: 3,
        colour: "#ccc",
        snap: true,
      },
    },
    onWorkspaceChange: workspaceDidChange,
  });

  return (
    <Container space="medium">
      <Button onClick={handleRunClick}>Run</Button>
      <div ref={blocklyRef} style={{width: '610px', height: '480px'}} />
    </Container>
  )

}

export default render(Plugin)
