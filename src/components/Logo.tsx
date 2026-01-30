import React from "react";

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
    return (
        <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} text-primary transition-colors duration-300`}
        >
            {/* Outer Hexagon */}
            <path
                d="M25 5L42.3205 15V35L25 45L7.67949 35V15L25 5Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinejoin="round"
                className="opacity-100"
            />

            {/* Inner Cube/Core */}
            <path
                d="M25 20L33.6603 25L25 30L16.3397 25L25 20Z"
                fill="currentColor"
                className="opacity-90"
            />

            {/* Connecting Lines (Network/Structure) */}
            <path
                d="M25 5V20M42.3205 15L33.6603 25M42.3205 35L33.6603 25M25 45V30M7.67949 35L16.3397 25M7.67949 15L16.3397 25"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-50"
            />
        </svg>
    );
};

export default Logo;
