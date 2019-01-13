import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import Cell from './Cell/Cell';
import { makeKey } from '../../../utils/helpers';
import Grid from '../Grid/Grid';

export class DivCells extends React.Component {
    renderCells() {
        const { cells } = this.props;

        return cells.map(cell => {
            const [x, y] = cell;
            return <Cell key={makeKey(x, y)} x={x} y={y} />;
        });
    }

    render() {
        const { width, height } = this.props;

        return (
            <div className={styles.container}>
                <div className={styles.cellsContainer}>{this.renderCells()}</div>
                <Grid width={width} height={height} />
            </div>
        );
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
