/* eslint-disable react/prop-types */
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react";
import { VFC, memo } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickCheckout: () => void;
}

export const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen, onClickHome, onClickCheckout } = props;
  return (
    <Drawer placement="left" size="xs" onClose={ onClose } isOpen={ isOpen }>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody p={0} bg="gray.100">
          <Button w="100%" onClick={onClickHome}>Home</Button>
          <Button w="100%" onClick={onClickCheckout}>Checkout</Button>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
  );
});
