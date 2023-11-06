import { ChangeEvent, FormEvent, useState } from "react";
import { createTareaRequest } from "../api/tareas";

function TareasForm() {
    const [tarea, setTarea] = useState({
        title: "",
        description: "",
        done: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTarea({...tarea, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(tarea);
        const res = await createTareaRequest(tarea)
        const data = await res.json()
        console.log(data)
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800block w-full my-2" 
                    placeholder="Escribe un titulo"
                    onChange={handleChange}
                    />

                <textarea 
                    name="description"
                    rows={3}
                    className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Escribe una Tarea"
                    onChange={handleChange}
                    >
                </textarea>

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input 
                    type="checkbox" 
                    className="h-5 w-5 text-indigo-600"
                    onChange={(e) => setTarea({ ...tarea, done: !tarea.done })}
                    />
                    <span>Done</span>
                </label>

                <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
            </form>
        </div>
    );
}

export default TareasForm;