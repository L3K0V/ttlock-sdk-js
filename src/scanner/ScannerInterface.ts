'use strict';

import { EventEmitter } from "events";
import { DeviceInterface } from "./DeviceInterface";

export type ScannerType = "noble" | "node-ble" | "auto";

export type ScannerStateType = "unknown" | "starting" | "scanning" | "stopping" | "stopped";

export interface ScannerInterface extends EventEmitter {
  scannerState: ScannerStateType;
  startScan(): Promise<boolean>;
  stopScan(): Promise<boolean>;
  on(event: "ready", listener: () => void): this;
  on(event: "discover", listener: (device: DeviceInterface) => void): this;
  on(event: "scanStart", listener: () => void): this;
  on(event: "scanStop", listener: () => void): this;
}