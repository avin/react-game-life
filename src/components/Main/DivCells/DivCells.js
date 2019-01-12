import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import Cell from './Cell/Cell';
import { makeKey } from '../../../utils/helpers';

export class DivCells extends React.Component {
    renderCells() {
        const { cells } = this.props;

        return cells.map(cell => {
            const [x, y] = cell;
            return <Cell key={makeKey(x, y)} x={x} y={y} />;
        });
    }

    render() {
        return <div className={styles.cellsContainer}>{this.renderCells()}</div>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cells: state.cells,
    };
}

export default connect(
    mapStateToProps,
    {},
)(DivCells);
