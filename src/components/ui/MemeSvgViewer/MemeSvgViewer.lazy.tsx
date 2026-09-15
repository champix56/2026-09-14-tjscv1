import { lazy, Suspense, type ComponentProps } from 'react';

const LazyMemeSvgViewer = lazy(() => import('./MemeSvgViewer'));

const MemeSvgViewer = (props: ComponentProps<typeof LazyMemeSvgViewer>) => (
  <Suspense fallback={null}>
    <LazyMemeSvgViewer {...props} />
  </Suspense>
);

export default MemeSvgViewer;
