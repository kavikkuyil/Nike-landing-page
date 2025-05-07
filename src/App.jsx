import { CustomerReview,Footer,Hero,PopularProduct,Services,SpecialOffer,SuperQuality ,Subscribe} from "./sections";
import Nav from "./components/Nav";
const App= () =>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
    <PopularProduct/>
    </section>
    <section className="padding">
  <SuperQuality/>
    </section>
    <section className="padding-x py-10">
    <Services/>
    </section>
    <section className="padding">
   <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue">
    <CustomerReview/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
   <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
    <Footer/>
    </section>
  </main>
);
// () immediately returns the jsx
// use the () when it returns just jsx ,not functions and functions,
export default App;