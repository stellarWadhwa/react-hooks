import React, { useLayoutEffect, useState } from 'react'

const Layouteffect = () => {
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect(() => {
        // Function to animate element's opacity
        const animateOpacity = () => {
          document.getElementById('animatedElement').style.opacity = isVisible ? '1' : '0';
        };
    
        // Perform animation on mount and whenever isVisible changes
        animateOpacity();
    
        // Cleanup function
        return () => {
          // Reset element's opacity when component unmounts
          document.getElementById('animatedElement').style.opacity = '1';
        };
      }, [isVisible]); // Re-run effect whenever isVisible changes
    
  return (
    <div>
         <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      <div id="animatedElement" style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}>
        {/* Animated element */}
    </div>
    </div>
  )
}

export default Layouteffect