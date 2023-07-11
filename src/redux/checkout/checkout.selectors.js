import { createSelector } from 'reselect';

const loginData = (state) => state.user;

export const selectLoginData = createSelector([loginData], (user) => user);
