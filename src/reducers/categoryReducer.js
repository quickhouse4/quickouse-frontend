import {
  RENT_CATEGORY,
  SELL_CATEGORY,
  SEARCH_CATEGORY,
  FOR_RENT,
  FOR_SALE
} from "../actions/types";

export const activeCategoryReducer = (
  state = { activeCategory: "search" },
  action
) => {
  switch (action.type) {
    case RENT_CATEGORY:
      return { activeCategory: "rent" };
    case SELL_CATEGORY:
      return { activeCategory: "sell" };
    case SEARCH_CATEGORY:
      return { activeCategory: "search" };
    case FOR_RENT:
        return { activeCategory: "forRent" };
    case FOR_SALE:
          return { activeCategory: "forSale" };
    default:
      return state;
  }
};
