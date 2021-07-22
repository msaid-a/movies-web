import React from 'react'
import {useGetNowPlaying, useGetUpComming, useGetPopular, useGetTopRated} from '../../Services'
import {Container, Text, Image} from '../../Component'
import {result} from '../../model'
import Carousel from 'react-multi-carousel'
import MovieList from '../Reusable/MovieList'

const Main = () => {
    const {data : nowPlaying, error, isValidating : loadingNowPlaying} = useGetNowPlaying()
    const {data : upCooming, error : errTopRate, isValidating : loadingUpCooming} = useGetUpComming()
    const {data : popular, error : errPopular, isValidating : loadingPopular} = useGetPopular()
    const {data : topRated, error : errTopRatd, isValidating : loadingTopRated} = useGetTopRated()

    const loading = loadingNowPlaying || loadingUpCooming || loadingPopular || loadingTopRated
    const responsive = {
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    
    return (
        <Container loading={loading}>
            <Container className=" w-100 lg:w-9/12 mx-auto">
                <Carousel responsive={responsive} 
                infinite={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                transitionDuration={400}
                autoPlay={true}
                >
                    {nowPlaying && nowPlaying.results.map((val : result) => (
                    <Container >
                        <Image style={{borderRadius: 10}} className="mx-auto" src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`} />
                        <Text.Heading h={4} className="tittle-carousel ">{val.title}</Text.Heading>
                    </Container>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-6 ">
                <Text.Heading className=" pl-8" h={3} color="white">Up Coming</Text.Heading>
                <MovieList data={upCooming} />
            </Container>
            <Container className="mt-6">
                <Text.Heading className=" pl-8" h={3} color="white">Popular Movies</Text.Heading>
                <MovieList data={popular} />
            </Container>
            <Container className="mt-6">
                <Text.Heading className=" pl-8" h={3} color="white">Top Rated Movies</Text.Heading>
                <MovieList data={topRated} />
            </Container>
        </Container>
    )
}

export default Main
