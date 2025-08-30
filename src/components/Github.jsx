import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import GitHubCalendar from "react-github-calendar";

function Github() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <>
      <br />
      <br />
      <Flex w="full" justifyContent={"center"} position="relative">
        <Box position={"absolute"} w="100%">
          <Image
            src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
            opacity=".3"
            w="100%"
          />
        </Box>
        <Text
          color="orange.500"
          fontSize="22px"
          letterSpacing={{ base: "10px", md: "20px" }}
          fontWeight="700"
        >
          GITHUB STATS
        </Text>
      </Flex>
      <br />
      <br />
      <Flex justifyContent={"center"}>
        <GitHubCalendar
          username="actuallyakshay"
          blockRadius="2"
          theme="nord"
        />
      </Flex>
      <br />
      <br />
      <Grid
        w="90%"
        m="auto"
        gap={{ base: "3", md: "10" }}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
      >
        <Image src="https://streak-stats.demolab.com/?user=actuallyakshay&theme=nord&hide_border=true&border_radius=30&date_format=M%20j%5B%2C%20Y%5D)" />
        <Image src="https://github-readme-stats.vercel.app/api?username=actuallyakshay&count_private=true&theme=nord&hide_border=true&border_radius=30" />
        <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=actuallyakshay&layout=compact&theme=nord&hide_border=true&border_radius=30" />
      </Grid>
    </>
  );
}

export default Github;
