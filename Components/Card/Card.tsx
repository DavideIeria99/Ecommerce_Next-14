"use client";

import React from "react";

interface cardProps {
	id: number;
	name: string;
}
export default function Card({ id, name }: cardProps) {
	async function deleteProduct() {
		await fetch(`/backend?id=${id}`);
	}
	return (
		<div className="bg-slate-100 text-black m-1 p-2 rounded">
			<span>{id}</span>
			<h2>title: {name}</h2>

			{/* <a href={`/product/${id}`}>click</a> */}
			<button onClick={deleteProduct}>CLICK</button>
		</div>
	);
}
