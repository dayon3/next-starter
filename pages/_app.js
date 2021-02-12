import '../styles.css';

export default function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
  switch (metric.name) {
    // First Contentful Paint
    case 'FCP':
      break;
    // Largest Contentful Paint
    case 'LCP':
      break;
    // Cumulative Layout Shift
    case 'CLS':
      break;
    // First Input Delay
    case 'FID':
      break;
    // Time To First Byte
    case 'TTFB':
      break;
    // the length of time it takes for the page to start and finish hydrating
    case 'Next.js-hydration':
      break;
    // the length of time it takes for the page to start rendering, after a route change
    case 'Next.js-route-change-to-render':
      break;
    // the length of time it takes for the page to finish rendering after a route change
    case 'Next.js-render':
      break;
    default:
      break;
  }
}
