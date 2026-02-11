interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="border rounded shadow p-3">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-500">{property.location}</p>
      <p className="font-bold mt-1">${property.price}/night</p>
    </div>
  );
}
interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
}
