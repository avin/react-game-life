import { SET_CELLS } from './actionTypes';
import { makeKey } from '../../../utils/helpers';

const aroundCells = [];
for (let ix = -1; ix <= 1; ix += 1) {
    for (let iy = -1; iy <= 1; iy += 1) {
        if (!(ix === 0 && iy === 0)) {
            aroundCells.push([ix, iy]);
        }
    }
}

export function evaluateCells() {
    // eslint-disable-next-line sonarjs/cognitive-complexity
    return (dispatch, getState) => {
        const { cells } = getState();

        // Grab all cells for calculation
        const calculateCells = {};
        cells.forEach(cell => {
            const [x, y] = cell;
            const key = makeKey(x, y);

            calculateCells[key] = {
                filled: 1,
                x,
                y,
            };

            aroundCells.forEach(([ix, iy]) => {
                const rx = x + ix;
                const ry = y + iy;

                const key = makeKey(rx, ry);
                if (!calculateCells[key] || !calculateCells[key].filled) {
                    calculateCells[key] = {
                        filled: 0,
                        x: rx,
                        y: ry,
                    };
                }
            });
        });

        // Calculate new cells
        const resultCells = [];

        // eslint-disable-next-line guard-for-in
        for (const key in calculateCells) {
            const { filled, x, y } = calculateCells[key];

            let countFilledAround = 0;

            // Count around filled cells
            aroundCells.forEach(([ix, iy]) => {
                const rx = x + ix;
                const ry = y + iy;

                const key = makeKey(rx, ry);
                if (calculateCells[key] && calculateCells[key].filled) {
                    countFilledAround += 1;
                }
            });

            if (filled && (countFilledAround === 2 || countFilledAround === 3)) {
                // Just stay alive
                resultCells.push([x, y]);
            } else if (filled && countFilledAround > 3) {
                // Overpopulation - die
            } else if (filled && countFilledAround < 2) {
                // Loneliness - die
            } else if (!filled && countFilledAround === 3) {
                // New life
                resultCells.push([x, y]);
            }
        }

        dispatch({
            type: SET_CELLS,
            cells: resultCells,
        });
    };
}

export function setCells(cells) {
    return {
        type: SET_CELLS,
        cells,
    };
}

export function randomizeCells() {
    return (dispatch, getState) => {
        const { randomAreaSize, randomAreaPopulation } = getState().controls;

        const cells = [];
        for (let x = 0; x < randomAreaSize; x += 1) {
            for (let y = 0; y < randomAreaSize; y += 1) {
                if (Math.random() < randomAreaPopulation / 10) {
                    const halfSize = Math.round(randomAreaSize / 2);
                    const rx = x - halfSize;
                    const ry = y - halfSize;
                    cells.push([rx, ry]);
                }
            }
        }

        dispatch({
            type: SET_CELLS,
            cells,
        });
    };
}
