import React, { useEffect } from 'react';

const ModelViewer: React.FC = () => {
  useEffect(() => {
    const hideElements = () => {
      const iframe = document.querySelector('.sketchfab-embed-wrapper iframe');
      if (iframe) {
        const iframeDoc = (iframe as HTMLIFrameElement).contentDocument || (iframe as HTMLIFrameElement).contentWindow?.document;
        if (iframeDoc) {
          const style = document.createElement('style');
          style.innerHTML = `
            .watermark, .controls, .logo, .annotation, .help, .settings, .vr, .annotations, .loading, .fullscreen, .rootrig-actions, .share-popup, .share-popup__link {
              display: none !important;
            }
          `;
          iframeDoc.head.appendChild(style);
        }
      }
    };

    const interval = setInterval(hideElements, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0A0A0A] py-16 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">3D Experience</h2>
          <div className="aspect-[16/9] w-full relative overflow-hidden">
            <div className="sketchfab-embed-wrapper h-full relative overflow-hidden"> 
              <iframe 
                title="Anime Girl"
                className="w-full h-full absolute top-0 left-0"
                frameBorder="0" 
                allowFullScreen 
                mozAllowFullScreen
                webkitAllowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src="https://sketchfab.com/models/10c59686d58c4743a17f86bdb898938d/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_controls=0&ui_infos=0&ui_inspector=0&ui_stop=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_vr=0&ui_annotations=0&ui_loading=0"
                style={{
                  minHeight: '400px',
                  touchAction: 'pan-x pan-y',
                  cursor: 'grab',
                  background: 'transparent'
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#0A0A0A] opacity-0 pointer-events-none"></div> {/* Overlay to hide elements */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .sketchfab-embed-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .sketchfab-embed-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default ModelViewer;