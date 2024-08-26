import { on, showUI } from '@create-figma-plugin/utilities'
import { InsertCodeHandler } from './types'

export default function () {
  on('RESIZE_WINDOW', function (windowSize: { width: number; height: number }) {
    const { width, height } = windowSize
    figma.ui.resize(width, height)
  })

  on<InsertCodeHandler>('INSERT_CODE', async function (code: string) {
    //console.log('main.ts code:', code)
    eval(code)
  })

  showUI({ 
    height: 530, 
    width: 640,
    title: 'Bricks for Figma'
  })
}
