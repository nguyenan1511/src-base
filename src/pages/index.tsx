import MasterPage from "@/components/layouts/MasterPage";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const UIHome = dynamic(() => import("@/components/router/UIHome"), {
	ssr: false,
});

const Home: NextPage = (props: any) => {
	const _metaData = {
		metaTitle: "",
		metaDescription: "",
		metaImage: "",
	};

	return (
		<MasterPage meta={_metaData}>
			<UIHome />
		</MasterPage>
	);
};

export default Home;
