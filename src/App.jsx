import { useState } from 'react'

import Card1 from "./components/Card1"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gray-100">

      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-10 text-center">
        
        <h1 className="text-4xl font-bold mb-3">
          Redes Sociales
        </h1>

        <p className="text-lg">
          Conoce algunas de las redes sociales más populares
        </p>

      </header>


      <main className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card1
            red="Red social"
            nombre="Instagram"
            descripcion="Comparte fotos, videos, historias y momentos con otras personas."
            seguidores="2.5 M seguidores"
            icono="https://img.magnific.com/vector-gratis/logotipo-instagram_1199-122.jpg?semt=ais_hybrid&w=740&q=80"
          
          />

          <Card1
            red="Red social"
            nombre="Facebook"
            descripcion="Conecta con amigos, familiares y comunidades de todo el mundo."
            seguidores="3.1 M seguidores"
            icono="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
          />
        

          <Card1
            red="Red social"
            nombre="TikTok"
            descripcion="Crea y descubre videos cortos, entretenidos y creativos."
            seguidores="1.8 M seguidores"
            icono="https://img.magnific.com/vector-premium/logotipo-tik-tok_578229-290.jpg?semt=ais_hybrid&w=740&q=80"
          />

        </div>

      </main>

    </div>
    </>
  )
}

export default App
