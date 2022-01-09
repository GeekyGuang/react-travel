interface RecommendProductsState {
    loading: boolean;
    error: string | null,
    productList: any[]
}

const defaultState: RecommendProductsState  = {
    loading: true,
    error: null,
    productList: []
}

const recommendProductsReducer = (state = defaultState, action) => {
  return state
}

export default recommendProductsReducer