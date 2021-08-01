import React, { useState } from "react";
import { Container, Text, Card, Break, Flex, Image } from "../../Component";
import {
  useGetDetail,
  useGetCreadits,
  useGetSimmilarMovies,
  useGetVideos,
} from "../../Services";
import { useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { genres, Cast } from "../../model";
import MovieList from "../Reusable/MovieList";
import Modal from "react-modal";
import ReactPlayer from "react-player";

interface parms {
  id: string;
}

const Detail: React.FC = (props) => {
  const [modal, setModal] = useState<boolean>(false);
  const params: parms = useParams();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width:'50%',
      height: 450
    },
  };

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
      items: 6,
    },
    standarDesktop: {
      breakpoint: { max: 1919, min: 1368 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1367, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const {
    data: detailMovies,
    error,
    isValidating: loadingDetail,
  } = useGetDetail(params.id);

  const {
    data: detailCredits,
    error: errCreadits,
    isValidating: loadingCredits,
  } = useGetCreadits(params.id);

  const {
    data: simmilarMovies,
    error: errSimmilarMovies,
    isValidating: loadingSimmilar,
  } = useGetSimmilarMovies(params.id);

  const {
    data: videoMovie,
    error: errVideo,
    isValidating: loadingVideo,
  } = useGetVideos(params.id);

  return (
    <Container loading={loadingDetail || loadingCredits || loadingSimmilar || loadingVideo}>
      <Container className=" w-10/12 mx-auto">
        <Carousel responsive={responsive} showDots={false} arrows={false}>
          <Container>
            <Image
              style={{ borderRadius: 5 }}
              className="mx-auto"
              src={`https://image.tmdb.org/t/p/original/${detailMovies?.backdrop_path}`}
              onClick={() => setModal(true)}
            />
            <Container className="tittle-carousel " >
              <Text.Heading h={4} color="white">
                {detailMovies?.title}
              </Text.Heading>
              <Text.Span className=" text-gray-300">
                (Klik Image to See Trailer)
              </Text.Span>
            </Container>
          </Container>
        </Carousel>
      </Container>
      <Container className=" px-14 lg:px-48">
        <Text.Heading className=" mt-16 mb-8" color="white" h={3}>
          Genres
        </Text.Heading>
        {detailMovies &&
          detailMovies.genres.map((val: genres) => (
            <Text.Span
              color="white"
              className="p-2 mt-9 mr-3"
              style={{ border: 1, borderStyle: "solid", borderRadius: 20 }}
            >
              {val.name}
            </Text.Span>
          ))}
      </Container>
      <Container className="px-14 lg:px-48 mt-16">
        <Text.Heading h={3} color={"white"}>
          Overview
        </Text.Heading>
        <Text.Paragraph color="white">{detailMovies?.overview}</Text.Paragraph>
      </Container>
      <Flex.Row colPerRow="4" className="justify-between lg:px-48">
        <Flex.Col>
          <Text.Heading h={3} color="white" className="md: mt-12">
            RELEASE DATE
          </Text.Heading>
          <Text.Heading h={4} style={{ color: "orange" }}>
            {detailMovies?.release_date}
          </Text.Heading>
        </Flex.Col>
        <Flex.Col>
          <Text.Heading h={3} color="white" className="md: mt-12">
            RUN TIME
          </Text.Heading>
          <Text.Heading h={4} style={{ color: "orange" }}>
            {detailMovies?.runtime}
          </Text.Heading>
        </Flex.Col>
        <Flex.Col>
          <Text.Heading h={3} color="white" className="md: mt-12">
            BUDGET
          </Text.Heading>
          <Text.Heading h={4} style={{ color: "orange" }}>
            {detailMovies?.budget}
          </Text.Heading>
        </Flex.Col>
        <Flex.Col>
          <Text.Heading h={3} color="white" className="md: mt-12">
            HOME PAGE
          </Text.Heading>
          <Text.Heading h={6} style={{ color: "orange" }}>
            <a href={detailMovies?.homepage} target="_blank">
              {detailMovies?.homepage}
            </a>
          </Text.Heading>
        </Flex.Col>
      </Flex.Row>
      <Container className="px-14 lg:px-48 mt-16">
        <Text.Heading h={3} color="white">
          Cast
        </Text.Heading>
        <Container style={{ height: 350 }}>
          <Carousel
            responsive={responsiveCard}
            className=" h-full"
            infinite={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={400}
            autoPlay={true}
          >
            {detailCredits &&
              detailCredits.cast.map((val: Cast) => (
                <Card
                  headImage={`https://image.tmdb.org/t/p/original/${val.profile_path}`}
                  className="pointer-events-none"
                >
                  <Text.Heading
                    h={6}
                    color="white"
                    className={val.name.length > 49 ? "mt-16" : "mt-24"}
                  >
                    {val.name}
                  </Text.Heading>
                </Card>
              ))}
          </Carousel>
        </Container>
      </Container>
      <Container className=" px-14 lg:px-48 mt-16">
        <Text.Heading h={3} color="white">
          Simmilary Movies
        </Text.Heading>
        <Break height={20} />
        <MovieList data={simmilarMovies} detail={true} />
      </Container>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        overlayClassName="Overlay"

      >
        <Container className="flex justify-between align-middle">
          <Text.Span>Trailer</Text.Span>
          <Text.Span onClick={() => setModal(false)} style={{fontSize: 20}}>X</Text.Span>
        </Container>
        <ReactPlayer 
          // playing
          width="100%"
          style={{marginTop: 10, marginBottom: 'auto'}} 
          url={`https://www.youtube.com/watch?v=${videoMovie?.results[0].key}`}
          />
      </Modal>
    </Container>
  );
};

export default Detail;
