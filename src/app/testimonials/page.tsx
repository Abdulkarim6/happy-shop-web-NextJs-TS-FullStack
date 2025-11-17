import AddButton from '../components/homeComponents/Testimonials/AddButton';
import Testimonials from '../components/homeComponents/Testimonials/Testimonials';

const page = () => {
    return (
        <section className='mt-2'>
          <Testimonials path="testimonialPage"/>
          <AddButton/>
        </section>
    );
};

export default page;