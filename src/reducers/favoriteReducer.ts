import { ACTION_CLICKED_FAVORITE, onClickFavorite } from '../actions/favorite';

type FavoriteAction = ReturnType<typeof onClickFavorite>;
type FavoriteState = {
    favoriteList: string[];
};

export const initialState = {
    favoriteList: [],
};

export const favoriteListReducer = (state: FavoriteState = initialState, action: FavoriteAction) => {
    if (action.type === ACTION_CLICKED_FAVORITE) {
        const hasItem = state.favoriteList.filter(item => item === action.clicked).length > 0;
        if (hasItem) {
            return {
                ...state,
                favoriteList: state.favoriteList.filter(item => item !== action.clicked),
            };
        }

        return {
            ...state,
            favoriteList: state.favoriteList.concat([action.clicked]),
        };
    }
    return {
        ...state,
    };
};
