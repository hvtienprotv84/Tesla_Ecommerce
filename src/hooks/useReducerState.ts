import { useAppSelector } from "../app/store";
//car cart reducers
export const useCartState = () => useAppSelector((state) => state.car.cart);
