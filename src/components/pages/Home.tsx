// import BookingSteps from "../organs/BookingSteps"
import CategoryCard from "../organs/CategoryCard";
import HeroSection from "../organs/HeroSection";
import NewsLetter from "../organs/NewsLetter";
// import Partners from "../organs/Partners"
import Services from "../organs/Services";
// import Testimonials from "../organs/Testimonials"
import TopProducts from "../organs/TopProducts";
import { ProductsTexts } from "../particles/DataLists";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <TopProducts />

      {/*  DRIVER GLOVES */}
      <CategoryCard data={ProductsTexts.driver_gloves} />
      {/*  Assembly GLOVES */}
      <CategoryCard data={ProductsTexts.assembly_gloves} inverse={true} />

      {/* <BookingSteps />
            <Testimonials /> */}
      {/* <Partners /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
