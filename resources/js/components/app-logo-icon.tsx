import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return (
        <img
            src="/images/rshvacr-mark.png"
            alt=""
            width={32}
            height={32}
            decoding="async"
            {...props}
        />
    );
}
