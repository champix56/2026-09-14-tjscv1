import { lazy, Suspense, type ComponentProps } from 'react';

const LazyNavbar = lazy(() => import('./Navbar'));

const Navbar = (props: ComponentProps<typeof LazyNavbar>) => (
  <Suspense fallback={null}>
    <LazyNavbar {...props} />
  </Suspense>
);

export default Navbar;
