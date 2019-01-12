import { UPDATE_CONTROLS } from './actionTypes';

export function updateControls(controls) {
    Object.keys(controls).forEach(key => {
        localStorage.setItem(`life:${key}`, controls[key]);
    });

    return {
        type: UPDATE_CONTROLS,
        controls,
    };
}
