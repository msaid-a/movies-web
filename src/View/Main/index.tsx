import React from "react";
import {
  useGetNowPlaying,
  useGetUpComming,
  useGetPopular,
  useGetTopRated,
} from "../../Services";
import { Container, Text, Image, Flex } from "../../Component";
import MediaQuery from 'react-responsive'
import { result } from "../../model";
import Carousel from "react-multi-carousel";
import MovieList from "../Reusable/MovieList";

const Main = () => {
  const {data : nowPlaying, error, isValidating : loadingNowPlaying} = useGetNowPlaying()
  const {data : upCooming, error : errTopRate, isValidating : loadingUpCooming} = useGetUpComming()
  const {data : popular, error : errPopular, isValidating : loadingPopular} = useGetPopular()
  const {data : topRated, error : errTopRatd, isValidating : loadingTopRated} = useGetTopRated()

  

  const loading = loadingNowPlaying || loadingUpCooming || loadingPopular || loadingTopRated
//   const loading = loadingNowPlaying;
  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Container loading={loading}>
      <Container className=" w-100 lg:w-full mx-auto">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={400}
          autoPlay={true}
        >
          {nowPlaying &&
            nowPlaying.results.map((val: result) => (
            <>
            <MediaQuery minDeviceWidth={1281}>
                <Flex.Row className="flex w-screen justify-around px-8">
                    <Flex.Col className="title-container pt-56 pl-16 pr-8" width={"40%"}>
                        <Text.Heading h={1} color="white" className="">
                            {val.title}
                        </Text.Heading>
                        <Text.Heading h={3} color="white" className="">
                            {val.release_date}
                        </Text.Heading>
                        <Text.Paragraph className=" opacity-70" color="white">
                            {val.overview}
                        </Text.Paragraph>
                    </Flex.Col>
                    <Flex.Col className="bg-red img-gradient" width={"32%"}>

                    </Flex.Col>
                    <Flex.Col className="bg-white " width={"60%"}>
                         <Image
                  style={{ width: "100%" }}
                  className=" "
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                />
                    </Flex.Col>
                </Flex.Row>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1280}>
              <Container>
                

                <Image
                  style={{ borderRadius: 10 }}
                  className="mx-auto lg:w-3/4 w-full"
                  src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
                /> 
                 <Text.Heading h={4} color="white" className="tittle-carousel ">
                  {val.title}
                </Text.Heading>
               </Container>
            </MediaQuery>
            </>
            ))}
        </Carousel>
      </Container>
      <Container className="mt-6 ">
        <Text.Heading className=" pl-8" h={3} color="white">
          Up Coming
        </Text.Heading>
        <MovieList data={upCooming} />
      </Container>
      <Container className="mt-6">
        <Text.Heading className=" pl-8" h={3} color="white">
          Popular Movies
        </Text.Heading>
        <MovieList data={popular} />
      </Container>
      <Container className="mt-6">
        <Text.Heading className=" pl-8" h={3} color="white">
          Top Rated Movies
        </Text.Heading>
        <MovieList data={topRated} />
      </Container>
    </Container>
  );
};

export default Main;
