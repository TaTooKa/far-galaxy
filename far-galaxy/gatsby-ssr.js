import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="./fonts/EuroStyleNormal.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyle"
    />,
    <link
      rel="preload"
      href="./fonts/EurostileBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyleBold"
    />,
    <link
      rel="preload"
      href="./fonts/Eurostile-Oblique.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="EuroStyleOblique"
    />,
    <link
      rel="preload"
      href="./fonts/Android101.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="Android101"
    />,
  ])
}