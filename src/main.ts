import { loadFontsAsync, on, showUI } from '@create-figma-plugin/utilities'

import { InsertCodeHandler } from './types'

export default function () {
  on<InsertCodeHandler>('INSERT_CODE', async function (code: string) {

    // const text = figma.createText()
    // await loadFontsAsync([text])
    // text.characters = code
    // figma.currentPage.selection = [text]
    // figma.viewport.scrollAndZoomIntoView([text])
    // figma.closePlugin()

    //console.log('main.ts code:', code)

    eval(code)
    //eval('console.log("test eval");')
  })
  showUI({ 
    height: 500, 
    width: 640,
    title: 'FigBlocks'
  })
}
