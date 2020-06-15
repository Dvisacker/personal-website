import React, { createContext, useContext, useReducer, Dispatch } from "react";

type AppState = {
    layout: LayoutState;
};

type LayoutState = {
    currentTab: number;
};

type Action = { type: "CHANGE_TAB"; payload: { newTab: number } };

type AppReducer = (state: AppState, action: Action) => AppState;

export function layoutReducer(state: LayoutState, action: Action): LayoutState {
    switch (action.type) {
        case "CHANGE_TAB":
            return {
                ...state,
                currentTab: action.payload.newTab,
            };
        default:
            return state;
    }
}

export const appReducer = ({ layout }: AppState, action: Action): AppState => ({
    layout: layoutReducer(layout, action),
});

export const initialState = {
    layout: {
        currentTab: 0,
    },
};

export const StateContext = createContext<[AppState, Dispatch<Action>] | undefined>(undefined);

export interface StateProviderProps {
    reducer: AppReducer;
    initialState: AppState;
    children: JSX.Element;
}

export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

export const getState = () => useContext(StateContext);
