import Card from "@/Components/Card/Card";
import { prisma } from "@/lib/prisma";

export default async function Home() {
	const products = await prisma.product.findMany();
	console.log(products);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{products.map((product) => (
				<Card
					key={product.id}
					id={product.id}
					name={product.name}
				/>
			))}
		</main>
	);
}
