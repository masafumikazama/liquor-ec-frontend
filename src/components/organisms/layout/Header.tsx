import { Flex, Heading, Box, useDisclosure, Button, Input } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import { VFC, memo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMartiniGlassCitrus, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import 'react-multi-carousel/lib/styles.css';
import '../../../App.css';

import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer";

type Props = {
  children: ReactNode;
}

export const Header: VFC<Props> = memo(() => {
const { isOpen, onOpen, onClose } = useDisclosure();
const history = useNavigate();

const onClickHome = useCallback(() => history("/home"), [history]);
const onClickList = useCallback(() => history("/"), [history]);
const onClickBeer = useCallback(() => history("/beer"), [history]);
const onClickWhiskey = useCallback(() => history("/whiskey"), [history]);
const onClickCheckout = useCallback(() => history("/checkout_option"), [history]);

return (
<>
<Flex
  as="nav"
  bgGradient='linear(orange.500 10%, orange.400 20%, orange.300 70%)'
  color="gray.50"
  align="center"
  justify="space-between"
  padding={{ base: 8, md: 10 }}
>
  <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
    <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }} color="black">ππβππβ πβπβ ππΈππΈ<FontAwesomeIcon icon={faMartiniGlassCitrus} /></Heading>
  </Flex>

  <Box w='30%'>
    <Input placeholder='Search' bg="white" />
  </Box>
  <SearchIcon w={8} h={8} m={2} />

  <Flex
    align="center"
    ml={5}
    fontSize="sm"
    flexGrow={2}
    display={{ base: "none", md: "flex" }}
  >
    <Box pr={4}>
      <Button leftIcon={<FontAwesomeIcon icon={faCartShopping} />} size='lg' colorScheme='blackAlpha' onClick={onClickCheckout}>Checkout</Button>
    </Box>
  </Flex>
  <MenuIconButton onOpen={onOpen}/>
</Flex>

<Flex
  as="nav"
  bg="orange.300"
  color="gray.50"
  align="center"
  justify="space-between"
  padding={{ base: 1, md: 2 }}
>
  <Flex align="center" mb={6} ml={40} >
    <Heading className="menu" as="a" fontSize={{ base: "2xl", md: "3xl" }} _hover={{ cursor: "pointer", color: "white" }} onClick={onClickList}>πΈππ</Heading>
    <Heading className="menu" as="a" ml={5} fontSize={{ base: "2xl", md: "3xl" }} _hover={{ cursor: "pointer", color: "white" }} onClick={onClickBeer}>πΉπππ£</Heading>
    <Heading className="menu" as="a" ml={5} fontSize={{ base: "2xl", md: "3xl" }} _hover={{ cursor: "pointer", color: "white" }} onClick={onClickHome}>ππππ</Heading>
    <Heading className="menu" as="a" ml={5} fontSize={{ base: "2xl", md: "3xl" }} _hover={{ cursor: "pointer", color: "white" }} onClick={onClickWhiskey}>ππππ€πππͺ</Heading>
  </Flex>
</Flex>

 <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickCheckout={onClickCheckout} />
</>
);
});
