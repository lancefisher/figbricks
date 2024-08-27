import '!prismjs/themes/prism.css'
import '!./styles.css'

import {
  Button,
  Container,
  render,
  useWindowResize,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'
import { InsertCodeHandler } from './types'

import { useBlocklyWorkspace } from 'react-blockly'
import { javascriptGenerator } from 'blockly/javascript';
import { toolboxCategories } from './blockly-config/blockly-toolbox'

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

  const [code, setCode] = useState('')

  const workspaceDidChange = useCallback((workspace: any) => {
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
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
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
