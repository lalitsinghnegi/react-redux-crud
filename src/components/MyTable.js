import React,{ Component } from 'react';
import DataTable,{ createTheme } from 'react-data-table-component';
 
const data = [{ id: 1, title: 'Conan the Barbarian', name:'xyz',year: '1982' },
{ id: 2, title: 'Barbarian',name:'asdf', year: '1983' },
{ id: 3, title: 'Conan ', name:'abc',year: '1984' },
{ id: 4, title: 'Conarian', name:'bnmm',year: '1985' }];
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },{
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];
 
createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});
class MyTable extends Component {
  render() {
    return (
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
        theme="solarized"
        pagination="true"
        defaultSortAsc="true"
        selectableRows="true"
        selectableRowsHighlight="true"
        expandableRows="true"
      />
    )
  }
};

export default MyTable;