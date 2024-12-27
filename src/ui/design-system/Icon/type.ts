export interface IIconProps {
  svgClass?: string;
  color?: 'primary' | 'neutral';
  name:
    | 'double-arrow'
    | 'one-arrow'
    | 'arrow-down'
    | 'logo'
    | 'mobile-menu'
    | 'instagram'
    | 'telegram'
    | 'facebook'
    | 'camera'
    | 'close-icon'
    | 'exclamation-mark'
    | 'arrow-down-black'
    | 'paperclip'
    | 'check-double'
    | 'check'
    | 'date-input'
    | 'exel'
    | 'basket'
    | 'user-icon'
    | 'bell'
    | 'eye-closed'
    | 'eye-opened'
    | 'camel-orange'
    | 'camel-red'
    | 'camel-green';
  height?: number;
  width?: number;
  strokeWidth?: number;
}
