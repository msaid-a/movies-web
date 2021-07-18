import React from 'react'
import {useGetNowPlaying, useGetUpComming} from '../../Services'
import {Container, Text, Card} from '../../Component'
import {result} from '../../model'
import Carousel from 'react-multi-carousel'

const Main = () => {
    const {data : nowPlaying, error, isValidating : loadingNowPlaying} = useGetNowPlaying()
    const {data : upCooming, error : errTopRate, isValidating : loadingUpCooming} = useGetUpComming()
    const responsive = {
        mobile: {
          breakpoint: { max: 4000, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    
      const responsiveCard = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1920 },
          items: 7,
        },
        standarDesktop: {
          breakpoint: { max: 1919, min: 1368 },
          items: 6,
          slidesToSlide: 3, // optional, default to 1.
        },
        desktop: {
          breakpoint: { max: 1367, min: 1024 },
          items: 4,
          slidesToSlide: 3, // optional, default to 1.
        },
      
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      }
      
    return (
        <Container loading={loadingNowPlaying || loadingUpCooming}>
            <Container className=" w-9/12 mx-auto">
                <Carousel responsive={responsive} 
                infinite={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                transitionDuration={400}
                autoPlay={true}
                >
                    {nowPlaying && nowPlaying.results.map((val: result) => (
                    <Container >
                        <img style={{borderRadius: 10}} className="mx-auto" src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`} />
                        <Text.Heading h={4} className="tittle-carousel ">{val.title}</Text.Heading>
                    </Container>
                    ))}
                </Carousel>
            </Container>
            <Container className="mt-6 p-4 pl-24">
                <Text.Heading h={3} color="white">Popular</Text.Heading>
                <Carousel responsive={responsiveCard}>
                    {upCooming && upCooming.results.map((val: result) => (
                    <Card headImage={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}>                       
                        <Text.Heading h={6} color="white" className="mt-24">
                        {val.title}
                        </Text.Heading>
                    </Card>
                    ))}
                </Carousel>
            </Container>
        </Container>
    )
}

export default Main
