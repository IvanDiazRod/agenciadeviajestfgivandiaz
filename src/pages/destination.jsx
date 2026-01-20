import { useEffect, useState } from "react";
import axios from "axios";

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/destinos")
      .then(res => setDestinos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Destinos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinos.map(destino => (
          <div key={destino.id} className="border p-4 rounded shadow">
            <img src={destino.imagen || "https://via.placeholder.com/150"} alt={destino.nombre} className="mb-2 w-full h-40 object-cover rounded" />
            <h3 className="font-semibold text-lg">{destino.nombre}</h3>
            <p className="text-gray-600">{destino.descripcion}</p>
            <p className="mt-2 font-bold">${destino.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}