import { Billboard } from "@/types";
import BillboardGallery from "../billboard-gallery";
import BillboardLabel from "../billboard-label";

interface BillboardProps {
  data: Billboard[];
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="px-6 rounded-xl relative pb-4 md:aspect-[4/1] overflow-hidden">
      {data.length && data.length > 1 ? (
        <BillboardGallery billboards={data} />
      ) : (
        <div
          style={{ backgroundImage: `url(${data[0].imageUrl})` }}
          className="rounded-xl relative h-40 md:h-60 overflow-hidden bg-cover"
        >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
            <BillboardLabel text={data[0].label} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Billboard;
