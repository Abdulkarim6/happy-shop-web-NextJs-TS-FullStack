import AddReview from "../../components/homeComponents/Testimonials/AddReview";
import Testimonials from "../../components/homeComponents/Testimonials/Testimonials";

const page = () => {
    return (
        <section className='mt-2'>
          <AddReview/>
          <Testimonials path="testimonialPage"/>
        </section>
    );
};

export default page;