import { useTypedSelector } from "./useTypedSelector";

export const useFavourites = () => {
  const favourites = useTypedSelector((state) => state.favourites.favourites);

  return { favourites };
};
