import { useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import GalleryList from "./components/GalleryList"
import SlideShow from "./components/SlideShow"

function App() {
  const navigate = useNavigate()
  const [goToSlide, setGoToSlide] = useState("")
  const [openSlide, setOpenSlide] = useState(true)

  function handleGoToSlide(slide) {
    const slug = slide.toLowerCase().replace(/\s+/g, "-");
    setGoToSlide(slide)
    setOpenSlide(!openSlide)
    if (openSlide) {
      navigate(`/slide/${slug}`)
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <Header openSlide={openSlide} handleGoToSlide={handleGoToSlide} />
      <Routes>
        <Route path="/" element={<GalleryList handleGoToSlide={handleGoToSlide} />} />
        <Route path="/slide/:name" element={<SlideShow goToSlide={goToSlide} />} />
      </Routes>
    </>
  )
}
export default App
