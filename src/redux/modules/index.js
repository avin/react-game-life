import { combineReducers } from 'redux';

import controls from './controls';
import cells from './cells';

export default combineReducers({
    controls,
    cells,
});
