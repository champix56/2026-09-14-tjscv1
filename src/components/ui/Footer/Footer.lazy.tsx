import { lazy, Suspense } from "react";

const LazyFooter = lazy(() => import("./Footer"));

const Footer = (props: object) => (
  <Suspense fallback={null}>
    <LazyFooter {...props} />
  </Suspense>
);

export default Footer;
