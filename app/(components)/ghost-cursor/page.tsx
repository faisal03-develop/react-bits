import GhostCursor from "@/components/GhostCursor"

const page = () => {
  return (
    <div>

<div style={{ height: '100vh', position: 'relative', backgroundColor: 'black' }}>
  <GhostCursor
    // Visuals
    color="#B19EEF"
    brightness={1}
    edgeIntensity={0}

    // Trail and motion
    trailLength={50}
    inertia={0.5}

    // Post-processing
    grainIntensity={0.05}
    bloomStrength={0.1}
    bloomRadius={1.0}
    bloomThreshold={0.025}

    // Fade-out behavior
    fadeDelayMs={1000}
    fadeDurationMs={1500}
  />

    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '6rem', zIndex: 20 }} className="font-black ">
    Faisal Altaf
  </div>
</div>

    </div>
  )
}

export default page