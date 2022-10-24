import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navigation() {
	const { data: session } = useSession();

	return (
		<header className="py-10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="/">
							<Image
								width="100"
								height="100"
								alt="evil-bees"
								src="/evil-bees.png"
							/>
						</Link>
						<Link href="/members">Members</Link>
						<Link href="/projects">Projects</Link>
						<Link href="/contact">Contact us</Link>
					</div>
					<button onClick={() => signIn()}>Sign in</button>
				</nav>
			</div>
		</header>
	);
}
