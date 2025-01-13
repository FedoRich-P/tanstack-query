const BASE_URL = "http://localhost:3000"

export const todoListApi = {
    getLogoList: (
        {page}: { page: number },
        {signal}: { signal: AbortSignal }
    ) => {
        return fetch(`${BASE_URL}/todosList?page=${page}`, {
            signal
        })
            .then(res => res.json() as Promise<TodoType[]>)
    }
}

export type TodoType = {
    id: string;
    title: string;
    done: boolean;
}