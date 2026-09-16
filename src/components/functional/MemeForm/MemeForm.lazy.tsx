import { lazy, Suspense, type ComponentProps } from 'react';

const LazyMemeForm = lazy(() => import('./MemeForm.stored'));

const MemeForm = (props: ComponentProps<typeof LazyMemeForm>) => (
  <Suspense fallback={null}>
    <LazyMemeForm {...props} />
  </Suspense>
);

export default MemeForm;
