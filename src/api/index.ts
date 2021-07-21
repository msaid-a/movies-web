import moviesApi from './movies'
import detailMovies from './detailMovies'

const api = {
    moviesApi: new moviesApi(),
    detailMovies: new detailMovies()
}

export default api