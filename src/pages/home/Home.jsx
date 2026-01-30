import { lazy, Suspense } from "react";
// Hero is NOT lazy loaded because it's the first thing users see (LCP)
import Hero from "../../components/home/Hero";

/* Lazy loading these components is great, but wrapping them in 
   individual Suspense blocks with defined heights prevents the page 
   from shifting (CLS) when they finish loading.
*/
const InfoCards = lazy(() => import("../../components/cards/InfoCards"));
const Faculty = lazy(() => import("../../components/home/Faculty"));
const Awareness = lazy(() => import("../../components/home/Awareness"));
const Feedback = lazy(() => import("../../components/home/Feedback"));

// A reusable Skeleton component to keep the layout stable while loading
const SectionSkeleton = ({ height = "400px" }) => (
  <div 
    className="animate-pulse bg-gray-100 rounded-xl my-8 w-full" 
    style={{ height, minHeight: height }} 
  />
);

export default function Home() {
  return (
    <>
      {/* 1. Critical Content: Loads instantly */}
      <Hero />

      {/* 2. Secondary Content: Load as soon as possible */}
      <div >
        <Suspense fallback={<SectionSkeleton height="250px" />}>
          <InfoCards />
        </Suspense>

        {/* 3. Lower Content: Wrapped separately so the top components 
           don't wait for the bottom ones to be ready.
        */}
        <Suspense fallback={<SectionSkeleton height="500px" />}>
          <Faculty />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="400px" />}>
          <Awareness />
        </Suspense>

        <Suspense fallback={<SectionSkeleton height="350px" />}>
          <Feedback />
        </Suspense>
      </div>
    </>
  );
}

// import Hero from "../components/home/Hero";
// import InfoCards from "../components/cards/InfoCards";
// import Faculty from "../components/home/Faculty";
// import Awareness from "../components/home/ Awareness";
// import Feedback from "../components/home/Feedback";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <InfoCards />
//       <Faculty />
//       <Awareness />
//       <Feedback />
//     </>
//   );
// }