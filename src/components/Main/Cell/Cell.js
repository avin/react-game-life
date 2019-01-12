import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';

export class Cell extends React.Component {
    render() {
        const { cellSize, x, y } = this.props;
        return (
            <div
                className={styles.cell}
                style={{ width: cellSize, height: cellSize, left: x * cellSize, top: -y * cellSize }}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cellSize: state.controls.cellSize,
    };
}

export default connect(
    mapStateToProps,
    {},
)(Cell);
