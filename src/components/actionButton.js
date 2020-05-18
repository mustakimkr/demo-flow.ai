import React from "react";
import "../assets/css/actionButton.css";
import UseDragEff from "./DnD/useDrag";

const actionButton = (props) => {
  const { collectedDragProps, drag } = UseDragEff(props.dragTrigger);
  // console.log(collectedDragProps);

  let svg = null;
  if (props.dragTrigger.type === "Text") {
    svg = (
      <g id="icon-action-text">
        <rect
          id="Rectangle"
          fillOpacity="0.01"
          fill="#D8D8D8"
          x={0}
          y={0}
          width={22}
          height={22}
        />
        <path
          d="M12,5 L12,16.9895609 L10,16.9895609 L10,5 L6,5 L6,9 L4,9 L4,5 L4,3 L18,3 L18,5 L18,9 L16,9 L16,5 L12,5 Z M8,17 L14,17 L14,19 L8,19 L8,17 Z"
          id="icon-flow-intent"
          fill="#F0F0F6"
          fillRule="nonzero"
        />
      </g>
    );
  } else if (props.dragTrigger.type === "Event") {
    svg = (
      <g id="icon-action-event" fillRule="nonzero">
        <rect
          id="Rectangle"
          fill="#FFFFFF"
          opacity="0.01"
          x={0}
          y={0}
          width={22}
          height={22}
        />
        <path
          d="M10.9600035,0.664010344 C11.6571285,0.815370344 12.359616,0.956170344 13.0647848,1.08641034 C13.7699535,1.21841034 14.4679723,1.30641034 15.158841,1.35481034 C15.8497098,1.40321034 16.5343223,1.39001034 17.2117848,1.31433034 C17.9006337,1.23539848 18.574139,1.0581254 19.2111035,0.788090344 L20.1334535,0.375370344 L20.1334535,11.6763303 L19.777741,11.8408903 C19.0794837,12.1896292 18.3305824,12.4297822 17.557666,12.5528103 C16.8042348,12.6689703 16.0427598,12.7112103 15.2750285,12.6760103 C14.5064035,12.6416903 13.739566,12.5554503 12.970941,12.4181703 C12.2032098,12.2808903 11.4426285,12.1365703 10.6883035,11.9852103 C10.0877035,11.8620103 9.49425354,11.7449703 8.90795354,11.6349703 C8.34007934,11.5273836 7.76705266,11.4480828 7.19105979,11.3973703 C6.65454978,11.349557 6.11490304,11.3463188 5.57784104,11.3876903 C5.06896049,11.4273568 4.56845752,11.538482 4.09153479,11.7176903 L4.09153479,20.4604903 C4.09302237,20.6355494 4.02088109,20.8034129 3.89222854,20.9242503 C3.76950298,21.0509236 3.59901663,21.121955 3.42122229,21.1204903 C3.24342794,21.121955 3.07294159,21.0509236 2.95021604,20.9242503 C2.82123424,20.8035646 2.74876092,20.6356813 2.75001604,20.4604903 L2.75001604,0.871690344 L3.12717854,0.664890344 C3.69936293,0.380431409 4.31442595,0.188766872 4.94864104,0.0972903441 C5.58662701,0.00742648914 6.23205762,-0.0202808788 6.87556604,0.0145703441 C7.53247229,0.0497703441 8.20189104,0.128970344 8.88650354,0.252170344 C9.57022229,0.375370344 10.2619848,0.513530344 10.9600035,0.664010344 Z M18.833941,10.7892903 L18.833941,2.31489034 C18.160128,2.51870603 17.4640592,2.64277984 16.760441,2.68449034 C16.063316,2.72673034 15.3715535,2.71969034 14.686941,2.66425034 C14.0052577,2.60962396 13.3272912,2.51678001 12.656341,2.38617034 C11.9860285,2.25593034 11.330016,2.12217034 10.6874098,1.98401034 C10.0965518,1.84846884 9.50298146,1.72465707 8.90705979,1.61265034 C8.33873404,1.50561774 7.76587561,1.42340397 7.19016604,1.36625034 C6.65775677,1.31138357 6.12138231,1.30431445 5.58767229,1.34513034 C5.07823479,1.38649034 4.59292854,1.50353034 4.13264729,1.69537034 L4.13264729,10.2947303 C4.4862865,10.1975766 4.84647723,10.1252352 5.21050979,10.0782503 C5.58208659,10.0300304 5.95648209,10.005925 6.33127229,10.0060903 C7.08559729,10.0060903 7.85332854,10.0747303 8.63535979,10.2120103 C9.42655809,10.3511116 10.2155349,10.5021962 11.0020098,10.6652103 C11.6580223,10.8033703 12.3211848,10.9336103 12.9914973,11.0576903 C13.6618098,11.1808903 14.3285473,11.2636103 14.9917098,11.3040903 C15.6548723,11.3463303 16.3073098,11.3322503 16.9490223,11.2636103 C17.5971433,11.1935582 18.231996,11.0338799 18.8348348,10.7892903 L18.833941,10.7892903 Z"
          id="Shape"
          fill="#F0F0F6"
        />
      </g>
    );
  } else if (props.dragTrigger.type === "Conditions") {
    svg = (
      <g id="icon-action-condition" fill="#FFFFFF">
        <path
          d="M1.76,11 L11,20.24 L20.24,11 L11,1.76 L1.76,11 Z M0,11 L11,0 L22,11 L11,22 L0,11 Z"
          id="Rectangle-3"
          fillRule="nonzero"
        />
        <path
          d="M8.8,8.8 L9.70146341,8.8 L9.70146341,14.08 L8.8,14.08 L8.8,8.8 Z M10.8104065,8.8 L14.08,8.8 L14.08,9.65016949 L11.7118699,9.65016949 L11.7118699,11.0372881 L13.944065,11.0372881 L13.944065,11.8874576 L11.7118699,11.8874576 L11.7118699,14.08 L10.8104065,14.08 L10.8104065,8.8 Z"
          id="IF"
        />
      </g>
    );
  }
  return (
    <div
      className="_9noy08"
      data-for="actionTip"
      data-tip="Triggered when a user sends a text or voice message."
      draggable="true"
      currentitem="false"
      ref={drag}
    >
      <div className="_1589zyv">
        <i>
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 22 22"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>icon-action-event</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              {svg}
            </g>
          </svg>
        </i>
      </div>
      <div>
        <div className="_b4edi1">{props.dragTrigger.type}</div>
      </div>
    </div>
  );
};

export default actionButton;
