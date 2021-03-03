import React from 'react';
import SvgIcOpenDoor from '@dac/light-ui-assets/lib/icons/IcOpenDoor';
import SvgIcPasses from '@dac/light-ui-assets/lib/icons/IcPasses';
import SvgIcPlaces from '@dac/light-ui-assets/lib/icons/IcPlaces';
import SvgIcMore from '@dac/light-ui-assets/lib/icons/IcMore';
import SvgIcAccount from '@dac/light-ui-assets/lib/icons/IcAccount';

export const switchWorkspaceKey = 'switch-workspace';
export const moreKey = 'moreKey';
export const doorsPath = '/doors';

export default [
  {
    key: 'passes',
    icon: (p) => <SvgIcPasses {...p} />,
    pathname: '/passes',
    activePathnameList: ['/passes'],
  },
  {
    key: 'people',
    icon: (p) => <SvgIcAccount {...p} />,
    pathname: '/users',
    activePathnameList: ['/users', '/users/create'],
  },
  {
    key: 'open-door',
    icon: (p) => <SvgIcOpenDoor {...p} />,
    pathname: '/passes/open-door',
    activePathnameList: ['/passes/open-door'],
  },
  {
    key: switchWorkspaceKey,
    icon: (p) => <SvgIcPlaces {...p} />, // use as Fallback
    pathname: '/workspaces/current',
    activePathnameList: ['/workspaces/current', '/workspaces'],
  },
  {
    key: moreKey,
    icon: (p) => <SvgIcMore {...p} />,
    pathname: '/more',
    activePathnameList: ['/more', doorsPath],
  },
];
