import Hero from "@/Components/Hero";
import PopularProducts from "@/Components/PopularProducts";
import SummerCareTips from "@/Components/SummerCareTips";
import TopBrands from "@/Components/TopBrands";


export default function Home() {
  return (
    <main>
      <Hero/>
      <PopularProducts />
      <SummerCareTips/>
      <TopBrands/>
    </main>
  );
}