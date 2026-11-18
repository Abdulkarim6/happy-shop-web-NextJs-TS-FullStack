import { ReviewType } from "@/app/utils/interfaces";
import { Rating } from "./Rating";
import { poppins } from "@/lib/font";
import Link from "next/link";
import { getReviews } from "@/app/utils/getReviews";

const Testimonials = async({path}:{path:string}) => {
    const {reviews} = await getReviews();

    const dateOptions: Intl.DateTimeFormatOptions = {
      year:"numeric",
      month:"long",
      day:"2-digit"
    }
    
    const controlledReviews = (path === "homePage" ? reviews?.slice(0,3) : reviews);

    return (
      <section>
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-5 md:mb-7 ${poppins.className}`}>-WHAT OUR CUSTOMERS SAY-</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-3 md:px-5 mb-5">
        {
          controlledReviews?.map((review : ReviewType) => 
            <div key={review?._id} className="shadow-lg hover:shadow-xl border-2 border-white rounded-xl px-2 md:px-3 py-5 md:py-8 ">
             <div>
                <h3>{review?.customerName}</h3>
                <p>{new Date(review?.createdAt).toLocaleDateString("en-US", dateOptions)}</p>
             </div>
             <div className="my-5">
              <Rating 
               rating={review?.rating}
               readonly={true}
              />
             </div>
             <p>{review?.review}</p>
            </div>  
          )
        }
        </div>
        {
          path === "homePage" && 

          <Link href="/testimonials" 
            className="text-black border-black hover:text-white hover:bg-orange-400 bg-white 
             border rounded px-2 py-1.5 block w-fit mx-auto mt-3">
             more reviews...
          </Link>
        }

      </section>
    );
};

export default Testimonials;