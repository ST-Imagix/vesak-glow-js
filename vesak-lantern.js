/* * ST Imagix Vesak Glow v1.0 
 * Developer: Samitha Tharanga Wijesinghe
 * Easy Plug & Play Script
 */

(function() {
    // 1. Injecting CSS into the Website
    const css = `
        .vesak-wrapper {
            position: fixed;
            top: -10px;
            right: 50px;
            z-index: 2147483647; /* Ensure it stays on top */
            pointer-events: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            filter: drop-shadow(0 0 25px rgba(255, 120, 0, 0.4));
        }

        .lantern-string {
            width: 1.5px;
            height: 80px;
            background: linear-gradient(to bottom, #111, #444);
        }

        .lantern-svg {
            width: 160px;
            height: auto;
            transform-origin: top center;
            animation: realisticSway 6s ease-in-out infinite;
        }

        @keyframes realisticSway {
            0%, 100% { transform: rotate(-4deg); }
            50% { transform: rotate(4deg); }
        }

        .lantern-glow-core {
            animation: flickerLight 3s infinite alternate;
        }

        @keyframes flickerLight {
            0% { fill: #ffdb58; filter: blur(5px); opacity: 0.8; }
            100% { fill: #ff8c00; filter: blur(12px); opacity: 1; }
        }

        .tassel {
            transform-origin: top;
            animation: tasselSwing 4s ease-in-out infinite;
        }

        .t-1 { animation-delay: 0.1s; animation-duration: 3.8s; }
        .t-2 { animation-delay: 0.3s; animation-duration: 4.2s; }
        .t-3 { animation-delay: 0.5s; animation-duration: 3.5s; }
        .t-4 { animation-delay: 0.2s; animation-duration: 4s; }

        @keyframes tasselSwing {
            0%, 100% { transform: rotate(-2deg) skewX(-1deg); }
            50% { transform: rotate(3deg) skewX(2deg); }
        }

        .paper-panel {
            fill-opacity: 0.92;
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    // 2. Creating and Injecting the Lantern HTML
    const lanternContainer = document.createElement("div");
    lanternContainer.className = "vesak-wrapper";

    lanternContainer.innerHTML = `
        <div class="lantern-string"></div>
        <svg class="lantern-svg" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="paperGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#fff2cc; stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#e74c3c; stop-opacity:1" />
                </radialGradient>
                
                <linearGradient id="tasselGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#f1c40f" />
                    <stop offset="100%" style="stop-color:#e67e22" />
                </linearGradient>
            </defs>

            <rect class="tassel t-1" x="55" y="90" width="3" height="70" fill="#c0392b" opacity="0.6" rx="1" />
            <rect class="tassel t-2" x="65" y="90" width="3" height="85" fill="#922b21" opacity="0.6" rx="1" />

            <path class="paper-panel" d="M60 10 L100 50 L60 90 L20 50 Z" fill="url(#paperGlow)" stroke="#922b21" stroke-width="0.5" />
            
            <circle class="lantern-glow-core" cx="60" cy="50" r="18" />

            <path d="M60 15 L90 50 L60 85 L30 50 Z" fill="none" stroke="#f1c40f" stroke-width="0.8" stroke-dasharray="2,1" />

            <rect x="12" y="42" width="16" height="16" fill="#f1c40f" transform="rotate(45 20 50)" stroke="#d4ac0d" />
            <rect x="92" y="42" width="16" height="16" fill="#f1c40f" transform="rotate(45 100 50)" stroke="#d4ac0d" />
            <rect x="52" y="2" width="16" height="16" fill="#f1c40f" transform="rotate(45 60 10)" stroke="#d4ac0d" />
            <rect x="52" y="82" width="16" height="16" fill="#f1c40f" transform="rotate(45 60 90)" stroke="#d4ac0d" />

            <g>
                <rect class="tassel t-3" x="35" y="85" width="4" height="60" fill="url(#tasselGrad)" rx="2" />
                <rect class="tassel t-4" x="48" y="92" width="4" height="100" fill="url(#tasselGrad)" rx="2" />
                <rect class="tassel t-1" x="68" y="92" width="4" height="100" fill="url(#tasselGrad)" rx="2" />
                <rect class="tassel t-2" x="81" y="85" width="4" height="60" fill="url(#tasselGrad)" rx="2" />
            </g>

            <line x1="60" y1="10" x2="20" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
            <line x1="60" y1="10" x2="100" y2="50" stroke="rgba(255,255,255,0.2)" stroke-width="0.5" />
        </svg>
    `;

    document.body.appendChild(lanternContainer);
})();