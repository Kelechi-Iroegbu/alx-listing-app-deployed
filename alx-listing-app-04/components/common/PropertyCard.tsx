// components/common/PropertyCard.tsx
import React from "react";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ item: PropertyProps }> = ({ item }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="relative">
        <img
          src={item.image}
          alt={`${item.name} - ${item.address.city}`}
          className="w-full h-48 object-cover sm:h-56"
        />
        {item.discount && item.discount.length > 0 && (
          <span className="absolute left-3 top-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            {item.discount}% off
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {item.address.city}, {item.address.country}
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">From</div>
            <div className="font-semibold text-lg">${item.price}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-gray-600">⭐ {item.rating.toFixed(2)}</div>
          <div className="text-xs text-gray-500">{item.offers.bed} bd • {item.offers.shower} bath</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {item.category.slice(0, 3).map((c) => (
            <span key={c} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {c}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
