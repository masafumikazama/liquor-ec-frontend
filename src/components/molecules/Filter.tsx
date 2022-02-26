import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Flex, Spacer } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { VFC, memo } from "react";

export const Filter: VFC<unknown> = memo(() => (
  <>
  <Flex>
    <Box p='4' bg='green.400'>
      Filter
    </Box>
    <Spacer />
    <Box p='4' bg='red.400'>
      Apply
    </Box>
  </Flex>

  <Accordion allowMultiple>
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Price Range
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' />
              ) : (
                <AddIcon fontSize='12px' />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              Country
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
    </AccordionItem>

    <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
            Brand
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
    </AccordionItem>
  </Accordion>
  </>
  ));
