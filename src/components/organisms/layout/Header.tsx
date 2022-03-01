import { Flex, Heading, Box, useDisclosure, Button, Input } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import { VFC, memo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer";

type Props = {
  children: ReactNode;
}

export const Header: VFC<Props> = memo(() => {
const { isOpen, onOpen, onClose } = useDisclosure();
const history = useNavigate();

const onClickHome = useCallback(() => history("/home"), [history]);
const onClickCheckout = useCallback(() => history("/checkout_option"), [history]);

return (
<>
<Flex
  as="nav"
  bgGradient='linear(orange.500 10%, orange.400 20%, orange.300 70%)'
  color="gray.50"
  align="center"
  justify="space-between"
  padding={{ base: 12, md: 14 }}
>
  <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
    <Heading as="h1" fontSize={{ base: "xl", md: "2xl" }} color="black">𝕃𝕀ℚ𝕌𝕆ℝ 𝕊ℍ𝕆ℙ 𝕄𝔸𝕊𝔸<FontAwesomeIcon icon={faMartiniGlassCitrus} /></Heading>
  </Flex>

  <Box w='30%'>
    <Input placeholder='Search' bg="white" />
  </Box>
  <SearchIcon w={8} h={8} m={2} />

  <Flex
    align="center"
    justify="flex-end"
    fontSize="sm"
    flexGrow={2}
    display={{ base: "none", md: "flex" }}
  >
    <Box pr={4}>
      <Button colorScheme='teal' onClick={onClickCheckout}>Checkout</Button>
    </Box>
  </Flex>
  <MenuIconButton onOpen={onOpen}/>
</Flex>
 <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickCheckout={onClickCheckout} />
</>
);
});
