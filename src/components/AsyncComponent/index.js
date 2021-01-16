/**
 * AsyncComponent
 * Code Splitting Component
 */
import React from 'react';
import Loadable from 'react-loadable';

import CircleLazyLoader from '../CircleLazyLoader';

const AsyncGists = Loadable({
    loader: () => import("../../app/dashboard/routes/Gists"),
    loading: () => <CircleLazyLoader />,
});

export {
    AsyncGists,
};
