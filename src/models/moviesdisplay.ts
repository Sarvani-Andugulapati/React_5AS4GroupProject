

interface moviescomingsoon {
    [key:string]:[
        id: number|string,
        title: string,
        year: string,
        genres: string[],
        ratings: number[],
        poster: string,
        contentRating: string,
        duration: string,
        releaseDate: string,
        averageRating: number,
        originalTitle: string,
        storyline: string,
        actors: string[],
        imdbRating: string,
        posterurl: string
    ]
}
export default moviescomingsoon;