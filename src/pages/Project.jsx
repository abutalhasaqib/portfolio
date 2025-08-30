import {
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  PlusSquareIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ProjectComponent from "./ProjectComponent";

function Project({ colorMode }) {
  return (
    <Box id="PROJECTS__" mt="10" position="relative">
      <br />
      <br />
      <Box position={"absolute"} w="100%">
        <Image
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          opacity=".3"
          w="100%"
        />
      </Box>
      <Flex w="full" justifyContent={"center"} position="relative">
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing="20px"
          fontWeight="700"
          mt="5"
        >
          PROJECTS
        </Text>
      </Flex>
      <br />
      <Grid
        w="90%"
        m="auto"
        gridTemplateColumns={{
          base: "repeat(1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="9"
        rowGap={"9"}
      >
        {arr?.map((el, i) => {
          return <ProjectComponent colorMode={colorMode} key={i} {...el} />;
        })}
      </Grid>
    </Box>
  );
}

export default Project;

const arr = [
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669808114/facebook_qpaosw.png",
    title: "Facebook Clone",
    techStack: "NodeJS, expressJS, mongoDB, React, Redux, chakra-UI",
    desc: "This is a clone of Facebook with backend integration, in which I implemented many functionalities as like, comments, createpost, delete post, update account, create Story, view other stories, add friends,add followers and many more",
    link: "https://facbook.vercel.app/",
    watch:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7003064081771335680",
    github: "https://github.com/actuallyakshay/Facebook-Clone",
    solo: "A solo Project executed in 07 days",
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809646/CultFit_qsaxju.png",
    title: "Cultsport Clone",
    techStack: "NodeJS, expressJS, mongoDB, mongoose, React, Redux, chakra-UI",
    desc: "This Project is about building an online E-Commerce web application with backend integration showing all the functionalities of an E-Commerce website along with the admin dashboard panel",
    link: "https://superb-syrniki-b9d172.netlify.app/",
    watch:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6999098222908436480",
    github: "https://github.com/actuallyakshay/CultFit",
    solo: "A solo Project executed in 06 days",
  },
  {
    image:
      "https://user-images.githubusercontent.com/107462720/211299643-489751f2-31ab-4b54-addc-993e3a245aa0.png",
    title: "Pharmeasy Clone",
    techStack:
      "TypeScript, NodeJS, expressJS, mongoDB, mongoose, React, Redux, chakra-UI, own npm-package",
    desc: "This is a clone of famous E-Commerce Pharma web application, which provides healthcare products, labtests , health packages etc.",
    link: "https://pharmeasy-rho.vercel.app/",
    watch: "https://pharmeasy-rho.vercel.app/",
    github: "https://github.com/actuallyakshay/Pharmeasy-Clone",
    solo: "A Group Project of 2 members, executed in 07 days",
    area: [
      "Handled whole backend with all the functionalities filter, sorting, searching, relationships in cart, trash items, role based access control system with Authentication (login/signup with jwt and bcrypt) and many more",
      "Pages in frontend :- Whole Admin Panel along with (login/Signup, Medicine, healthcare, Cart)",
      "Created own npm package and used it in this project",
    ],
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809657/Indeed_jjdfeh.png",
    title: "Indeed Clone",
    techStack:
      "NodeJS, expressJS, mongoDB, mongoose, Firebase, React, chakra-UI",
    desc: "It is a clone of famous job portal web application indeed, where I implemented all the functionalities like saved job upload resume seacrh jobs as per the requirement of qualification ans many more.",
    link: "https://indeedclone-five.vercel.app/",
    watch:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6982799317782671361",
    github: "https://github.com/actuallyakshay/indeed.com-clone",
    solo: "A solo Project executed in 05 days",
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809744/FoodApp_d8ib5a.png",
    title: "Food Store",
    techStack: "React, chakra-UI, Firebase",
    desc: "This project is about building an E-Commerce food web application showing the functionalities of an E-Commerce food website like sorting, search food, add to cart, trending items etc.",
    link: "https://foodorderingapp-eta.vercel.app/",
    github: "https://github.com/actuallyakshay/FoodOrderingApp",
    solo: "A solo Project executed in 01 day",
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809657/Timely_a2deob.png",
    title: "Timely Clone",
    techStack: "HTML, CSS, JavaScript",
    desc: "It is a clone of a time tracking application Timely, It is based on pure HTML, CSS and javaScript.",
    link: "https://whimsical-empanada-8d6cc1.netlify.app/",
    github: "https://github.com/actuallyakshay/Timely.com-clone",
    solo: "A Group Project executed in 05 days",
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809657/TicTacToe_pogaoj.png",
    title: "TicTacToe",
    techStack: "React, Chakra-UI",
    desc: "This project is about building a nostalgic game based upon noughts and crosses, In this two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    link: "https://tictactoe-gamma-five.vercel.app/",
    github: "https://github.com/actuallyakshay/TicTacToe",
    solo: "A solo Project executed in 01 day",
  },
  {
    image:
      "https://res.cloudinary.com/dhxtxmw5n/image/upload/v1669809657/Snake_aakf0e.png",
    title: "Snake Game",
    techStack: "HTML, CSS, JavaScript",
    desc: "This project is about building a nostalgic game, which can handled by four keys, (up,down,left,right). Person can check its highscore also.",
    link: "https://prismatic-florentine-542a05.netlify.app/",
    github: "https://github.com/actuallyakshay/Snake-Game",
    solo: "A solo Project executed in 01 day",
  },
];
