import { productObject } from "@/type/Product";

export default async function page({ params }: { params: { slug: string } }) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.slug}`
	);
	const products: productObject = await res.json();
	console.log("prova", products);
	return (
		<div className="bg-slate-50 text-black mt-2">
			<h1>{products.title}</h1>
		</div>
	);
}
