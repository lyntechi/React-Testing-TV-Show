import React from 'react'
import Episodes from './components/Episodes.js'





test('renders episodes when data fetch finishes', ()=>{
    const {rerender}= render(<Episodes episodes={[]}/>)
})