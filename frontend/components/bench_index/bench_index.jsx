import React from 'react';
import BenchIndexItem from './bench_index_item';

class SessionIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBenches();
  }

  render () {
    console.log(this.props.benches);
    return (
      <div>
        <ul>
          {
            this.props.benches.map((bench) => <BenchIndexItem bench={bench} key={bench.id} />)
          }
        </ul>
      </div>
    );
  }
}

export default SessionIndex;
