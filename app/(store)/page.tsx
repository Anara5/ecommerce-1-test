import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "@/components/ProductsView";
import ChristmasBanner from "@/components/ChristmasBanner";

export const dynamic = "force-static";
export const revalidate = 60; // revalidate every minute

export default async function Home() {

  const products = await getAllProducts();
  const categories = await getAllCategories();

  console.log(
    crypto.randomUUID().slice(0, 5) + `>>> rerendered home page cache with ${products.length} products and ${categories.length} categories`
  )

  return (
    <div>
      <ChristmasBanner />

      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
        <ProductsView products={products} categories={categories}/>
      </div>

    </div>
  );
}
