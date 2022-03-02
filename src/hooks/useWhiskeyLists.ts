/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useState } from "react"

import { Liquor } from "../types/api/liquor"
import { useMessage } from "./useMessage"

export const useWhiskeyLists = () => {
  const { showMessage } = useMessage()

  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState<Array<Liquor>>([]);

  console.log(lists)
  const getLists = useCallback(() => {
    setLoading(true)
    axios
    .get<Array<Liquor>>("http://localhost:3000/api/v1/liquors/index_whiskey")
    .then((res) => setLists(Object.values(res.data).flat(2)) )
    .catch(() => {
      showMessage({ title: "false get Lists", status: "error" })
    }).finally(()=> {
      setLoading(false)
    });
  }, []);
  return { getLists,  loading, lists}
}
