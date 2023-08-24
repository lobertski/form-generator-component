import { useSelector as useSelectorSlice } from "../store/slices";
import { States } from "./types";

const useSelector = (name: States) => {
  const state = useSelectorSlice((state) => state[name]);
  return state;
};

export default useSelector;

/**
 * Retrieves and returns the state value for the specified name.
 *
 * @param {States} name - The name of the state to retrieve.
 * @return {*} The state value for the specified name.
 */
