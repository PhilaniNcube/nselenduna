import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
			<header className="bg-accent">
				<div className="container flex items-center justify-between py-3">
					<div className="flex items-center space-x-5 logo">
						<Image
							src="/images/logo.webp"
							className="object-cover w-32"
							alt="logo"
							width={300}
							height={80}
						/>
						<nav>
							<ul className="flex text-brand">
								<li>
									<Link href="/" className="text-xl" >Home</Link>
								</li>
							</ul>
						</nav>
					</div>

					<Button variant="outline" className="rounded-full">
						Get In Touch
					</Button>
				</div>
			</header>
		);
};
export default Navbar;
