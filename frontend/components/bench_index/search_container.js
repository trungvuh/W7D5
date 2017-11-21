import { connect } from 'react-redux';

import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { selectAllBenches } from '../../reducers/selector';


const mapStateToProps = (state) => ({
  benches: selectAllBenches(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
