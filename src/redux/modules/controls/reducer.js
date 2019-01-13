import { UPDATE_CONTROLS } from './actionTypes';

const initialState = {
    started: false,
    cellSize: +(localStorage.getItem(`life:cellSize`) || 10),
    speed: +(localStorage.getItem(`life:speed`) || 50),
    randomAreaSize: +(localStorage.getItem(`life:randomAreaSize`) || 20),
    randomAreaPopulation: +(localStorage.getItem(`life:randomAreaPopulation`) || 5),
    renderMode: localStorage.getItem(`life:renderMode`) || 'html',
    showGrid: localStorage.getItem(`life:showGrid`) || false,
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
