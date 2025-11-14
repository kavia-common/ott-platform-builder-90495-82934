import React, { useEffect, useRef } from 'react';
import './screen35.css';

// PUBLIC_INTERFACE
export default function Screen35() {
  /** This component renders the Figma screen 35 inside a responsive scale wrapper.
   * It preserves the 1920x1080 aspect and scales to fit the viewport (no scrollbars),
   * centering horizontally and vertically when space allows.
   */

  const wrapperRef = useRef(null);

  // Enhance focus visuals for panel buttons (ported from assets JS)
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const buttons = wrapper.querySelectorAll('.panel-btn');
    const handleFocus = (e) => e.currentTarget.classList.add('focused');
    const handleBlur = (e) => e.currentTarget.classList.remove('focused');
    buttons.forEach((btn) => {
      btn.addEventListener('focus', handleFocus);
      btn.addEventListener('blur', handleBlur);
    });
    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('focus', handleFocus);
        btn.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <div className="screen35-viewport" role="region" aria-label="Figma Screen 35 Viewport" ref={wrapperRef}>
      <div className="screen35-canvas" role="main" aria-label="Screen 35">
        {/* Background artwork layer */}
        <div className="layer-image" aria-hidden="true" />

        {/* Gradient overlay */}
        <div className="layer-gradient" aria-hidden="true" />

        {/* Metadata Panel */}
        <div className="metadata-panel" style={{ left: 96, top: 108, width: 1150, height: 590 }}>
          {/* Frame 29360 */}
          <div className="frame-29360" style={{ position: 'relative', width: 1150, height: 227 }}>
            {/* Channel row */}
            <div className="row channel-row" style={{ position: 'absolute', left: 0, top: 0, width: 529, height: 40 }}>
              <div className="channel-number" style={{ position: 'absolute', left: 0, top: 0, width: 56, height: 38 }}>
                <span className="typo-149">242</span>
              </div>
              <div className="channel-name" style={{ position: 'absolute', left: 68, top: 0, width: 461, height: 40 }}>
                <span className="typo-165">TNT</span>
              </div>
            </div>

            {/* Frame 29359 */}
            <div className="frame-29359" style={{ position: 'absolute', left: 0, top: 67, width: 1150, height: 160 }}>
              {/* Program Name */}
              <div className="program-name" style={{ position: 'absolute', left: 0, top: 0, width: 1150, height: 70 }}>
                <span className="typo-166">Gladiador II</span>
              </div>

              {/* Metadata line */}
              <div className="metadata-line" style={{ position: 'absolute', left: 0, top: 76, height: 32, width: 743 }}>
                <span className="typo-167" style={{ position: 'absolute', left: 0, top: 0 }}>Gladiator II</span>
                <span className="typo-167 divider" style={{ position: 'absolute', left: 137, top: 0 }}>|</span>
                <span className="typo-167" style={{ position: 'absolute', left: 159, top: 0 }}>2 h 28 min</span>
                <span className="typo-167 divider" style={{ position: 'absolute', left: 292, top: 0 }}>|</span>
                <span className="typo-167" style={{ position: 'absolute', left: 314, top: 0 }}>Acción, aventura, drama</span>
                <span className="typo-167 divider" style={{ position: 'absolute', left: 597, top: 0 }}>|</span>
                <div className="age-chip" style={{ position: 'absolute', left: 619, top: 0, width: 124, height: 32 }}>
                  <span className="typo-168">+ 16 Años</span>
                </div>
              </div>

              {/* Time row */}
              <div className="time-row" style={{ position: 'absolute', left: 0, top: 122, width: 487, height: 32 }}>
                <div className="timestamp-chip" style={{ position: 'absolute', left: 0, top: 0, width: 156, height: 32 }}>
                  <span className="typo-169">MÁS TARDE</span>
                </div>
                <span className="typo-167" style={{ position: 'absolute', left: 178, top: 0 }}>20:00</span>
                <span className="typo-167" style={{ position: 'absolute', left: 246, top: 0 }}>-</span>
                <span className="typo-167" style={{ position: 'absolute', left: 267, top: 0 }}>22:20</span>
                <span className="typo-170 divider" style={{ position: 'absolute', left: 343, top: 0 }}>|</span>
                <div className="icon-32 replay" aria-label="Replay" style={{ position: 'absolute', left: 372, top: 0, width: 32, height: 32 }} />
                <span className="typo-170 divider" style={{ position: 'absolute', left: 426, top: 0 }}>|</span>
                <div className="icon-32 other" aria-hidden="true" style={{ position: 'absolute', left: 455, top: 0, width: 32, height: 32 }} />
              </div>
            </div>
          </div>

          {/* Frame 29355 */}
          <div className="frame-29355" style={{ position: 'absolute', left: 0, top: 276, width: 1150, height: 314 }}>
            {/* TextBox3Lines */}
            <div className="textbox3" style={{ position: 'absolute', left: 0, top: 0, width: 925, height: 117 }}>
              <p className="typo-171 multiline">
                Lucio es obligado a entrar en el Coliseo después de que su hogar sea conquistado por los tiránicos emperadores que ahora dirigen Roma con puño de hierro. Con la ira en su corazón y el futuro del Imperio en juego, Lucio debe mirar hacia atrás para encontrar fuerza y devolver la gloria de Roma a su pueblo.
              </p>
            </div>

            {/* Panel Buttons */}
            <div className="panel-buttons" style={{ position: 'absolute', left: 0, top: 158, width: 916, height: 156 }}>
              {[
                { left: 0, label: 'Programar', aria: 'Programar' },
                { left: 144, label: '\u00A0', aria: 'Replay' },
                { left: 288, label: '\u00A0', aria: 'Play' },
                { left: 432, label: '\u00A0', aria: 'Add' },
                { left: 576, label: '\u00A0', aria: 'Info' },
                { left: 720, label: '\u00A0', aria: 'Audio/Subtitles' }
              ].map((btn, idx) => (
                <button
                  key={idx}
                  className="panel-btn"
                  style={{ left: btn.left, top: 0 }}
                  aria-label={btn.aria}
                >
                  <div className="btn-icon" />
                  <div className="btn-label"><span className="typo-172">{btn.label}</span></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* System Date (top-right) */}
        <div className="system-date" style={{ left: 1724, top: 55, width: 100, height: 90 }}>
          <div className="datehour" style={{ position: 'absolute', left: 0, top: 0, width: 100, height: 48 }}>
            <span className="typo-173">20:44</span>
          </div>
          <div className="date" style={{ position: 'absolute', left: 19, top: 58, width: 81, height: 32 }}>
            <span className="typo-146">7 abr.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
