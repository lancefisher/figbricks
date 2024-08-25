import '!prismjs/themes/prism.css'

import {
  Button,
  Container,
  render,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h, RefObject } from 'preact'
import { useCallback, useEffect, useRef, useState } from 'preact/hooks'

import { useBlocklyWorkspace } from 'react-blockly'
import { javascriptGenerator } from 'blockly/javascript';
import { toolboxCategories } from './blockly-custom'
import { InsertCodeHandler } from './types'

//import styles from './styles.css'

function Plugin() {
  // const handleInsertCodeButtonClick = useCallback(
  //   function () {
  //     console.log('todo')
  //     //emit<InsertCodeHandler>('INSERT_CODE', code)
  //   },
  //   [code]
  // )

  const initialXml =
  '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const workspaceDidChange = useCallback((workspace: any) => {
    const code = javascriptGenerator.workspaceToCode(workspace);
    emit<InsertCodeHandler>('INSERT_CODE', code)
  }, [])

  const handleRunClick = useCallback(() => {
    console.log('Run clicked')
  }, [])

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
    <div>
      <div>
        <button onClick={handleRunClick}>Run</button>
      </div>
      <div ref={blocklyRef} />
    </div>

  )
}

export default render(Plugin)
