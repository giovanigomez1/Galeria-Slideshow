import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import GalleryList from "./components/GalleryList"
import SlideShow from "./components/SlideShow"





function App() {

  const navigate = useNavigate()
  const [goToSlide, setGoToSlide] = useState("")
  const [openSlide, setOpenSlide] = useState(true)
  const [slideInx, setSlideInx] = useState(0)

  function handleGoToSlide(slide) {
    setGoToSlide(slide)
    setOpenSlide(!openSlide)
    if (openSlide) {
      navigate('/slide')
    } else {
      navigate('/')
    }
  }

  function jumpToSlide(slide) {
    setGoToSlide(slide)
  }




  return (
    <>
      <Header openSlide={openSlide} handleGoToSlide={handleGoToSlide} />
      <Routes>
        <Route path="/" element={<GalleryList handleGoToSlide={handleGoToSlide} />} />
        <Route path="/slide" element={<SlideShow goToSlide={goToSlide} jumpToSlide={jumpToSlide} />} />
      </Routes>
    </>
  )
}

export default App
