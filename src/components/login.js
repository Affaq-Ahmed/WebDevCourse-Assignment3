import React from "react";
import { useGlobalContext } from "./context.js";
import "./styles.css";

export default function Login() {
	const { isLoginOpen, closeLogin } = useGlobalContext();
  const { openSignup } = useGlobalContext();

  const clickSignup = () => {
    closeLogin();
    openSignup()
  }
	return (
		<div
			className={`${
				isLoginOpen
					? "modal-overlay show-modal modal d-block"
					: "modal-overlay "
			}`}
			tabIndex="-1"
			role="dialog"
			id="modalSignin"
		>
			<div className="modal-dialog">
				<div className="modal-content shadow">
					<div className="modal-header p-4 border-bottom-0">
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={closeLogin}
						></button>
					</div>
					<div className="d-block mb-3 mx-auto">
						<img
							src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo.svg"
							alt="logo-img"
						/>
					</div>
					<div className="d-block mb-3  mx-auto">
						<h5 className="fw-bold">Welcome Back</h5>
					</div>

					<div className="modal-body p-5 pt-0">
						<form className="">
							<button
								className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4"
								type="submit"
							>
								<svg className="bi me-1" width="16" height="16"></svg>
								Login with Facebook
							</button>
							<hr className="my-4"></hr>
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control rounded-4"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label htmlFor="floatingInput">Email address</label>
							</div>
							<div className="form-floating mb-3">
								<input
									type="password"
									className="form-control rounded-4"
									id="floatingPassword"
									placeholder="Password"
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>
							<button
								className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
								type="submit"
							>
								Log In
							</button>
							<hr className="my-4" />
							<p>
								Don't have an account?{" "}
								<a
									href="?"
									className="tooltip-test"
									title="Tooltip"
									onClick={clickSignup}
								>
									Sign up
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
