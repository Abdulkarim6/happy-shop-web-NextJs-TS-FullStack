import { ReviewType } from "@/app/utils/interfaces";
import { Rating } from "./Rating";
import { poppins } from "@/app/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Testimonials = async({path}:{path:string}) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/reviews`, {
      next: { tags: ["reviews"] },
      cache: "force-cache",
    });
    
    if (!res.ok) throw new Error("Failed to fetch reviews");
    
    const resJson = await res.json();
    const reviews = await resJson?.data; 

    const dateOptions: Intl.DateTimeFormatOptions = {
      year:"numeric",
      month:"long",
      day:"2-digit"
    }
    
    return (
      <section>
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-5 md:mb-7 ${poppins.className}`}>-WHAT OUR CUSTOMERS SAY-</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-3 md:px-5">
        {
          reviews?.map((review : ReviewType) => 
            <div key={review?._id} className="shadow-lg hover:shadow-xl border-2 border-white rounded-xl px-2 py-5 md:py-8 ">
             <div>
                <h3>{review?.customer}</h3>
                <p>{new Date(review?.date).toLocaleDateString("en-US", dateOptions)}</p>
             </div>
             <div className="my-5">
              <Rating rating={review?.rating}/>
             </div>
             <p>{review?.review}</p>
            </div>  
          )
        }
        </div>
        {
          path === "homePage" && 

         <div className="flex justify-center mt-3 md:mt-5">
          <Link href="/testimonials"><Button variant="destructive" className="text-black hover:text-white bg-inherit hover:bg-orange-400 border border-black rounded">Show More...</Button></Link>
         </div>
        }
      </section>
    );
};

export default Testimonials;