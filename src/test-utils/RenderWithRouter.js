import { BrowserRouter } from 'react-router-dom';

const RenderWithBrowserRouter = (children) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
};

export default RenderWithBrowserRouter;