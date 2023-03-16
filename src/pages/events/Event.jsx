import React from 'react'

function Event() {
  return (
    <>
    
    <section className="events_wrapper bg-light">
		<div className="container">
			<form className="row g-3">
				<div className="col-sm-12 col-md-3">
					<input type="text" className="form-control" placeholder="Events Title" />
				</div>
				<div className="col-sm-12 col-md-3">
					<input type="text" className="form-control" placeholder="Events Location" />
				</div>
				<div className="col-sm-12 col-md-3">
					<input type="date" className="form-control" placeholder="Events title" />
				</div>
				<div className="col-sm-12 col-md-3">
					<button type="submit" className="main-btn">Search</button>
				</div>
			</form>
		</div>
	</section>

    <section className="events_wrapper p-3">
		<div className="container">
			<div className="row g-4">

				<div className="col-12 col-md-4">
					<div className="card h-100 border-dark mx-1">
						<div className="d-flex align-items-center justify-content-center">
							<img src="/assets/images/party.jpeg" alt="event" className="card-img-top" />
							<span className="price-section text-center">100$</span>
						</div>
						<div className="card-body align-items-center">
							<h4 className="card-title">Hello This is the</h4>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore veritatis minus,
								eum quo,
								praesentium facilis ad vero autem deleniti similique, a esse nam blanditiis.
							</p>
						</div>
						<div className="card-footer text-center d-flex p-3">
							<div className="col-4">
								<i className="text-danger fas fa-heart fa-2x"></i>
							</div>
							<div className="col-4">
								<a href="">See More</a>
							</div>
							<div className="col-4">
								<i className="fas fa-plus fa-2x"></i>
							</div>
						</div>
					</div>
				</div>

				<div className="col-12 col-md-4">
					<div className="card h-100 border-dark mx-1">
						<img src="/assets/images/eminem.png" alt="event" className="card-img-top" />
						<div className="card-body text-center">
							<h4 className="card-title">Hello This is the</h4>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore veritatis minus,
								eum quo,
								praesentium facilis ad vero autem deleniti similique, a esse nam blanditiis.
							</p>
						</div>
						<div className="card-footer text-center d-flex p-3">
							<div className="col-4">
								<i className="text-danger fas fa-heart fa-2x"></i>
							</div>
							<div className="col-4">
								<a href="">See More</a>
							</div>
							<div className="col-4">
								<i className="fas fa-plus fa-2x"></i>
							</div>
						</div>

					</div>
				</div>

				<div className="col-12 col-md-4 ">
					<div className="card h-100 border-dark mx-1">
						<img src="/assets/images/party.jpeg" alt="event" className="card-img-top" />
						<div className="card-body text-center">
							<h4 className="card-title">Hello This is the</h4>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore veritatis minus,
								eum quo,
								praesentium facilis ad vero autem deleniti similique, a esse nam blanditiis.
							</p>
						</div>
						<div className="card-footer text-center d-flex p-3">
							<div className="col-4">
								<i className="text-danger fas fa-heart fa-2x"></i>
							</div>
							<div className="col-4">
								<a href="">See More</a>
							</div>
							<div className="col-4">
								<i className="fas fa-plus fa-2x"></i>
							</div>
						</div>

					</div>
				</div>

				<div className="col-12 col-md-4 ">
					<div className="card h-100 border-dark mx-1">
						<img src="/assets/images/party.jpeg" alt="event" className="card-img-top" />
						<div className="card-body text-center">
							<h4 className="card-title">Hello This is the</h4>
							<p className="card-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore veritatis minus,
								eum quo,
								praesentium facilis ad vero autem deleniti similique, a esse nam blanditiis.
							</p>
						</div>
						<div className="card-footer text-center d-flex p-3">
							<div className="col-4">
								<i className="text-danger fas fa-heart fa-2x"></i>
							</div>
							<div className="col-4">
								<a href="">See More</a>
							</div>
							<div className="col-4">
								<i className="fas fa-plus fa-2x"></i>
							</div>
						</div>

					</div>
				</div>


			</div>
		</div>
	</section>
    
    </>
  )
}

export default Event