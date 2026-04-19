import { useEffect, useState } from "react"
import imageData from '../data/data.json'

export default function GalleryList({ handleGoToSlide }) {

  const [gallery, setGallery] = useState([])
  useEffect(() => {
    setGallery(imageData)
  }, [])
  return (
    <div className="gallery container">
      <ul className="gallery__cont">
        {gallery.map((ele) => {
          return (
            <li className="gallery__cont--ele" onClick={() => handleGoToSlide(ele.name)} key={ele.name}>
              <div className="img">
                <div className="gallery__cont-ele_img">
                  <img src={ele.images.gallery} alt="" />
                </div>
                <div className="gallery__cont--ele_inf">
                  <p>{ele.name}</p>
                  <h3>{ele.artist.name}</h3>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
