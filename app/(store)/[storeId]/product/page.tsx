import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export default async function AllProductsPage({
  params,
}: {
  params: { storeId: number };
}) {
  const allProducts = await getProducts({ storeId: params.storeId });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {allProducts.length ? (
            <ProductList title="Todos los productos" items={allProducts} />
          ) : (
            <h1 className="text-2xl font-bold text-center">
              Muy pronto tendremos productos para ti
            </h1>
          )}
        </div>
      </div>
    </Container>
  );
}
