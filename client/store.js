import moment from 'moment';

const store = {
  user: null,
  initialLoadingDate: moment().subtract(6,'weeks').startOf('isoWeek').format('Y-MM-DD')
};

export default store;
