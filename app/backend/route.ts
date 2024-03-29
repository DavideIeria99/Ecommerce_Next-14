import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") ?? "");

    if (id) {
        const res = await prisma.product.delete({
            where: {
                id: id,
            },
        });
        console.log(res);
    }

    return NextResponse.json({ data: "server" });
}