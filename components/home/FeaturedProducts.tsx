import { fetchFeatureProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeatureProducts();
  if (products.length === 0) {
    return <EmptyList />;
  }

  return (
    <section className='pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
