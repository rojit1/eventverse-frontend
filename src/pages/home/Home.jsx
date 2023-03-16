import React from 'react'

function Home() {
  return (
    <>
    <section id="home" className="banner_wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 text-center text-lg-start order-lg-1 order-2">
            <h1><span>Book</span><br/>  GO <br /> <span className="text-danger">Enjoy</span> </h1>
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
                <p>We have got the most shitty events in the town. But you must like it beacuse you are asdas asdasdf dsaf j wf  wi w 
                  w jwii  wj wiw  jiwei  wj iew i  eewrfje  ajwewi  wei weir  fdsjf afdsf dsf sadfdsf asdfs fdsfddfd asdfdsfasfd dee dsf dfsf </p>

                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 mb-4 mb-lg-0 order-lg-2 order-1">
            <img src="/assets/images/logo2.png" className="img-fluid rounded-circle" alt="About Us" />
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
                <h3><span className="fst-italic">01</span> Fresh Food</h3>
                <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                  to start editing the text.</p>
                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <h3><span className="fst-italic">02</span> Dinner Meals</h3>
                <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                  to start editing the text.</p>
                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <h3><span className="fst-italic">03</span> Classic Menu</h3>
                <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                  to start editing the text.</p>
                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <h3><span className="fst-italic">04</span> Chef's Special</h3>
                <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                  to start editing the text.</p>
                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <h3><span className="fst-italic">05</span> Pasta & Pizza</h3>
                <p className="fst-italic">Sample text. Click to select the text box. Click again or double click
                  to start editing the text.</p>
                <a href="#" className="main-btn mt-4">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div className="card-body text-md-start text-center">
                <h3><span className="fst-italic">06</span> Vegan Dishes</h3>
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
            <div className="card rounded-0" style={{backgroundImage:`url('/assets/images/party.jpeg')`}}>
              <div className="offer-text bg-black bg-opacity-50">
                <h3 className="text-white">Prty yuh hi chalegi</h3>
                <p className="text-danger"> <i className="fas fa-heart fa-xl"> 103 k</i> </p>
                <a href="#" className="main-btn mt-3"> Details </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card rounded-0" style={{backgroundImage:`url('/assets/images/party.jpeg')`}}>
              <div className="offer-text bg-black bg-opacity-50">
                <h3 className="text-white">Party hori hai</h3>
                <p className="text-danger"> <i className="fas fa-heart fa-xl"> 100 k</i> </p>
                <a href="#" className="main-btn mt-3"> Details </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card rounded-0" style={{backgroundImage:`url('/assets/images/party.jpeg')`}}>
              <div className="offer-text bg-black bg-opacity-50">
                <h3 className="text-white">Double Burger</h3>
                <p className="text-danger"> <i className="fas fa-heart fa-xl"> 100 k</i> </p>
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