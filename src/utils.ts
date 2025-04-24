export function hexToRgba(hex: string, opacity = 1): string {
    var c: string[];

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0] as string, c[0] as string, c[1] as string, c[1] as string, c[2] as string, c[2] as string];
        }

        let res: any = '0x' + c.join('');
        return 'rgba(' + [(res >> 16) & 255, (res >> 8) & 255, res & 255].join(',') + `,${opacity})`;
    }
    throw new Error('Bad Hex');
}
