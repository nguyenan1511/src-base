/* eslint-disable @typescript-eslint/no-use-before-define */
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

type MainContextType = {};

export const MainContext = createContext<MainContextType | null>(null);

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainProvider: React.FC<Props> = ({ children }) => {
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	useEffect(() => {
		const myTimeout = setTimeout(() => {
			window.scroll({ top: 0, left: 0, behavior: "smooth" });
		}, 100);
		return () => {
			clearTimeout(myTimeout);
		};
	}, [router?.asPath]);

	return (
		<MainContext.Provider value={{}}>
			<div className={`loading ${loading ? "" : "--hide"}`}></div>
			{children}
			<style jsx>
				{`
					.loading {
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						position: fixed;
						background: #fff;
						z-index: 900;
						opacity: 1;
						visibility: visible;
						transition: 0.3s;
						-webkit-transition: 0.3s;
					}

					.loading.--hide {
						opacity: 0;
						visibility: hidden;
						transition: 0.3s;
						-webkit-transition: 0.3s;
					}
				`}
			</style>
		</MainContext.Provider>
	);
};

export default MainProvider;

export const useMain = () => {
	const context = useContext(MainContext);
	if (!context) {
		// throw new Error("useMain has to be used within <MainContext.Provider>");
	}
	return context;
};
