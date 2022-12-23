const reducer = (state, action) => {
    switch (action.type) {
        case "Get_Stories":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false,
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((curelem) => curelem.objectID !== action.payload
                ),
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query: action.payload,
            };

        case "NEXT_PAGE":
            let pageinc = state.page + 1;
            if (pageinc >= state.nbPages) {
                pageinc = 0;
            }
            return {
                ...state,
                page: pageinc,
            };

        case "PREV_PAGE":
            let pageno = state.page - 1;
            if (pageno <= 0) {
                pageno = 0

            }
            return {
                ...state,
                page: pageno,

            };
    }

    return state;
};
export default reducer;