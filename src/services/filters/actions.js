import { UPDATE_FILTER } from './actionTypes';
// sag: stores can modified using Action. 
export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});
