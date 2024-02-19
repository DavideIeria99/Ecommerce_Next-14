import Card from "@/Components/Card/Card";
import { productObject } from "@/type/Product";

export default async function ProductPage() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const products: productObject[] = await res.json();
	console.log(products);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{products.map((el: productObject) => (
				<Card
					key={el.id}
					product={el}
				/>
			))}
		</main>
	);
}
