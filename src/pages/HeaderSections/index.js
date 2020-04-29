import React, { Fragment } from 'react';

import { PageTitle } from '../../layout-components';

import { ExampleWrapperSimple } from '../../layout-components';
import HeaderSections1 from '../../components/HeaderSections/HeaderSections1';
import HeaderSections2 from '../../components/HeaderSections/HeaderSections2';
import HeaderSections3 from '../../components/HeaderSections/HeaderSections3';
import HeaderSections4 from '../../components/HeaderSections/HeaderSections4';
import HeaderSections5 from '../../components/HeaderSections/HeaderSections5';
import HeaderSections6 from '../../components/HeaderSections/HeaderSections6';
export default function HeaderSections() {
  return (
    <Fragment>
      <PageTitle
        titleHeading="Header sections"
        titleDescription="Integrate any of these headers in your presentation layouts."
      />

      <ExampleWrapperSimple sectionHeading="Headers 1">
        <HeaderSections1 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Headers 2">
        <HeaderSections2 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Headers 3">
        <HeaderSections3 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Headers 4">
        <HeaderSections4 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Headers 5">
        <HeaderSections5 />
      </ExampleWrapperSimple>
      <ExampleWrapperSimple sectionHeading="Headers 6">
        <HeaderSections6 />
      </ExampleWrapperSimple>
    </Fragment>
  );
}
