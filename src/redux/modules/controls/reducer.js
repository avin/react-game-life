import { UPDATE_CONTROLS } from './actionTypes';

const initialState = {
    started: false,
    cellSize: +(localStorage.getItem(`life:cellSize`) || 10),
    speed: +(localStorage.getItem(`life:speed`) || 50),
    randomAreaSize: +(localStorage.getItem(`life:randomAreaSize`) || 20),
    randomAreaPopulation: +(localStorage.getItem(`life:randomAreaPopulation`) || 5),
    renderMode: localStorage.getItem(`life:renderMode`) || 'canvas',
    showGrid: JSON.parse(localStorage.getItem(`life:showGrid`)) || false,
    cleanLevel: +(localStorage.getItem(`life:cleanLevel`) || 100),
    stayAliveFrom: +(localStorage.getItem(`life:stayAliveFrom`) || 2),
    stayAliveTo: +(localStorage.getItem(`life:stayAliveTo`) || 3),
    newLifeFrom: +(localStorage.getItem(`life:newLifeFrom`) || 3),
    newLifeTo: +(localStorage.getItem(`life:newLifeTo`) || 3),
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
