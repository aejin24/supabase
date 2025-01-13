"use client";

import { RecoilRoot } from "recoil";

export default function RecoliProviders({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
