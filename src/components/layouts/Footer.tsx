import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-white shadow dark:bg-gray-800">
			<div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
				<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{" "}
					<Link href="#" className="hover:underline text-white">
						An Nguyen
					</Link>
					. All Rights Reserved.
				</span>
				<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"></ul>
			</div>
		</footer>
	);
};

export default Footer;
