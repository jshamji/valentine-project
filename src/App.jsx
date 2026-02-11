import './App.css'
import { useRef } from 'react'
import pic1 from "./IMG_3076.jpeg";
import pic2 from "./IMG_7814.jpeg"
import Confetti from 'react-confetti'
import { useState } from 'react';
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



function App() {

  const noButtonRef = useRef(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [open, setOpen] = useState(false)

  const handleNoHover = () => {
    const button = noButtonRef.current

    const buttonWidth = button.offsetWidth
    const buttonHeight = button.offsetHeight

    const maxWidth = window.innerWidth - buttonWidth
    const maxHeight = window.innerHeight - buttonHeight

    const randomX = Math.floor(Math.random() * maxWidth)
    const randomY = Math.floor(Math.random() * maxHeight)

    button.style.left = `${randomX}px`
    button.style.top = `${randomY}px`
  }
  const handleYesClick = () => {
    setShowConfetti(true)
    setOpen(true)

    setTimeout(() => setShowConfetti(false), 5000)
  }

  const handleClose = () => {
    setOpen(false)
  }
  

  return (
    <div className="app">
      {showConfetti && <Confetti
  width={window.innerWidth}
  height={window.innerHeight}
/>}

      <img src={pic1} width="250" height="300" />
    
    <h1>Will you be my valetine my NUMS (S for Shamji don't forget 😁)?????</h1>    

    <div className='buttons'>

      <button className="never-move" onClick={handleYesClick}>Yes</button>
      <button ref={noButtonRef}
        onMouseEnter={handleNoHover}
        className="always-move">No</button>
    </div>

  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="celebration-title"
        aria-describedby="celebration-description"
      >
        <Box sx={modalStyle}>
          <Typography id="celebration-title" variant="h4" component="h2">
            VAMOSSSSSS 😁
          </Typography>

          <Typography id="celebration-description" sx={{ mt: 2 }}>
            Count yourself as a lucky gyal - just joking you've made my day MY UFFERSSSSS 💙🤍
          </Typography>

          <img
            src={pic2}
            alt="Celebration"
            style={{
              width: '80%',
              borderRadius: '12px',
              marginTop: '20px',
            }}
          />

          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default App

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
  textAlign: 'center',
}