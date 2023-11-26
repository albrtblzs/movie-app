export type WithTotal<T> = { page: number, total_pages: number, total_results: number, isCached: boolean, results: T }
