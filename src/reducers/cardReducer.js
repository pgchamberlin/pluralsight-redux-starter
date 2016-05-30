import * as types from '../actions/actionTypes';

export default function cardReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_CARD:
            return [...state,
                Object.assign({}, action.card)
            ];
        default:
            return state;
    }
}
