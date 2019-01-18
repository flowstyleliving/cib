import { FEELING_SELECTED } from './types';

export const selectFeeling = (feeling) => {
    return {
        type: "FEELING_SELECTED",
        payload: feeling
    }
}