import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />

    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>{" "}
      <Text fontSize="3xl" fontWeight="bold">
        <br />
        {title1}
      </Text>{" "}
      <Text fontSize="lg" color="gray.700" paddingTop="3" paddingBottom="3">
        {desc1}
      </Text>
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <div>
      <h1>Hello </h1>
      <Banner purpose={"test"} />
      <Banner purpose={"test"} />
    </div>
  );
}
