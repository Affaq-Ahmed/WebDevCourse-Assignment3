import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isLoginOpen, setIsLoginOpen] = useState(false);
	const [isSignupOpen, setIsSignupOpen] = useState(false);

	const openSignup = () => {
		setIsSignupOpen(true);
	};
	const closeSignup = () => {
		setIsSignupOpen(false);
	};
	const openLogin = () => {
		setIsLoginOpen(true);
		console.log("open");
	};
	const closeLogin = () => {
		setIsLoginOpen(false);
		console.log("close");
	};

	return (
		<AppContext.Provider
			value={{
				isLoginOpen,
				isSignupOpen,
				openSignup,
				openLogin,
				closeSignup,
				closeLogin,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
