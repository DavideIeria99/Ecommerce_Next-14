import Card from "@/Components/Card/Card";
import { prisma } from "@/lib/prisma";
import { Product as ProductType } from "@/prisma/generated/client";

export default async function ProductPage() {
	const products: ProductType[] = await prisma.product.findMany();

	console.log(products);

	return (
		<main className="flex min-h-screen items-center justify-between p-24">
			{products.map((el: ProductType) => (
				<Card
					key={el.id}
					product={el}
				/>
			))}
		</main>
	);
}
