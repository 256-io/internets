import React from 'react';
import mount from 'enzyme/mount';
import TableCell from '@material-ui/core/TableCell';
import TableHeaders, { columns } from '.';

jest.mock('@material-ui/core/TableCell', () => p => <div>{p.children}</div>);
jest.mock('@material-ui/core/TableRow', () => p => p.children);
jest.mock('@material-ui/core/TableHead', () => p => p.children);

describe('TableHeaders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<TableHeaders />);
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should render a button with the label fro each column ', () => {
    const cells = wrapper.find(TableCell);
    columns.forEach(({ label }) => {
      const cell = cells.findWhere(n => n.text() === label);
      expect(cell.exists()).toBeTruthy();
    });
  });
});
