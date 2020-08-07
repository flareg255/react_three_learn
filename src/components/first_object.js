import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

const Thing = (props) => {
    const ref = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));
    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    );
};

export default Thing;