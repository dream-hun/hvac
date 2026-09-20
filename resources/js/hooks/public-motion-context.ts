import { createContext } from 'react';

export type PublicMotionState = {
    /** True while decorative motion is suspended, by the visitor or by an open menu. */
    paused: boolean;
    toggle: () => void;
};

export const PublicMotionContext = createContext<PublicMotionState>({
    paused: false,
    toggle: () => undefined,
});
