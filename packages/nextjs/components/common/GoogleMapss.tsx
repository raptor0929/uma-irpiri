import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


export const GoogleMapss: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDQFgshP7KHFpryuV0R3JDZCjZq2iLNkvo", // Reemplaza con tu clave API de Google Maps
    libraries: ["places"],
  });

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          center={{ lat: -34.397, lng: 150.644 }}
          zoom={8}
          mapContainerStyle={{ width: "100%", height: "400px" }}
        >
          {/* Puedes agregar marcadores, polígonos u otras funcionalidades del mapa aquí */}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};