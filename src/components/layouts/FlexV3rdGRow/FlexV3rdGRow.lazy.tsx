import { lazy, Suspense, type ComponentProps } from 'react';

const LazyFlexV3rdGRow = lazy(() => import('./FlexV3rdGRow'));

const FlexV3rdGRow = (props: ComponentProps<typeof LazyFlexV3rdGRow>) => (
  <Suspense fallback={null}>
    <LazyFlexV3rdGRow {...props} />
  </Suspense>
);

export default FlexV3rdGRow;
