const BASE_URL = "http://localhost:3000"

export const todoListApi = {
    getLogoList: (
        {page}: { page: number },
        {signal}: { signal: AbortSignal }
    ) => {
        return fetch(`${BASE_URL}/todosList?_page=${page}&_per_page=10`, {
            signal
        })
            .then(res => res.json() as Promise<PaginatedResult<TodoType>>)
    }
}

export type PaginatedResult<T> = {
    data: T[],
    first: number,
    last: number,
    pages: number,
    items: number,
    next: number | null,
    prev: number | null
}

export type TodoType = {
    id: string;
    title: string;
    done: boolean;
}