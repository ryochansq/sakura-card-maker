import React from 'react'
import Button from '@material-ui/core/Button'
import './App.css'
// import html2canvas from 'html2canvas'

function App() {
  // setTimeout(() => {
  //   html2canvas(document.body).then(function (canvas) {
  //     document.body.appendChild(canvas)
  //   })
  //   console.info(document.body)
  // })
  return (
    <div className='App'>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      <Button id='hoge' variant='contained' color='primary'>
        Hello Sakura Gakuin!!
      </Button>
    </div>
  )
}

export default App
