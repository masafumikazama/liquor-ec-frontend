/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import { useCallback, useState } from "react"

import { User } from "../types/api/user"
import { useMessage } from "./useMessage"

export const useAllLists = () => {
  const { showMessage } = useMessage()

  const [loading, setLoading] = useState(false);
  const [lists, setLists] = useState<Array<User>>([]);

  const getLists = useCallback(() => {
    setLoading(true)
    axios
    .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => setLists(res.data) )
    .catch(() => {
      showMessage({ title: "false get Lists", status: "error" })
    }).finally(()=> {
      setLoading(false)
    });
  }, []);
  return { getLists,  loading, lists}
}
