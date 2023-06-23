import { IPagination } from "./IPagination"

export interface IChars {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: LocationProps
    location: LocationProps
    image: string
    episode: string[]
    url: string
    created: string
}

type LocationProps = {
    name: string
    url: string
}


export interface ICharsFullResponse {
    info: IPagination,
    results: IChars[]
}