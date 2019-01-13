import React from 'react';
import { connect } from 'react-redux';
import cn from 'clsx';
import styles from './styles.module.scss';

export class Grid extends React.Component {
    renderLines() {
        const { width, height, cellSize } = this.props;

        const lines = [];
        for (let i = 0; i < width / 2; i += cellSize) {
            lines.push(
                <line
                    key={`v_${i}`}
                    x1={i - 0.5}
                    y1={-height / 2}
                    x2={i - 0.5}
                    y2={height / 2}
                    className={cn(styles.line, { [styles.boldLine]: !(i % (5 * cellSize)) })}
                />,
            );
            i &&
                lines.push(
                    <line
                        key={`v_${-i}`}
                        x1={-i - 0.5}
                        y1={-height / 2}
                        x2={-i - 0.5}
                        y2={height / 2}
                        className={cn(styles.line, { [styles.boldLine]: !(i % (5 * cellSize)) })}
                    />,
                );
        }
        for (let i = 0; i < height / 2; i += cellSize) {
            lines.push(
                <line
                    key={`h_${i}`}
                    y1={i - 0.5}
                    x1={-width / 2}
                    y2={i - 0.5}
                    x2={width / 2}
                    className={cn(styles.line, { [styles.boldLine]: !(i % (5 * cellSize)) })}
                />,
            );
            i &&
                lines.push(
                    <line
                        key={`h_${-i}`}
                        y1={-i - 0.5}
                        x1={-width / 2}
                        y2={-i - 0.5}
                        x2={width / 2}
                        className={cn(styles.line, { [styles.boldLine]: !(i % (5 * cellSize)) })}
                    />,
                );
        }

        return lines;
    }

    render() {
        const { width, height, showGrid } = this.props;

        if (!showGrid) {
            return null;
        }

        return (
            <svg width={width} height={height} className={styles.grid}>
                <g transform={`matrix(1 0 0 -1 ${width / 2} ${height / 2})`}>{this.renderLines()}</g>
            </svg>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cellSize: state.controls.cellSize,
        showGrid: state.controls.showGrid,
    };
}

export default connect(
    mapStateToProps,
    {},
)(Grid);
