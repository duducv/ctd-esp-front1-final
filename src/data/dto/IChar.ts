
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

type IInfo = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}


export interface ICharsFullResponse {
    info: IInfo,
    results: IChars[]
}