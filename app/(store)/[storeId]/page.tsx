import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage({
  params,
}: {
  params: { storeId: number };
}) {
  const billboards = await getBillboards(params.storeId);
  const featuredProducts = await getProducts({
    storeId: params.storeId,
    isFeatured: true,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {featuredProducts.length ? (
            <ProductList
              title="Productos destacados"
              items={featuredProducts}
            />
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
