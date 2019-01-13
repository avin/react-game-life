import React from 'react';
import { connect } from 'react-redux';
import repeat from '@avinlab/repeat';
import SizeMe from '@avinlab/react-size-me';
import styles from './styles.module.scss';
import { addCell, evaluateCells, removeCell } from '../../redux/modules/cells/actions';
import DivCells from './DivCells/DivCells';
import CanvasCells from './CanvasCells/CanvasCells';

const DRAW_MODES = {
    NONE: 0,
    DRAW: 1,
    CLEAR: 2,
};

export class Main extends React.Component {
    state = {
        drawMode: DRAW_MODES.NONE,
    };

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

    componentWillUnmount() {
        this.repeater.stop();
    }

    handleMouseOver = ({ clientX, clientY }) => {
        const { drawMode } = this.state;
        const { addCell, removeCell, cellSize } = this.props;

        const x = Math.floor((clientX - (this.containerRef.offsetLeft + this.containerRef.offsetWidth / 2)) / cellSize);
        const y = Math.ceil((this.containerRef.offsetTop + this.containerRef.offsetHeight / 2 - clientY) / cellSize);

        if (drawMode === DRAW_MODES.DRAW) {
            addCell({ x, y });
        } else if (drawMode === DRAW_MODES.CLEAR) {
            removeCell({ x, y });
        }
    };

    handleMouseDown = ({ clientX, clientY, button }) => {
        switch (button) {
            case 0:
                this.setState(
                    {
                        drawMode: DRAW_MODES.DRAW,
                    },
                    () => {
                        this.handleMouseOver({ clientY, clientX });
                    },
                );
                break;
            case 2:
                this.setState(
                    {
                        drawMode: DRAW_MODES.CLEAR,
                    },
                    () => {
                        this.handleMouseOver({ clientY, clientX });
                    },
                );
                break;
            default:
        }
    };

    handleStopDrawing = e => {
        this.setState({
            drawMode: DRAW_MODES.NONE,
        });
    };

    handleContextMenu = e => {
        e.preventDefault();
    };

    renderContent() {
        const { renderMode } = this.props;
        switch (renderMode) {
            case 'html':
                return <SizeMe>{({ width, height }) => <DivCells width={width} height={height} />}</SizeMe>;
            case 'canvas':
                return <SizeMe>{({ width, height }) => <CanvasCells width={width} height={height} />}</SizeMe>;
            default:
        }
    }

    render() {
        return (
            <div
                ref={i => {
                    this.containerRef = i;
                }}
                className={styles.main}
                onMouseMove={this.handleMouseOver}
                onMouseDown={this.handleMouseDown}
                onMouseUp={this.handleStopDrawing}
                onMouseLeave={this.handleStopDrawing}
                onContextMenu={this.handleContextMenu}
            >
                {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        speed: state.controls.speed,
        renderMode: state.controls.renderMode,
        started: state.controls.started,
        cellSize: state.controls.cellSize,
    };
}

export default connect(
    mapStateToProps,
    {
        evaluateCells,
        addCell,
        removeCell,
    },
)(Main);
