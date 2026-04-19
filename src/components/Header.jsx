import logo from '../../public/assets/shared/logo.svg'

export default function Header({ openSlide, handleGoToSlide }) {
  return (
    <header className="header container">
      <div className="header__in">
        <div className="header__in--logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__in--start">
          <button onClick={() => handleGoToSlide('Starry Night')} >
            {openSlide ? "Start Slideshow" : "Stop Slideshow"}
          </button>
        </div>
      </div>
    </header>
  )
}