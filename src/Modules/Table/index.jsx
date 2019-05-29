import React from 'react'
// import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SEO from '../../Utils/Lib/seo';
import {SortedTable} from '../../Components/Table';
// import Icon from '../../Components/Icon'
import {mockProductList} from '../../Utils/Constants/mockData'


const rows = [
  { id: 'Key', numeric: false, isCheckbox: false, label: 'Key' },
  { id: 'Name', numeric: false, isCheckbox: false, label: 'Name' },
  { id: 'Created_At', numeric: false, isCheckbox: false, label: 'Created_At' },
  { id: 'Updated_At', numeric: false, isCheckbox: false, label: 'Updated_At' },
  { id: 'Display', numeric: false, isCheckbox: true, label: 'Display' },
];

function TableContainer() {
  // const ref = React.useRef();

  // console.log(ref)
  return (
    <React.Fragment>
      <SEO
        schema="AboutPage"
        title="Base"
        description="A starting point for Meteor applications."
        path="/"
        contentType="product"/>
      <Link to="/">Go to Home</Link>
      <div>Table</div>
      <SortedTable 
        data={mockProductList}
        headColumnName={rows}
        orderBy="Name"
        direction="asc"
        onRowClick={(e)=>console.log(e)}
      />
    </React.Fragment>
  )
}

TableContainer.propTypes = {}

const mapState = state => ({count: state.sharedModel.count});

const mapDispatch = ({
  sharedModel: {
    increment,
    incrementAsync
  }
}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

export default withRouter((connect(mapState, mapDispatch)(TableContainer)));
