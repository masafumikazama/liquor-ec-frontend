/* eslint-disable react/prop-types */
import { VFC, memo } from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'

type Props = {
  // image: string;
  // id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const ListCard: VFC<Props> = memo((props) => {
  const { name, price, imageUrl } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="White"
      borderRadius="10px"
      shadow="md" p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={name}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">{name}</Text>
        <Text fontSize="lg" fontWeight="bold">${price}</Text>
      </Stack>
    </Box>
  );
});
