import { Dispatch } from "react";
import { IChars, ICharsFullResponse } from "../../dto/IChar";
import { CHAR_REDUCER_ENUM } from "../reducers/charReducer";

async function fetchAllChars() {
    try {
        const firstResponse = await fetch('https://rickandmortyapi.com/api/character/')
        const firstResponseJson: ICharsFullResponse = await firstResponse.json()

        const maxChars = firstResponseJson.info.count
        
        let queryParams = ''

        console.log(maxChars)

        for (let x = 0; x < maxChars; x++) {
            if (x === 0) {
                queryParams += (x + 1).toString()
            } else {
                queryParams += `,${x + 1}`
            }
        }

        console.log('requisicao', `https://rickandmortyapi.com/api/character/${queryParams}`)
        const finalResponse = await fetch(`https://rickandmortyapi.com/api/character/${queryParams}`)
        const finalResponseJson: IChars[] = await finalResponse.json()
        console.log('resposta', finalResponseJson)
        return finalResponseJson
    } catch (err) {
        return []
    }
}

async function paginateAllChars(chars: IChars[], perPage: number): Promise<IChars[][]> {
       return new Promise((resolve, reject) => {
        try {
            const chunckedArray: IChars[][] = []
      
            const chunkSize = perPage
            for (let i = 0; i < chars.length; i += chunkSize) {
              const chunk = chars.slice(i, i + chunkSize)
              chunckedArray.push(chunk)
            }
            resolve(chunckedArray)
        } catch (err) {
            reject(err)
        }
    })
}

export function fillChars(dispatch: Dispatch<any>) {
        dispatch(async () => {
            const allChars = await fetchAllChars()
            const paginated = await paginateAllChars(allChars, 9)
            dispatch({ type: CHAR_REDUCER_ENUM.FILL_CHARS, payload: paginated })
        })
}