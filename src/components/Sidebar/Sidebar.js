import "./Sidebar.css";

export function Sidebar() {
  return (
		<div className="Sidebarcontainer">
			<div className="container-fluid">
				<div className="row">
					<div className="col-3 d-sm-none d-md-none d-lg-block">
						<div className="rs1">
							<p className="h5 "> My recent searches</p>
						</div>

						<br />

						<div>
							<p className="h5 "> Filter by:</p>
						</div>
						<br />
						<strong>
							<p className="h5 ">Budget</p>
						</strong>
						<br />

						<div className="form-check ">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label className="form-check-label ">Fixed Price Project</label>
						</div>
						<div className="row mb-4">
							<div className="col-4 min max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="min"
								/>
							</div>
							<div className="col-2">
								<p className="text-center">to</p>
							</div>
							<div className="col-4 max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="max"
								/>
							</div>
						</div>

						<div className="form-check ">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label className="form-check-label ">Hourly Projects</label>
						</div>
						<div className="row mt-2 mb-4 ">
							<div className="col-4 min max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="min"
								/>
							</div>
							<div className="col-2">
								<p className="text-center">to</p>
							</div>
							<div className="col-4 max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="max"
								/>
							</div>
						</div>
						<div className="row mt-2 mb-4">
							<div className="col-sm-12">
								<div className="form-group">
									<label>All Durations</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
									>
										<option>Less than 1 week</option>
										<option>1 week to 4 week</option>
										<option>1 months to 3 months</option>
										<option>3 months to 6 months</option>
										<option>Unspecified</option>
									</select>
								</div>
							</div>
						</div>

						<div className="form-check ">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label className="form-check-label ">Contests</label>
						</div>
						<div className="row mt-2 mb-4 ">
							<div className="col-4 min max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="min"
								/>
							</div>
							<div className="col-2">
								<p className="text-center">to</p>
							</div>
							<div className="col-4 max">
								<input
									type="number"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="max"
								/>
							</div>
						</div>
						<hr />
						<div className="  mb-4 ">
							<p className="h5 ">Budget</p>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">Local Jobs</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">Featured Jobs</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">Recuriter Jobs</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">Full Time Jobs</label>
							</div>
							<hr />
						</div>
						<div className=" mb-4 ">
							<p className="h5 ">Skills</p>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">.NET 5.0/6</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">.NET</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">PHP</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">HTML</label>
							</div>
							<hr />
						</div>
						<div className=" mb-4 ">
							<p className="h5 ">Languages</p>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">English</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">Spanish</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">German</label>
							</div>
							<div className="form-check ">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
								<label className="form-check-label ">French</label>
							</div>
							<hr />
						</div>
						<div className=" mb-4 ">
							<p className="h5 ">Jobs</p>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="exampleRadios"
									id="exampleRadios1"
									value="option1"
									defaultChecked
								/>
								<label className="form-check-label">All open jobs</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="exampleRadios"
									id="exampleRadios2"
									value="option2"
								/>
								<label className="form-check-label">
									All open and closed jobs
								</label>
							</div>

							<hr />
						</div>
					</div>
					<div className="col col-9   d-md-block d-sm-block">
						<div className="row items">
							<div className="col-10 mb-2">
								<a href="?">
									<h5>
										Help us extract contact details for high-end watch dealers
									</h5>
								</a>
								<p>
									Hi there, we are The Watch Stand. We manufacture and sell
									accessories for high-end time pieces. We invented the iconic
									watch stand (now copied left and right unfortunately) almost
									five years ago and have since then broadened our range of
									products to include watch rolls, watch winders and trays as
									well. Check out to find out more. Our Instagram has 55 000
									followers but is currently offline for some reason Instagram
									won't tell us. It will be back soon though I'm sure. Being
									more or less a B2C company since start, we now want to try B2B
									in a more serious way than we have before. We want to build an
									index with postal address, email and phone numbers to
									authorized dealers of exclusive watches in order to promote
									our products to them at a wholesale price, starting with Rolex
									dealers ...
								</p>
								<div>
									<a className="m-2" href="?">
										Data Extraction
									</a>
									<a className="m-2" href="?">
										Data Scrapping
									</a>
									<a className="m-2" href="?">
										Web Scrapping
									</a>
								</div>

								<hr />
							</div>
							<div className="col-2">
								<h5 className="mb-2">
									<strong>$750 - $1500</strong>
								</h5>
								<p>0 bids</p>
							</div>
						</div>
						<div className="row items">
							<div className="col-10 mb-2">
								<a href="?">
									<h5>
										Help us extract contact details for high-end watch dealers
									</h5>
								</a>
								<p>
									Hi there, we are The Watch Stand. We manufacture and sell
									accessories for high-end time pieces. We invented the iconic
									watch stand (now copied left and right unfortunately) almost
									five years ago and have since then broadened our range of
									products to include watch rolls, watch winders and trays as
									well. Check out to find out more. Our Instagram has 55 000
									followers but is currently offline for some reason Instagram
									won't tell us. It will be back soon though I'm sure. Being
									more or less a B2C company since start, we now want to try B2B
									in a more serious way than we have before. We want to build an
									index with postal address, email and phone numbers to
									authorized dealers of exclusive watches in order to promote
									our products to them at a wholesale price, starting with Rolex
									dealers ...
								</p>
								<div>
									<a className="m-2" href="?">
										Data Extraction
									</a>
									<a className="m-2" href="?">
										Data Scrapping
									</a>
									<a className="m-2" href="?">
										Web Scrapping
									</a>
								</div>

								<hr />
							</div>
							<div className="col-2">
								<h5 className="mb-2">
									<strong>$750 - $1500</strong>
								</h5>
								<p>0 bids</p>
							</div>
						</div>

						<div className="row items">
							<div className="col-10 mb-2">
								<a href="?">
									<h5>
										Help us extract contact details for high-end watch dealers
									</h5>
								</a>
								<p>
									Hi there, we are The Watch Stand. We manufacture and sell
									accessories for high-end time pieces. We invented the iconic
									watch stand (now copied left and right unfortunately) almost
									five years ago and have since then broadened our range of
									products to include watch rolls, watch winders and trays as
									well. Check out to find out more. Our Instagram has 55 000
									followers but is currently offline for some reason Instagram
									won't tell us. It will be back soon though I'm sure. Being
									more or less a B2C company since start, we now want to try B2B
									in a more serious way than we have before. We want to build an
									index with postal address, email and phone numbers to
									authorized dealers of exclusive watches in order to promote
									our products to them at a wholesale price, starting with Rolex
									dealers ...
								</p>
								<div>
									<a className="m-2" href="?">
										Data Extraction
									</a>
									<a className="m-2" href="?">
										Data Scrapping
									</a>
									<a className="m-2" href="?">
										Web Scrapping
									</a>
								</div>

								<hr />
							</div>
							<div className="col-2">
								<h5 className="mb-2">
									<strong>$750 - $1500</strong>
								</h5>
								<p>0 bids</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
