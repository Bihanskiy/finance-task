import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

export const renderTestApp = (component, options) => {
    const store = createReduxStore(options?.initialState);

    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
                {component}
            </MemoryRouter>
        </Provider>
    )
}
