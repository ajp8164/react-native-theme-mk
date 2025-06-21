import { useSyncExternalStore } from 'react';
import { type IDevice, type IDeviceInternal } from './types';

export function useDeviceSnapshotOrientation(device: IDevice & IDeviceInternal) {
    return useSyncExternalStore(
        (callback) => device.onChange(callback),
        () => device.orientation,
    );
}
