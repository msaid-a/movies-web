import {iNowPlaying} from '../model'
import apiBase from './base'

export default class moviesApi {
    public async getNowPlaying() {
        return await apiBase.get<iNowPlaying>(`/movie/now_playing?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)
    }

    public async getUpComming() {
        return await apiBase.get<iNowPlaying>(`/movie/upcoming?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)
    }
}