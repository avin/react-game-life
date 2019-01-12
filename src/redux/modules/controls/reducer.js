import { UPDATE_CONTROLS } from './actionTypes';

const initialState = {
    started: false,
    cellSize: 5,
    speed: 50,
    randomAreaSize: 20,
    randomAreaPopulation: 5,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_CONTROLS: {
            const { controls } = action;
            return { ...state, ...controls };
        }
        default:
            return state;
    }
}
