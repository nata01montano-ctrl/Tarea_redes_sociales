  function SocialCard({ red, nombre, descripcion, seguidores, icono }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm hover:scale-105 transition duration-300">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">
          <img src={icono} alt={nombre} className="w-30 h-30 object-cover " />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {nombre}
          </h2>

          <p className="text-sm text-gray-500">
            {red}
          </p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">
        {descripcion}
      </p>

      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-800">
          {seguidores}
        </span>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Seguir
        </button>
      </div>

    </div>
  )
}

export default SocialCard