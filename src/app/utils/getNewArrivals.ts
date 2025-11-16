export const getNewArrivals = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${baseUrl}/api/getNewArrivals`, 
    { 
      next: { tags: ["newArrivals"] },
      cache:"force-cache"
    }); 
    
    if (!res.ok) {
      throw new Error("Failed to fetch getNewArrivals");
    }
    const responseData = await res.json();
    const arrivalsProducts = await responseData?.data;

    return arrivalsProducts;
  } catch (error) {
    console.log("something went wrong to fetch newArrivals:", error);
    return [];
  }
};
