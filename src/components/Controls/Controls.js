import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { updateControls } from '../../redux/modules/controls/actions';
import { clearCells, randomizeCells } from '../../redux/modules/cells/actions';
import GitHubLink from '../GitHubLink/GitHubLink';

const Icon = ({ value, label }) => (
    <span role="img" aria-label={label} className={styles.icon}>
        {value}
    </span>
);

export class Controls extends React.Component {
    handleToggleStart = () => {
        const { started, updateControls } = this.props;
        updateControls({ started: !started });
    };

    handleChangeSpeed = e => {
        const { updateControls } = this.props;
        updateControls({ speed: 500 - Number(e.currentTarget.value) });
    };

    handleChangeRandomAreaSize = e => {
        const { updateControls } = this.props;
        updateControls({ randomAreaSize: Number(e.currentTarget.value) });
    };

    handleChangeRandomAreaPopulation = e => {
        const { updateControls } = this.props;
        updateControls({ randomAreaPopulation: Number(e.currentTarget.value) });
    };

    handleRandomize = () => {
        const { randomizeCells } = this.props;
        randomizeCells();
    };

    handleChangeCellSize = e => {
        const { updateControls } = this.props;
        updateControls({ cellSize: Number(e.currentTarget.value) });
    };

    handleClear = e => {
        const { clearCells } = this.props;
        clearCells();
    };

    handleChangeRenderMode = e => {
        const { updateControls } = this.props;
        updateControls({ renderMode: e.currentTarget.value });
    };

    handleChangeShowGrid = e => {
        const { updateControls } = this.props;
        updateControls({ showGrid: e.currentTarget.checked });
    };

    handleChangeCleanLevel = e => {
        const { updateControls } = this.props;
        updateControls({ cleanLevel: Number(e.currentTarget.value) });
    };

    renderCanvasOptions() {
        const { cleanLevel } = this.props;
        return (
            <>
                <div className={styles.control}>
                    <label htmlFor="cleanLevel" className={styles.rangeLabel}>
                        Clean level:
                    </label>
                    <input
                        type="range"
                        name="cleanLevel"
                        min="0"
                        max="100"
                        onChange={this.handleChangeCleanLevel}
                        value={cleanLevel}
                    />
                </div>
            </>
        );
    }

    render() {
        const { started, speed, randomAreaSize, randomAreaPopulation, cellSize, renderMode, showGrid } = this.props;

        return (
            <div className={styles.controls}>
                <div className={styles.logo}>The Game of Life</div>

                <div className={styles.separator} />

                <div className={styles.control}>
                    <button onClick={this.handleToggleStart} style={{ fontWeight: 'bold' }}>
                        {started ? <span>&#10073;&#10073; Pause</span> : <span>&#9658; Play</span>}
                    </button>
                </div>

                <div className={styles.control}>
                    <label htmlFor="speedControl" className={styles.rangeLabel}>
                        Speed:
                    </label>
                    <input
                        type="range"
                        name="speedControl"
                        min="1"
                        max="500"
                        onChange={this.handleChangeSpeed}
                        value={500 - speed}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="speedControl" className={styles.rangeLabel}>
                        Cell size:
                    </label>
                    <input
                        type="range"
                        name="cellSize"
                        min="2"
                        max="50"
                        onChange={this.handleChangeCellSize}
                        value={cellSize}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="showGrid" className={styles.rangeLabel}>
                        Show grid:
                    </label>
                    <input type="checkbox" name="showGrid" onChange={this.handleChangeShowGrid} checked={showGrid} />
                </div>

                <div className={styles.separator} />

                <div className={styles.control}>
                    <label htmlFor="randomAreaSize" className={styles.rangeLabel}>
                        Random area size:
                    </label>
                    <input
                        type="range"
                        name="randomAreaSize"
                        min="10"
                        max="100"
                        onChange={this.handleChangeRandomAreaSize}
                        value={randomAreaSize}
                    />
                </div>

                <div className={styles.control}>
                    <label htmlFor="randomAreaPopulation" className={styles.rangeLabel}>
                        Random area population:
                    </label>
                    <input
                        type="range"
                        name="randomAreaPopulation"
                        min="1"
                        max="9"
                        onChange={this.handleChangeRandomAreaPopulation}
                        value={randomAreaPopulation}
                    />
                </div>

                <div className={styles.control}>
                    <button onClick={this.handleRandomize}>Randomize</button>
                </div>

                <div className={styles.separator} />

                <div className={styles.hint}>
                    <Icon label="Hint" value="💡" />
                    You can draw cells by the left mouse button and clean by the right one.
                </div>

                <div className={styles.control}>
                    <button onClick={this.handleClear}>Clear</button>
                </div>

                <div className={styles.separator} />

                <div className={styles.control}>
                    <label htmlFor="renderMode" className={styles.rangeLabel}>
                        Render mode:
                    </label>

                    <select
                        name="renderMode"
                        className={styles.selectBox}
                        onChange={this.handleChangeRenderMode}
                        value={renderMode}
                    >
                        <option value="html">HTML (Pure React)</option>
                        <option value="canvas">Canvas (Most performance)</option>
                    </select>
                </div>

                {renderMode === 'canvas' && this.renderCanvasOptions()}

                <div className="filler" />
                <GitHubLink />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        started: state.controls.started,
        renderMode: state.controls.renderMode,
        speed: state.controls.speed,
        cellSize: state.controls.cellSize,
        showGrid: state.controls.showGrid,
        randomAreaSize: state.controls.randomAreaSize,
        cleanLevel: state.controls.cleanLevel,
    };
}

export default connect(
    mapStateToProps,
    {
        updateControls,
        randomizeCells,
        clearCells,
    },
)(Controls);
