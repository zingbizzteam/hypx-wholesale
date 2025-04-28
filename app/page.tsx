import BestSellers from "@/components/home/best-sellers";
import CategoryGrid from "@/components/home/category-grid";
import HeroSection from "@/components/home/hero-section";
import ValueProposition from "@/components/home/value-proposition";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <BestSellers />
      <CategoryGrid />
      <ValueProposition />
    </div>
  )
}
