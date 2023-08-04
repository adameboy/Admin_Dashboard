export interface BaseApiResponse<T> {
    code: string,
    message: string,
    data: T
}
