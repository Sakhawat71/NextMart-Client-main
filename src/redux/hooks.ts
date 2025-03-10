import {
    useDispatch,
    useSelector,
    useStore,
    TypedUseSelectorHook
} from "react-redux";
import type {
    RootState,
    AppDispatch,
    AppStore
} from "./store";

// Correct way to type Redux hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
