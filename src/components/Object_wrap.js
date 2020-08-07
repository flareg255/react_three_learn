import React from 'react';
import { Canvas } from 'react-three-fiber';

import Thing from './first_object';

const ObjectWrap = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Thing position={[-1.2, 0, 0]} />
            <Thing position={[1.2, 0, 0]} />
        </Canvas>
    );
};

export default ObjectWrap;