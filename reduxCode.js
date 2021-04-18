import { createStore } from "redux";

const SHARE = "SHARE";

const shareArticle = () => ({
  type: SHARE
})

const initialState = {
  sharing: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SHARE
    : {
      return {...state, sharing: !state.sharing}
    }
    default
    : return state
  }
}

export const store = createStore(reducer);

export const mapStateToProps = (state) => ({
  sharing: state.sharing
});

export const mapDispatchToProps = (dispatch) => ({
  shareArticle: () => dispatch(shareArticle())
});