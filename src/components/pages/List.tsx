/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react-hooks/exhaustive-deps */
import { VFC, memo, useEffect } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/layout";
import { Spinner, Grid, GridItem } from "@chakra-ui/react";
import { ListCard } from "../organisms/list/ListCard";
import { useAllLists } from "../../hooks/useAllLists"
import { Filter } from "../molecules/Filter";

export const List: VFC = memo(() => {
  const { getLists, lists, loading } = useAllLists()

  useEffect(() => getLists(), [])

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
      <Grid
        h='200px'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg='white'>
          <Filter />
        </GridItem>
        <GridItem colSpan={4}>
          <Wrap p={{ base: 4, md: 10 }}>
            {lists.map((list) => (
              <WrapItem key={list.id} mx="auto">
                {console.log(list)}
                <ListCard
                  // image="https://source.unsplash.com/random"
                  // id={list.id}
                  imageUrl={`http://localhost:3000${list.avatar.url}`}
                  name={list.name}
                  price={list.price} />
            </WrapItem>
            ))}
          </Wrap>
        </GridItem>
      </Grid>
      )}
    </>
  );
});
