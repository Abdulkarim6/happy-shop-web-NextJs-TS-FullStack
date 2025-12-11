
export const getOrderedProducts = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
     const res = await fetch(`${baseUrl}/api/getOrderedProducts`, {
       next: { tags: ["orders"] },
       cache: "force-cache",
     });
     return await res.json();
};

export default getOrderedProducts;