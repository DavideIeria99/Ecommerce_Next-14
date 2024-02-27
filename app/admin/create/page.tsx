import { prisma } from "@/lib/prisma";
import { Decimal } from "@prisma/client/runtime/binary";
import { redirect } from "next/navigation";

export default function CreatePage() {
	const createProduct = async (data: FormData) => {
		"use server";

		const productName = data.get("name") as string;
		const productDescription = data.get("description") as string;
		const productPrice = data.get("price") as unknown as Decimal;
		const productImage = data.get("name") as string;
		await prisma.product.create({
			data: {
				name: productName,
				description: productDescription,
				price: productPrice,
				image: productImage,
			},
		});
		redirect("/admin");
	};

	return (
		<form
			className=" flex justify-center w-full bg-white  px-16"
			action={createProduct}>
			<div className="space-y-12 w-full">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-900">
							Product
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Create your product
						</p>
					</div>

					<div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
						<div className="sm:col-span-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium leading-6 text-gray-900">
								name
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="text"
										name="name"
										id="name"
										className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="name product"
									/>
								</div>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label
								htmlFor="description"
								className="block text-sm font-medium leading-6 text-gray-900">
								description
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="text"
										name="description"
										id="description"
										className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="description the  product"
									/>
								</div>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label
								htmlFor="price"
								className="block text-sm font-medium leading-6 text-gray-900">
								price
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="number"
										name="price"
										id="price"
										step="0.01"
										className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="price product"
									/>
								</div>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label
								htmlFor="image"
								className="block text-sm font-medium leading-6 text-gray-900">
								image
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="text"
										name="image"
										id="image"
										className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="image product"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900">
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
					Save
				</button>
			</div>
		</form>
	);
}
