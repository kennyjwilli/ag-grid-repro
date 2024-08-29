'use client';

import '@ag-grid-community/styles/ag-grid.css'; // Core CSS
import '@ag-grid-community/styles/ag-theme-quartz.css';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
import { LicenseManager } from '@ag-grid-enterprise/core';
import { Avatar } from 'antd';
import _ from 'lodash';
import React from 'react';

LicenseManager.setLicenseKey(
  'Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-060054}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{Deep_Origin}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{Deep_Origin}_only_for_{2}_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_working_on_{Deep_Origin}_need_to_be_licensed___{Deep_Origin}_has_been_granted_a_Deployment_License_Add-on_for_{1}_Production_Environment___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{1_March_2025}____[v3]_[0102]_MTc0MDc4NzIwMDAwMA==88258d6b91a0e71396f764713cc90285',
);

ModuleRegistry.registerModules([ClientSideRowModelModule]);

interface UserProps {
  name: string;
  avatarUrl?: string;
}

const User = (props: UserProps) => {
  const { avatarUrl, name } = props;
  return <Avatar src={avatarUrl} alt={name} />;
};

const CellRenderer = () => {
  return (
    <User
      name={'kwilliams@deeporigin.com'}
      avatarUrl={
        'https://lh3.googleusercontent.com/a/ACg8ocKXw9GJsgMMlYxqz9qUKKqYTCRNXwP35pdRZeMAb_FxkbEYGcU=s96-c'
      }
    />
  );
};

const RootContainer = () => {
  const gridRef = React.useRef(null);

  const rows = _.range(0, 200).map((i) => ({
    index: `${i}`,
  }));

  const columnDefs = _.range(0, 12).map((i) => ({
    headerName: `text${i}`,
    colId: `text${i}`,
    cellRenderer: CellRenderer,
  }));

  return (
    <div className="ag-theme-quartz" style={{ height: '75vh', position: 'relative' }}>
      <AgGridReact
        ref={gridRef}
        rowData={rows}
        columnDefs={columnDefs}
        getRowId={(params) => params.data.index ?? '--'}
      />
    </div>
  );
};

export default function ExamplePage() {
  return <RootContainer />;
}
