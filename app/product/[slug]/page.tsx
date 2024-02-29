import { prisma } from "@/lib/prisma";
import { Product as productType } from "@prisma/client";

const getProduct = async (id: number) => {
	return await prisma.product.findUnique({ where: { id } });
};
export default async function page({ params }: { params: { slug: string } }) {
	const product = await getProduct(parseInt(params.slug));

	console.log("prova", product);
	if (!product) {
		return <div>NOT FOUND</div>;
	}
	return (
		<div className=" min-h-screen">
			<div className="bg-slate-50 text-black mt-2">
				<h1>{product.name}</h1>
			</div>
		</div>
	);
}
