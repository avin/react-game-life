import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import Grid from '../Grid/Grid';

export class CanvasCells extends React.Component {
    renderCells() {
        const { cells, cellSize, width, height, cleanLevel } = this.props;
        const ctx = this.canvasRef.getContext('2d');
        const ctx2 = this.canvasTempRef.getContext('2d');

        ctx.shadowBlur = 0;

        if (width && height) {
            ctx2.clearRect(0, 0, width, height);
            ctx2.globalAlpha = (100 - cleanLevel) / 100;
            ctx2.drawImage(this.canvasRef, 0, 0);
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(this.canvasTempRef, 0, 0);
        }

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
        // const {width, height} = this.props;
        // const ctx = this.canvasRef.getContext('2d');
        // ctx.clearRect(0, 0, width, height);

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
                <canvas
                    width={width}
                    height={height}
                    ref={i => {
                        this.canvasTempRef = i;
                    }}
                    style={{ display: 'none' }}
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
        cleanLevel: state.controls.cleanLevel,
    };
}

export default connect(
    mapStateToProps,
    {},
)(CanvasCells);
