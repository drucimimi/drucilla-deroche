import React from 'react';

interface IconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon: SvgIcon, size = 24, color = 'currentColor' }) => {
  return <SvgIcon width={size} height={size} fill={color} />;
};

export default Icon;