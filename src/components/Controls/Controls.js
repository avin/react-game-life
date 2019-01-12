import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import { updateControls } from '../../redux/modules/controls/actions';
import { randomizeCells } from '../../redux/modules/cells/actions';

export class Controls extends React.Component {
    handleToggleStart = () => {
        const { started, updateControls } = this.props;
        updateControls({ started: !started });
    };

    handleChangeSpeed = e => {
        const { updateControls } = this.props;
        updateControls({ speed: 500 - e.currentTarget.value });
    };

    handleChangeRandomAreaSize = e => {
        const { updateControls } = this.props;
        updateControls({ randomAreaSize: e.currentTarget.value });
    };

    handleChangeRandomAreaPopulation = e => {
        const { updateControls } = this.props;
        updateControls({ randomAreaPopulation: e.currentTarget.value });
    };

    handleRandomize = () => {
        const { randomizeCells } = this.props;
        randomizeCells();
    };

    render() {
        const { started, speed, randomAreaSize, randomAreaPopulation } = this.props;

        return (
            <div className={styles.controls}>
                <div className={styles.control}>
                    <button onClick={this.handleToggleStart}>{started ? 'Stop' : 'Start'}</button>
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
                    <label htmlFor="randomAreaSize" className={styles.rangeLabel}>
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
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        started: state.controls.started,
        speed: state.controls.speed,
        randomAreaSize: state.controls.randomAreaSize,
    };
}

export default connect(
    mapStateToProps,
    {
        updateControls,
        randomizeCells,
    },
)(Controls);
