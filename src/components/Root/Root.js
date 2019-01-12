import React from 'react';
import { Provider } from 'react-redux';
import styles from './styles.module.scss';
import Controls from '../Controls/Controls';
import Main from '../Main/Main';

export default class Root extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <div className={styles.root}>
                    <Controls />
                    <Main />
                </div>
            </Provider>
        );
    }
}
