import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';
import { ExampleWrapperSeamless } from '../../layout-components';
import { ExampleWrapperSimple } from '../../layout-components';
import LoadingIndicatorsBasic from '../../components/LoadingIndicators/LoadingIndicatorsBasic';
import LoadingIndicatorsColors from '../../components/LoadingIndicators/LoadingIndicatorsColors';
import LoadingIndicatorsBlockLoading from '../../components/LoadingIndicators/LoadingIndicatorsBlockLoading';
import LoadingIndicatorsSkeletonLoading from '../../components/LoadingIndicators/LoadingIndicatorsSkeletonLoading';
export default function LoadingIndicators() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Loading Indicators"
        titleDescription="Use these loading indicators in combination with other elements to show current app status to users."
      />

      <ExampleWrapperSimple sectionHeading="Basic">
        <LoadingIndicatorsBasic />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Block loading">
        <LoadingIndicatorsBlockLoading />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Indicators colors">
        <LoadingIndicatorsColors />
      </ExampleWrapperSimple>
      <ExampleWrapperSeamless sectionHeading="Skeleton loading">
        <LoadingIndicatorsSkeletonLoading />
      </ExampleWrapperSeamless>
    </Fragment>
  );
}
