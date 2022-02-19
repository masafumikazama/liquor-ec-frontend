import { Flex, Heading, Box, useDisclosure, Button } from "@chakra-ui/react"
import { VFC, memo, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
  bg="teal.500"
  color="gray.50"
  align="center"
  justify="space-between"
  padding={{ base: 3, md: 5 }}
>
  <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>LIQUOR SHOP MASA</Heading>
  </Flex>

  <Flex
    align="center"
    fontSize="sm"
    flexGrow={2}
    display={{ base: "none", md: "flex" }}
  >
    <Box pr={4}>
      <Button colorScheme='red' onClick={onClickCheckout}>Checkout</Button>
    </Box>
    <Button colorScheme='red' onClick={onClickCheckout}>Checkout</Button>
  </Flex>
  <MenuIconButton onOpen={onOpen}/>
</Flex>
 <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickCheckout={onClickCheckout} />
</>
);
});
