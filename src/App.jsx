import Nav from './components/Nav.jsx';
import { Hero, CustomerReviews, PopularProducts, SpecialOffers, Services, Subscribe, SuperQuality, Footer } from './sections';

export default function App() {
  return (
    <main className="relative ">
        <Nav/>
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero/>
        </section>
        <section className="padding">
          <PopularProducts/>
        </section>
        <section className="padding">
          <SuperQuality/>
        </section>
        <section className="padding-x py-10">
          <Services/>
        </section>
        <section className="padding">
          <SpecialOffers/>
        </section>
        <section className="bg-blue-50 padding">
          <CustomerReviews/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe/>
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer/>
        </section>
    </main>
  )
}


