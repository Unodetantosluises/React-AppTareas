const API = 'http://localhost:3000'

interface Tarea {
    title: string;
    description?: string;
    done?: boolean;
}

export const createTareaRequest = (tarea: Tarea) => {
    fetch(`${API}/tareas`, {
        method: 'POST',
        body: JSON.stringify(tarea),
        headers: {
            'Content-Type':'application/json'
        }
    })
}