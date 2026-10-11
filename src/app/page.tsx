
import Hero from "./components/hero";



export default async function HomePage() {
 
  return (
    <main>
      <Hero />

      <section
        id="সব-পণ্য"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            সব পণ্য
          </h2>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম এক নজরে দেখুন।
          </p>
        </div>

        
      </section>
       
        
     
    </main>
  );
}
