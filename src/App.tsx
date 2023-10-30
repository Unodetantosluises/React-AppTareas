import TareasForm from "./components/tareasForm"
import TareasList from "./components/tareasList"

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center">
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Aplicacion de Tareas</h1>
        
        <TareasForm />

        <TareasList />
      
      </div>
    </div>
  )
}

export default App

