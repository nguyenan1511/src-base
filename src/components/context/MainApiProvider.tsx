/* eslint-disable @typescript-eslint/no-use-before-define */
import { useApiProvider } from "@/components/context/ApiProvider";
import { createContext, useContext } from "react";

export const MainApiContext = createContext<any | null>(null);

interface Props {
	isPrivate?: boolean;
	children?: React.ReactNode;
}

const MainApiProvider: React.FC<Props> = ({ children }) => {
	const { GET, POST } = useApiProvider();

	const getData = async () => {
		return GET({
			path: `/getData`,
		});
	};

	return <MainApiContext.Provider value={{ getData }}>{children}</MainApiContext.Provider>;
};

export default MainApiProvider;

export const useMainApi = () => {
	const context = useContext(MainApiContext);
	if (!context) {
		// throw new Error("useMain has to be used within <MainContext.Provider>");
	}
	return context;
};
