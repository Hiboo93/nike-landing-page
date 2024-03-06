import Nav from './components/Nav.jsx';
import { Hero, CustomerReviews, PopularProducts, SpecialOffers, Services, Subscribe, SuperQuality, Footer } from './sections';

export default function App() {
  return (
    <main className="main ">
      <div className="container mx-auto p-4 relative">
        <Nav/>
        <section className="w-screen">
          <Hero/>
        </section>
        <section className="w-screen  py-24">
          <PopularProducts/>
        </section>
        <section className="w-screen  py-24">
          <SuperQuality/>
        </section>
        <section className=" w-screen  py-24">
          <Services/>
        </section>
        <section className=" w-screen py-24">
          <SpecialOffers/>
        </section>
        <section className="bg-blue-50 w-screen py-24">
          <CustomerReviews/>
        </section>
        <section className="w-screen py-24">
          <Subscribe/>
        </section>
      </div>
        <section className="bg-black text-white w-screen py-24">
          <Footer/>
        </section>
    </main>
  )
}


