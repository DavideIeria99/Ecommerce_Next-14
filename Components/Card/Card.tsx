import { productObject } from "@/type/Product";
import React from "react";

interface cardProps {
	product: productObject;
}
export default function Card({ product }: cardProps) {
	const { id, title, body } = product;
	return (
		<div className="bg-slate-100 text-black m-1 p-2 rounded">
			<span>{id}</span>
			<h2>title: {title}</h2>
			<p>body: {body}</p>
			<a href={`/product/${id}`}>click</a>
		</div>
	);
}
