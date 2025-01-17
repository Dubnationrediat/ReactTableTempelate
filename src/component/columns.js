import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name'
  },
  {
    Header: 'Date Of Birth',
    Footer: 'Date Of Birth',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      try {
        return format(new Date(value), 'dd/MM/yyyy');
      } catch (error) {
        console.error("Invalid date value:", value);
        return value;
      }
    }
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone'
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name'
      },
      {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header: 'Date Of Birth',
        Footer: 'Date Of Birth',
        accessor: 'date_of_birth',
        Cell: ({ value }) => {
          try {
            return format(new Date(value), 'dd/MM/yyyy');
          } catch (error) {
            console.error("Invalid date value:", value);
            return value;
          }
        }
      },
      {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country'
      },
      {
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone'
      }
    ]
  }
];
