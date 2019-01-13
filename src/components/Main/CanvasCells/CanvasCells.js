import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import Grid from '../Grid/Grid';

export class CanvasCells extends React.Component {
    renderCells() {
        const { cells, cellSize, width, height } = this.props;
        const ctx = this.canvasRef.getContext('2d');
        ctx.clearRect(0, 0, width, height);

        const centerWidth = Math.floor(width / 2);
        const centerHeight = Math.floor(height / 2);

        ctx.shadowColor = '#394b59';
        ctx.shadowBlur = 5;
        ctx.fillStyle = '#394b59';

        cells.forEach(([x, y]) => {
            ctx.fillRect(x * cellSize + centerWidth, -y * cellSize + centerHeight, cellSize, cellSize);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.renderCells();
    }

    componentDidMount() {
        this.renderCells();
    }

    render() {
        const { width, height } = this.props;
        return (
            <div className={styles.container}>
                <canvas
                    width={width}
                    height={height}
                    ref={i => {
                        this.canvasRef = i;
                    }}
                />
                <Grid width={width} height={height} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        cells: state.cells,
        cellSize: state.controls.cellSize,
    };
}

export default connect(
    mapStateToProps,
    {},
)(CanvasCells);
