export const getCategories = async() => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${baseUrl}/api/categories`, {
        cache: "force-cache",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const resJson = await res.json();
      const data = await resJson?.data;
      // console.log(resJson);

      return data;
      
    } catch (error) {
      console.error("something went wrong to fetch categories:", error);
      return [];
    }
};
