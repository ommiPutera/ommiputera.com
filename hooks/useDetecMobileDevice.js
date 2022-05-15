import { useState, useEffect } from "react";

export default function useDetecMobileDevice() {
  let userAgent;
  let detectDevice;

  useEffect(() => {
    userAgent = navigator.userAgent

    if (userAgent.match(/Android/i)) {
      detectDevice = "Android";
    } else if (userAgent.match(/webOS/i)) {
      detectDevice = "webOS";
    } else if (userAgent.match(/iPhone/i)) {
      detectDevice = "iPhone";
    } else if (userAgent.match(/iPad/i)) {
      detectDevice = "iPad";
    } else if (userAgent.match(/iPod/i)) {
      detectDevice = "iPod";
    } else {
      detectDevice = "No device detection";
    }
  }, []);

  const [deviceName, setDeviceName] = useState({
    device: detectDevice,
  });

  useEffect(() => {
    if (detectDevice) {
      setDeviceName({ device: detectDevice });
    }
  }, [detectDevice]);

  return deviceName;
}
