
/**
 * API endpoints
 */

module.exports = {
  "movie": "/movie/{id}",
  "alternativeTitles": "/movie/{id}/alternative_titles",
  "casts": "/movie/{id}/casts",
  "images": "/movie/{id}/images",
  "keywords": "/movie/{id}/keywords",
  "releases": "/movie/{id}/releases",
  "trailers": "/movie/{id}/trailers",
  "translations": "/movie/{id}/translations",
  "similar": "/movie/{id}/similar_movies",
  "lists": "/movie/{id}/lists",
  "changes": "/movie/{id}/changes",
  "latest": "/movie/latest",
  "upcoming": "/movie/upcoming",
  "nowPlaying": "/movie/now_playing",
  "popular": "/movie/popular",
  "topRated": "/movie/top_rated",
	"searchMovies": "/search/movie"
};
