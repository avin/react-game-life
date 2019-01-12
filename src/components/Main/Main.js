import React from 'react';
import { connect } from 'react-redux';
import repeat from '@avinlab/repeat';
import styles from './styles.module.scss';
import { evaluateCells } from '../../redux/modules/cells/actions';
import Cell from './Cell/Cell';
import { makeKey } from '../../utils/helpers';

export class Main extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.speed !== this.props.speed) {
            this.repeater.updateDelay(this.props.speed);
        }

        if (!prevProps.started && this.props.started) {
            this.repeater.start();
        } else if (prevProps.started && !this.props.started) {
            this.repeater.stop();
        }
    }

    componentDidMount() {
        const { evaluateCells, speed } = this.props;

        this.repeater = repeat({
            action: evaluateCells,
            delay: speed,
        });
    }

    renderCells() {
        const { cells } = this.props;

        return cells.map(cell => {
            const [x, y] = cell;
            return <Cell key={makeKey(x, y)} x={x} y={y} />;
        });
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.cellsContainer}>{this.renderCells()}</div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cells: state.cells,
        speed: state.controls.speed,
        started: state.controls.started,
    };
}

export default connect(
    mapStateToProps,
    {
        evaluateCells,
    },
)(Main);
