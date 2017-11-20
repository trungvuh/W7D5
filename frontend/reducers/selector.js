import values from 'lodash/values';

export const selectAllBenches = state => {
  return values(state.entities.benches);
};
