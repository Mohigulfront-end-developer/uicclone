import Footer from '../footer/Footer'
import Header from '../header/Header'
import AboutUs from '../main/AboutUs'
import Careers from '../main/Careers'
import Hero from '../main/Hero'
import Partners from '../main/Partners'
import Portfolio from '../main/Portfolio'
import Services from '../main/Services'


const Home = () => {
  return (
    <div>
      <div className="background__img">
        <Header />
        <Hero/>
      </div>

      <AboutUs />
      <Portfolio />
      <Services />
      <Partners />
      <Careers/>
      <Footer />
    </div>
  );
}

export default Home