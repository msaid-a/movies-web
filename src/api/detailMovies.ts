import apiBase from './base'
import {iCreadits, iDetail, iMoviesVideo, iNowPlaying} from '../model'

export default class detailMovies {
    public async getDataDetail(id: string) {
        return await apiBase.get<iDetail>(`/movie/${id}?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)
    }

    public async getVideo(id: string) {
        return await apiBase.get<iMoviesVideo>(`/movie/${id}/videos?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)
    }

    public async getCreadits(id: string) {
        return await apiBase.get<iCreadits>(`/movie/${id}/credits?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)
    }

    public async getSimilarMovies(id: string) {
        return await apiBase.get<iNowPlaying>(`/movie/${id}/similar?api_key=e08b84505f42fa48b0d3d58f2c451d6c`)

    }
}