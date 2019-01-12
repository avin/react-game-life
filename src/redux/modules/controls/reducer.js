import { UPDATE_CONTROLS } from './actionTypes';

const initialState = {
    started: false,
    cellSize: 10,
    speed: 50,
    randomAreaSize: 20,
    randomAreaPopulation: 5,
    renderMode: 'html',
};

Object.keys(initialState).forEach(key => {
    if (!['started'].includes(key)) {
        const savedValue = localStorage.getItem(`life:${key}`);
        if (savedValue !== null) {
            initialState[key] = savedValue;
        }
    }
});

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
