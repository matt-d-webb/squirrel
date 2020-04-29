import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import DashboardDefaultSection1 from '../../components/DashboardDefault/DashboardDefaultSection1';
import DashboardDefaultSection2 from '../../components/DashboardDefault/DashboardDefaultSection2';
import DashboardDefaultSection3 from '../../components/DashboardDefault/DashboardDefaultSection3';
import DashboardDefaultSection4 from '../../components/DashboardDefault/DashboardDefaultSection4';
import DashboardDefaultSection8 from '../../components/DashboardDefault/DashboardDefaultSection8';
export default function DashboardDefault() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Main"
        titleDescription="See all your spending and investments here!"
      />

      
      <DashboardDefaultSection3 />
      <DashboardDefaultSection2 />
      <DashboardDefaultSection4 />
      <DashboardDefaultSection8 />
    </Fragment>
  );
}
