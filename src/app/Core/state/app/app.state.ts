import { IAuth } from 'src/app/Core/Interfaces/Responses/IAuth';




export interface AppState {
    loading: boolean,
    auth: IAuth | null
}


export const initialState: AppState = {
    loading: false,
    auth: null
};
