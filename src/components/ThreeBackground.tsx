import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, Torus, Sphere, TorusKnot, MeshDistortMaterial, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error("Three.js Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return null;
        }

        return this.props.children;
    }
}

const FloatingShapes = () => {
    return (
        <>
            <Environment preset="city" />

            {/* Organic wobbling orange Icosahedron */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Icosahedron args={[1, 0]} position={[-3, 2, -5]} scale={0.6}>
                    <MeshDistortMaterial
                        color="#f97316"
                        distort={0.4}
                        speed={2}
                        roughness={0}
                    />
                </Icosahedron>
            </Float>

            {/* Floating Purple Torus */}
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <Torus args={[0.8, 0.2, 16, 100]} position={[3, -2, -4]} rotation={[0.5, 0, 0]} scale={0.5}>
                    <MeshDistortMaterial
                        color="#8b5cf6"
                        distort={0.3}
                        speed={1.5}
                        roughness={0}
                    />
                </Torus>
            </Float>

            {/* Distorted Green Sphere */}
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <Sphere args={[1, 32, 32]} position={[4, 3, -6]} scale={0.8}>
                    <MeshDistortMaterial
                        color="#22c55e"
                        distort={0.6}
                        speed={3}
                        transparent
                        opacity={0.5}
                        roughness={0}
                    />
                </Sphere>
            </Float>

            {/* Complex TorusKnot shape */}
            <Float speed={1} rotationIntensity={1} floatIntensity={1}>
                <TorusKnot args={[0.6, 0.2, 128, 32]} position={[-4, -3, -8]} rotation={[0, 0, 0]} scale={0.7}>
                    <MeshDistortMaterial
                        color="#3b82f6"
                        distort={0.3}
                        speed={2}
                        roughness={0.2}
                    />
                </TorusKnot>
            </Float>

            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2.5} far={10.0} color="#000000" />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <ErrorBoundary>
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Suspense fallback={null}>
                        <FloatingShapes />
                    </Suspense>
                </Canvas>
            </ErrorBoundary>
        </div>
    );
};

export default ThreeBackground;
