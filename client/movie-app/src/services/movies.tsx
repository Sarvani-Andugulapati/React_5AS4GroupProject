import axios from "axios"

export const getMoviesFromServer = async(movieListType : string, search : string) => {
    console.log("test")
    console.log(search)
    if ( search === undefined ||  search === '')
    {
        const Api = "http://localhost:4001/" + movieListType
        return await axios.get(Api).then(res => res.data)
    }
    const Api = "http://localhost:4001/" + movieListType + "?title_like=" + search
    return await axios.get(Api).then(res => res.data)
}

export const addMovieToFavouritesInServer = async (movie: any) => {
    const response = await axios.post(
        `http://localhost:4001/favourit`,
        movie,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return response.status
    
}

export const removeMovieFromFavouritesInServer = async (movieId: any) => {
    const Api = "http://localhost:4001/favourit/" + movieId
    const response = await axios.delete(Api)
    return response.status
}


export const getMovieFavourites = async (movieName=undefined) => {
    if(movieName){
        const Api = "http://localhost:4001/favourit?title=" + movieName
        const response = await axios.get(Api)
        return response.data
    }
    const response_1 = await axios.get(`http://localhost:4001/favourit`)
    return response_1.data
}

export const getMovies = async (tab=undefined, movieName=undefined) => {
    if(movieName){
        const Api = "http://localhost:4001/" + tab + "?title=" + movieName
        const response = await axios.get(Api)
        return response.data
    }
    const Api = "http://localhost:4001/" + tab 
    const response_1 = await axios.get(Api)
    return response_1.data
}