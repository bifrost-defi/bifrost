import "./index-9a875c02.js";
import { s as stores } from "./singletons-a9c21052.js";
const getStores = () => {
  const stores$1 = stores;
  return {
    page: {
      subscribe: stores$1.page.subscribe
    },
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    updated: stores$1.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
export {
  page as p
};
