export const getNewArrivals = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log("baseUrl from getNewArrivals function:", baseUrl);
    
      // const res = await fetch(`${baseUrl}/api/getNewArrivals`, {cache:"force-cache"});
    // const res = await fetch(`${baseUrl}/api/getNewArrivals`, { next: { tags: ["newArrivals"] }, 
    //   cache:"force-cache"});

    const res = await fetch(`${baseUrl}/api/getNewArrivals`, { next: { tags: ["newArrivals"] }}); 
    console.log("response of newArrivals fetching:", res);
    
    if (!res.ok) {
      throw new Error("Failed to fetch getNewArrivals");
    }
    const responseData = await res.json();
    const arrivalsProducts = await responseData?.data;
    // console.log("arrivals form route:", arrivalsProducts);

    return arrivalsProducts;
  } catch (error) {
    console.log("something went wrong to fetch newArrivals:", error);
    return [];
  }
};
