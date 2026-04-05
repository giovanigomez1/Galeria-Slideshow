import { useEffect, useState } from "react"
import imageData from '../data/data2.json'
import leftArr from '../assets/shared/icon-back-button.svg'
import rightArr from '../assets/shared/icon-next-button.svg'
import viewImg from '../assets/shared/icon-view-image.svg'
import ProgressBar from "./ProgressBar"



export default function SlideShow({ goToSlide, jumpToSlide }) {

  const [slideGallery, setSlideGallery] = useState([])
  useEffect(() => {
    setSlideGallery(imageData)
  }, [])




  const currentSlide = slideGallery.filter(slide => slide.name === goToSlide)[0]


  console.log(slideGallery.length)

  let currSlideInd = slideGallery.findIndex(ele => ele.name === currentSlide?.name) + 1
  const progressBar = ((100 / slideGallery.length) * currSlideInd).toFixed(0)

  console.log(currSlideInd)

  function getNextSlide() {
    if (currSlideInd > slideGallery.length - 1) return
    const next = slideGallery[currSlideInd]
    jumpToSlide(next.name)
  }


  function getPrevSlide() {
    if (currSlideInd === 1) return
    const prev = slideGallery[currSlideInd - 2]
    jumpToSlide(prev.name)

  }





  return (
    <>
      <div className="slideShow container">
        <div className="slideShow__detail">
          <div className="slideShow__detail--picture">
            <div className="image">
              <img src={currentSlide?.images.hero.large} alt="" />
            </div>
            <div className="title">
              <div className="title__cont">
                <h2>{currentSlide?.name}</h2>
                <h3>{currentSlide?.artist.name}</h3>
              </div>
            </div>
            <div className="autor">
              <img src={currentSlide?.artist.image} alt="" />
            </div>
            <div className="viewImage">
              <img src={viewImg} alt="" />
              <p>View Image</p>
            </div>
          </div>
          <div className="slideShow__detail--desc">
            <div className="year">
              <p>{currentSlide?.year}</p>
            </div>
            <div className="description">
              <p>{currentSlide?.description}</p>
              <p>Go to source</p>
            </div>

          </div>
        </div>
      </div>
      <div className="controls">
        <div className="controls__bar">
          <ProgressBar
            bgcolor='black'
            progress={`${progressBar}`}
            height='10'
          />
        </div>

        <div className="controls__inf">
          <h3>{currentSlide?.name}</h3>
          <p>{currentSlide?.artist.name}</p>
        </div>
        <div className="controls__btns">
          <button
            disabled={currSlideInd === 1 ? true : false}
            onClick={getPrevSlide}
            className={`${currSlideInd === 1 ? 'dissabled' : ''}`}
          >
            <img src={leftArr} alt="" />
          </button>
          <button
            disabled={currSlideInd === slideGallery.length}
            onClick={getNextSlide}
            className={`${currSlideInd === slideGallery.length ? 'dissabled' : ''}`}
          >
            <img src={rightArr} alt="" />
          </button>
        </div>

      </div>
    </>
  )
}


// 