import React from 'react'

function EventDetail() {
  return (
    <section className="section_detail_wrapper mt-4">
		<div className="container">
			<div className="row mt-4">
				<div style={{ height:"400px" }}className="bg-warning">
				</div>
			</div>

			<div className="row g-4 mt-4">
				<div className="col-12 col-md-6">
					<div className="image-section w-100">
						<img src="/assets/images/dance.jpg" alt="image" className="w-100" />
					</div>
				</div>
				<div className="col-12 col-md-6">
					<div className="event-content">
						<h4 className="text-center">title</h4>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum, ratione a voluptas culpa accusantium
							dolores, autem ipsam soluta sint neque nemo modi tempore non expedita praesentium eius quasi odit
							voluptatibus officiis totam fugit perspiciatis dignissimos perferendis? Velit eos blanditiis a reiciendis
							molestiae?
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum, ratione a voluptas culpa accusantium
							dolores, iciis totam fugit perspiciatis dignissimos perferendis? Velit eos blanditiis a reiciendis
							molestiae?
						</p>
					</div>
				</div>
			</div>

		</div>
	</section>
  )
}

export default EventDetail