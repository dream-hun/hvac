declare module '@threeui/data-pixel-arc' {
    export type DataPixelArcCanvasProps = {
        mode?: 'dark' | 'light';
        speed?: number;
        pixelSize?: number;
        arcCenter?: number;
        arcDrop?: number;
        thickness?: number;
        brightness?: number;
        hue?: number;
        saturation?: number;
        className?: string;
    };

    export function DataPixelArcCanvas(
        props: DataPixelArcCanvasProps,
    ): React.JSX.Element;
}
