
export const getUsers = async() => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${baseUrl}/api/users`,{
            next:{tags:["users"]},
            cache:"force-cache"
        });

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        
    }
};