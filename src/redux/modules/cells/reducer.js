import { SET_CELLS } from './actionTypes';

const initialState = [[1, 2], [2, 1], [2, 0], [1, 0], [0, 0]];

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CELLS: {
            const { cells } = action;
            return cells;
        }
        default:
            return state;
    }
}
