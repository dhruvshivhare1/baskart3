import React, { useRef, useEffect } from "react";
import Spline from '@splinetool/react-spline';

const SplineSection: React.FC = () => {
  const splineRef = useRef<any>(null);

  const handleLoad = (spline: any) => {
    splineRef.current = spline;
    // Attempt to hide the "Built with Spline" logo
    const logo = spline.findObjectByName('Built with Spline');
    if (logo) {
      logo.visible = false;
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (splineRef.current) {
        splineRef.current.emitEvent('mouseMove', {
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (splineRef.current) {
        const touch = event.touches[0];
        splineRef.current.emitEvent('mouseMove', {
          x: touch.clientX,
          y: touch.clientY,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/hWoPBmZeOAFjZL3l/scene.splinecode" onLoad={handleLoad} />
      <style jsx>{`
        iframe {
          position: relative;
          z-index: 1;
        }
        iframe::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
          z-index: 2;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default SplineSection;