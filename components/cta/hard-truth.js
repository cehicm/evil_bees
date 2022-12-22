import Link from "next/link";

export default function HardTruthCTA() {
	return (
		<section className="border-b border-white">
			<div className="py-16 px-8 md:py-24 mx-auto max-w-7xl">
				<div className="py-8 px-4 md:p-8 px-12 md:mx-auto md:text-center max-w-4xl text-">
					<h2 className="text-4xl md:text-5xl tracking-tight">
						Hard truth: Videos <span className="font-medium">don&apos;t</span>{" "}
						teach you how to code.
					</h2>
					<p className="mt-8 text-lg tracking-tight text-justify lg:text-center max-w-4xl mx-auto">
						At best, you'll learn to retype someone else's code —{" "}
						<span className="italic">really really fast</span>. At worst, you'll
						spend months pointlessly looking at the screen, wasting precious
						time.
					</p>

					<h2 className="mt-16 font-display text-4xl md:text-5xl tracking-tight">
						So what should you do?
					</h2>
					<p className="my-8 text-lg tracking-tight md:mb-16 text-justify lg:text-center max-w-4xl mx-auto">
						The best way to learn is by doing — and we offer just that! We
						create open source projects that everyone is welcome to contribute
						to. This way, you'll be able to learn the skills you need to become
						a developer.
					</p>
					<Link
						className="bg-discord-purple py-3 px-10 text-white mt-6 rounded-md hover:bg-white hover:text-slate-900"
						href="https://github.com/Evil-Bees"
					>
						Join us!
					</Link>
				</div>
			</div>
		</section>
	);
}
