import "./Footer.css";

function Footer() {
  return (
		<div>
			<footer id="footer" className="footer-1">
				<div className="main-footer widgets-dark typo-light">
					<div className="container-fluid c1 text-light">
						<div className="row">
							<div className=" col-xs-12 col-sm-6 col-md-2 mb-3">
								<div className=" subscribe no-box ">
									<img
										className="FooterNew-logo-img"
										src="https://www.f-cdn.com/assets/img/footer/Freelancer-footer-logo-522454d7.svg"
										alt="Freelancer Logo"
										width="62"
										height="40"
										loading="lazy"
									></img>
									<h5 className="mt-4">English - US(International)</h5>
									<h5 className="mt-4">Help & Support</h5>
								</div>
							</div>

							<div className=" widget1 col-xs-12 col-sm-6 col-md-2">
								<div className="widget no-box">
									<h5 className="widget-title">
										Freelancers<span></span>
									</h5>
									<p className="mb-0">Categories</p>
									<p className="mb-0">Projects</p>
									<p className="mb-0">Contests</p>
									<p className="mb-0">Freelancers</p>
									<p className="mb-0">Enterprise</p>
									<p className="mb-0">API for developers</p>
								</div>
							</div>
							<div className=" widget1 col-xs-12 col-sm-6 col-md-2">
								<div className="widget no-box">
									<h5 className="widget-title">
										About<span></span>
									</h5>
									<p className="mb-0">About us</p>
									<p className="mb-0">How it works</p>
									<p className="mb-0">Security</p>
									<p className="mb-0">Investor</p>
									<p className="mb-0">Stories</p>
									<p className="mb-0">News</p>
								</div>
							</div>
							<div className=" col-xs-12 col-sm-6 col-md-2">
								<div className="widget no-box">
									<h5 className="widget-title">
										Terms<span></span>
									</h5>
									<p className="mb-0">Privacy</p>
									<p className="mb-0">Terms and Conditions</p>
									<p className="mb-0">Copyright Policy</p>
									<p className="mb-0">Code of conduct</p>
									<p className="mb-0">Fees and charges</p>
								</div>
							</div>

							<div className=" col-xs-12 col-sm-6 col-md-3">
								<div className="widget no-box">
									<h5 className="widget-title">
										Apps<span></span>
									</h5>
								</div>
							</div>
						</div>
						<hr />
						<div className="row">
							<div className="col-3">
								<p>
									<strong>58677222 </strong>Registered Users
								</p>
							</div>
							<div className="col-3">
								<p>
									<strong>58677222 </strong>Total Jobs Posted
								</p>
							</div>
							<div className="col-6">
								<p>
									Freelancer ® is a registered Trademark of Freelancer
									Technology Pty Limited (ACN 142 189 759)
								</p>
								<p>
									Copyright © 2022 Freelancer Technology Pty Limited (ACN 142
									189 759)
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
