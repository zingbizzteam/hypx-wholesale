import Image from "next/image"
import Link from "next/link"

export default function CategoryGrid() {
  const categories = [
    { name: "Men", image: "/home/men-home.webp?height=400&width=600", cols: "col-span-2", rows: "row-span-1" },
    { name: "Women", image: "/home/women-home.webp?height=400&width=600", cols: "col-span-2", rows: "row-span-1" },
    { name: "Uniforms", image: "/Images/Home/uniforms-home.png?height=400&width=600", cols: "col-span-2", rows: "row-span-1" },
    { name: "Accessories", image: "/home/acc-home.webp?height=400&width=600", cols: "col-span-2", rows: "row-span-1" },
  ]

  return (
    <section className="container1 py-12">
      <div className="container2">
        <div className="container3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} className={index < 2 ? "md:col-span-2" : "md:col-span-2"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  category: {
    name: string
    image: string
  }
  className?: string
}

function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link href={`shop?category=${category.name.toLowerCase()}`} className={`relative overflow-hidden ${className}`}>
      <div className="relative aspect-[16/9] md:aspect-[16/10]">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={`${category.name} category`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h3 className="text-white text-2xl md:text-3xl font-medium">{category.name}</h3>
        </div>
      </div>
    </Link>
  )
}
