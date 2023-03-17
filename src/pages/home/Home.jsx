import './Home.css';

function Home() {
  return (
    <>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center text-lg-start order-lg-1 order-2">
              <h1><span>Book</span><br />  GO <br /> <span className="text-danger">Enjoy</span> </h1>
              <p>Get 15% flat discount on your first booking</p>

              <a className="main-btn mt-4" href="#">View Events</a>
            </div>
            <div className="col-lg-9 order-lg-2 order-1">
              <img src="/assets/images/newbg.png" className="img-fluid w-100" />
            </div>
          </div>
          <div className="row top-menu mt-5">
            <div className="col-lg-3 col-sm-6  mb-4">
              <div className="card">
                <img src="/assets/images/Menu/menu-1.jpg" alt="menu" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  mb-4">
              <div className="card">
                <img src="/assets/images/Menu/menu-2.jpg" alt="menu" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  mb-4">
              <div className="card">
                <img src="/assets/images/Menu/menu-3.jpg" alt="menu" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6  mb-4">
              <div className="card">
                <img src="/assets/images/Menu/menu-4.jpg" alt="menu" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 mb-4 mb-lg-0 order-lg-1 order-2">
              <div className="card rounded-0">
                <div className="card-body pt-5">
                  <h3>Why EventVerse?</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae, quasi esse hic rem voluptatibus dicta
                     ratione error veritatis. Nihil perspiciatis harum perferendis rerum officiis dolor  </p>

                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 mb-4 mb-lg-0 order-lg-2 order-1">
              <img src="/assets/images/bg2.jpg" className="img-fluid" alt="About Us" />
            </div>

          </div>
        </div>
      </section>


      <section id="menu" className="menu_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> Fresh Events</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> This Event</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> That Event</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> Band Special</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> Music Fest</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <h3 className='text-center'> An another one</h3>
                  <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                    to start editing the text.</p>
                  <a href="#" className="main-btn mt-4">Learn More</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="offers_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-4">
              <h2>Trending Events</h2>
              <p>Here are the most liked and viewed events from past week<br className="d-none d-md-block" />
                Check it out !!!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card rounded-0" style={{ backgroundImage: `url('/assets/images/party.jpeg')` }}>
                <div className="offer-text bg-opacity-50">
                  <h3>Grand Music Fest</h3>
                  <p className='fw-bold'><i className='fa fa-map-marker'></i> Kathmandu</p>
                  <p className="likes_count"> <i className="fas fa-heart fa-xl"> 
                    <span>1</span>
                    <span>2</span>
                    <span>7</span>
                    <span>4</span>
                  </i> </p>
                  <a href="#" className="main-btn mt-3"> Details </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Home