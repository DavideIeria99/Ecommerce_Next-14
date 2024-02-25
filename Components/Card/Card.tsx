"use client";

import { Product as ProducType } from "@/prisma/generated/client";
interface cardProps {
	product: ProducType;
}
export default function Card({ product }: cardProps) {
	async function deleteProduct() {
		await fetch(`/backend?id=${product.id}`);
	}
	return (
		<div className="bg-slate-100 text-black m-1 p-2 w-96 rounded">
			<span>{product.id}</span>
			<h1 className="font-bold">{product.name}</h1>
			<p>{product.description}</p>
			<div className="flex justify-evenly">
				<button className="rounded-full p-2 bg-amber-400 hover:scale-110 ease-in duration-200">
					<a href={`/product/${product.id}`}>dettagli</a>
				</button>
				<button
					onClick={deleteProduct}
					className="rounded-full p-2 bg-red-500 hover:scale-110 ease-in duration-200">
					delete
				</button>
			</div>
		</div>
	);
}
