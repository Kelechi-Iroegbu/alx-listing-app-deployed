import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const handleBooking = async () => {
  try {
    await axios.post("/bookings", {
      propertyId: id,
      checkIn,
      checkOut,
    });
    alert("Booking successful!");
  } catch (err) {
    alert("Booking failed");
  }
};


  useEffect(() => {
    if (!id) return;

    axios
      .get(`/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading property...</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <img src={property.image} className="my-4 rounded" />
      <p>{property.description}</p>
      <p className="font-bold mt-2">${property.price}/night</p>
    </div>
  );
}
