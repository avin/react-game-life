import { UPDATE_CONTROLS } from './actionTypes';

export function updateControls(controls) {
    return {
        type: UPDATE_CONTROLS,
        controls,
    };
}
