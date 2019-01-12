import { SET_CELLS, ADD_CELL, REMOVE_CELL } from './actionTypes';

const initialState = [[1, 2], [2, 1], [2, 0], [1, 0], [0, 0]];

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_CELLS: {
            const { cells } = action;
            return cells;
        }
        case ADD_CELL: {
            const { x, y } = action;

            if (!state.find(([cx, cy]) => cx === x && cy === y)) {
                return [...state, [x, y]];
            }
            return state;
        }
        case REMOVE_CELL: {
            const { x, y } = action;

            state = [...state];
            return state.filter(([cx, cy]) => !(cx === x && cy === y));
        }
        default:
            return state;
    }
}
