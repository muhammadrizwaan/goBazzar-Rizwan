const initialState = {
    PageNumber: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGENUMBER":
            return {
                PageNumber: state.PageNumber+1
            }
        case "RESET_PAGENUMBER":
            return {
                PageNumber: 0
            }
        
        default:
            return state
    }
}