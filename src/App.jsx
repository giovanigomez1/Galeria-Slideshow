import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Header from "./components/Header"
import GalleryList from "./components/GalleryList"
import SlideShow from "./components/SlideShow"

function App() {
  const navigate = useNavigate()
  const [openSlide, setOpenSlide] = useState(true)

  useEffect(() => {
    const url = window.location.href.split('/')
    if (url.length > 4) {
      setOpenSlide(false)
    }
  })
  function handleGoToSlide(slide) {
    const slug = slide.toLowerCase().replace(/\s+/g, "-");
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
        <Route path="/slide/:name" element={<SlideShow />} />
      </Routes>
    </>
  )
}
export default App
