const api_key="50f3f8a2e4a15b4bb8dc3ddb978aac0b";

const requests={
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/movie?api_key=${api_key}&with_networks=123`,
    fetchTopRated:`movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentariesMovies:`/discover/movie?api_key=${api_key}&with_genres=99`
}

export default requests;