import { Provider } from 'react-redux';
import { store } from '../store/store';

export const RenderWithProvider = (children) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default RenderWithProvider;