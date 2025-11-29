
export const getAllProducts = async() => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${baseUrl}/api/allProducts`, {
          next: { tags: ["allProducts"] },
          cache: "force-cache",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch all Products");
        }
        const allProductsOfCategories = await response.json();

        return allProductsOfCategories;

    } catch (error) { 
        return []
    }
};