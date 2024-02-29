
import { Prisma, Product } from "@prisma/client";

export const productsData: Partial<Product>[] = [
    {
        name: "Cool helmet.",
        description: "A nice helmet to wear on your head",
        price: new Prisma.Decimal(19.99),
        image: "/images/helmet.jpg",
        stripePriceId: "price_1Op8IFFv5uhheZYLojG5pBbw",
    },
    {
        name: "Grey T-Shirt",
        description: "A nice shirt that you can wear on your body",
        price: new Prisma.Decimal(22.99),
        image: "/images/shirt.jpg",
        stripePriceId: "price_1Op8IFFv5uhheZYLojG5pBbw",
    },
    {
        name: "Socks",
        description: "Cool socks that you can wear on your feet",
        price: new Prisma.Decimal(12.99),
        image: "/images/socks.jpg",
        stripePriceId: "price_1Op8IFFv5uhheZYLojG5pBbw",
    },
    {
        name: "Sweatshirt",
        description: "Cool sweatshirt that you can wear on your body",
        price: new Prisma.Decimal(12.99),
        image: "/images/sweatshirt.jpg",
        stripePriceId: "price_1Op8IFFv5uhheZYLojG5pBbw",
    },
];

