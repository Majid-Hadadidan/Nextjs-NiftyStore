import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { productSchema, validateWithZodSchema } from "./schmas";

//clerk authentication id
const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

//error handler
function renderError(error: unknown): { message: string } {
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
}

//createProduct when user click submit button
export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  "use server";
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema,rawData)

    
    
    await db.product.create({
      data: {
        ...validatedFields,
        image: "/images/product-3.jpg",
        clerkId: user.id,
      },
    });
    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};
