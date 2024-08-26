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
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const [code, setCode] = useState('')

  const workspaceDidChange = useCallback((workspace: any) => {
    const generatedCode = javascriptGenerator.workspaceToCode(workspace)
    setCode(generatedCode)
  }, [])

  const handleRunClick = useCallback(() => {
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
      <div ref={blocklyRef} />
    </Container>
  )

}

export default render(Plugin)
