import { lazy, Suspense, type ComponentProps } from 'react';

const LazyFlexH1RstGrow = lazy(() => import('./FlexH1rstGrow'));

const FlexH1RstGrow = (props: ComponentProps<typeof LazyFlexH1RstGrow>) => (
  <Suspense fallback={null}>
    <LazyFlexH1RstGrow {...props} />
  </Suspense>
);

export default FlexH1RstGrow;
