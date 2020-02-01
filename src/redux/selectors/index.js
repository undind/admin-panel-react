import { createSelector } from 'reselect'

const selectServicesItems = state => state.services;

export const selectServices = createSelector(
    selectServicesItems,
    services => {
        return {
            items: Object.values(services.items),
            isFetching: services.isFetching
        }
    }
  )
