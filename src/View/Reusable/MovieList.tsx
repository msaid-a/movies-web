import React from "react";
import { Container, Text, Card } from "../../Component";
import Carousel from "react-multi-carousel";
import { result } from "../../model/nowPlaying";
import {useHistory} from 'react-router-dom'
interface props {
  data: any;
  detail?: boolean
}

const MovieList: React.FC<props> = (props) => {
  const responsiveCard = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1920 },
      items: props.detail ? 6 : 7,
    },
    standarDesktop: {
      breakpoint: { max: 1919, min: 1368 },
      items: props.detail ? 4 : 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1367, min: 1024 },
      items: props.detail ? 3 : 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet_2: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },

    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  const history = useHistory()

  return (
    <Container style={{ height: 350 }}>
      <Carousel responsive={responsiveCard} className={props.detail ? "" :  " px-20 md:pl-8 h-full px"}>
        {props.data &&
          props.data.results.map((val: result) => (
            <Card
              headImage={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`}
              onClick={() => history.push(`/detail/${val.id}`)}
            >
              <Text.Heading h={6} color="white" className={val.title.length > 49 ? "mt-16" : "mt-24"}>
                {val.title}
              </Text.Heading>
            </Card>
          ))}
      </Carousel>
    </Container>
  );
};

export default MovieList;
