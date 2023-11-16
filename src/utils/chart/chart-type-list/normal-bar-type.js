export const normalBarType = {
  base: [
    {
      name: "data",
      attribute: "object[],required",
      description: "차트의 데이터를 의미합니다. { value:number, label:string } 형태로 입력해야 합니다.",
      type: "description",
    },
    {
      name: "keys",
      attribute: "string[],optional",
      description: "차트 데이터의 이름을 의미합니다. 데이터에서 입력한 라벨의 순서와 동일해야 합니다.",
      type: "array",
    },
    {
      name: "yLegend",
      attribute: "string,optional",
      description: "y축에 대한 설명입니다.",
      type: "string",
    },
    {
      name: "xLegend",
      attribute: "string,optional",
      description: "x축에 대한 설명입니다.",
      type: "string",
    },
  ],
  normalSettings: [
    {
      name: "useVariousColors",
      attribute: "boolean,optional",
      description: "차트를 그릴 때 다양한 색상을 사용 할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "colorPalette",
      attribute: "string[],optional",
      description: "차트를 그릴 때 사용 할 색상을 의미합니다.",
      type: "colorPalette",
    },
    {
      name: "width",
      attribute: "number,optional",
      description: "전체 차트 영역의 넓이를 의미합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "height",
      attribute: "number,optional",
      description: "전체 차트 영역의 높이를 의미합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "backgroundColor",
      attribute: "hex-code,optional",
      description: "전체 차트 영역의 배경 색상을 의미합니다.",
      type: "color",
    },
    {
      name: "margin",
      attribute: "object,optional",
      description: "차트와 전체 차트 영역 사이의 간격을 의미합니다. 차트의 넓이 및 크기는 해당 간격에 맞춰 자동으로 조절 됩니다.",
      type: "object",
      objectProperties: ["top", "right", "bottom", "left"],
      objectPropertiesType: ["number", "number", "number", "number"],
      objectPropertiesUnit: ["px", "px", "px", "px"],
    },
    {
      name: "padding",
      attribute: "number,optional",
      description: "차트 내부의 좌우 간격을 의미합니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "reverse",
      attribute: "boolean,optional",
      description: "차트의 방향이 위인지, 아래인지를 의미합니다.",
      type: "boolean",
    },
    {
      name: "horizontal",
      attribute: "boolean,optional",
      description: "차트의 방향이 수직인지, 수평인지를 의미합니다.",
      type: "boolean",
    },
  ],
  scopeSettings: [
    {
      name: "autoScope",
      attribute: "boolean,optional",
      description: "자동으로 스코프를 지정 할 지 여부를 의미합니다.",
      type: "boolean",
    },
    {
      name: "maxScope",
      attribute: "number,optional",
      description: "값의 범위의 최대 범위를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "scopeSettings-autoScope",
      show: false,
    },
    {
      name: "minScope",
      attribute: "number,optional",
      description: "값의 범위의 최소 범위를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "scopeSettings-autoScope",
      show: false,
    },
    {
      name: "showTopScope",
      attribute: "boolean,optional",
      description: "0을 제외한 최상단, 최하단 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
  ],
  barSettings: [
    {
      name: "barOpacity",
      attribute: "number,optional",
      description: "바의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
    },
    {
      name: "barGap",
      attribute: "number,optional",
      description: "바 간의 간격을 나타냅니다.",
      type: "number",
      unit: "px",
    },
    {
      name: "barOnlyUpperRadius",
      attribute: "boolean,optional",
      description: "바의 상단만 반지름을 사용할지 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "useBarBorder",
      attribute: "boolean,optional",
      description: "바의 테두리 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "barBorderRadius",
      attribute: "number,optional",
      description: "바의 테두리 반지름을 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useBarBorder",
      show: true,
    },
    {
      name: "barBorderWidth",
      attribute: "number,optional",
      description: "바의 테두리 너비를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useBarBorder",
      show: true,
    },
    {
      name: "barBorderColor",
      attribute: "hex-code,optional",
      description: "바의 테두리 색상을 나타냅니다.",
      type: "color",
      dependency: "barSettings-useBarBorder",
      show: true,
    },
    {
      name: "barBorderOpacity",
      attribute: "number,optional",
      description: "바의 테두리 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "barSettings-useBarBorder",
      show: true,
    },
    {
      name: "useMinHeight",
      attribute: "boolean,optional",
      description: "최소 높이 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "minHeight",
      attribute: "number,optional",
      description: "최소 높이를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useMinHeight",
      show: true,
    },
    {
      name: "useLabel",
      attribute: "boolean,optional",
      description: "라벨 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "labelPosition",
      attribute: "string,optional",
      description: "라벨 위치를 나타냅니다. (over, center, under)",
      type: "'over' | 'center' | 'under'",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelMargin",
      attribute: "number,optional",
      description: "라벨 여백을 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelSize",
      attribute: "number,optional",
      description: "라벨 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelWeight",
      attribute: "number,optional",
      description: "라벨 굵기를 나타냅니다.",
      type: "number",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number,optional",
      description: "라벨 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelColor",
      attribute: "hex-code,optional",
      description: "라벨 색상을 나타냅니다.",
      type: "color",
      dependency: "barSettings-useLabel",
      show: true,
    },
    {
      name: "labelInvisibleHeight",
      attribute: "number,optional",
      description: "라벨이 표시되지 않는 높이를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "barSettings-useLabel",
      show: true,
    },
  ],
  axisYGridLineSettings: [
    {
      name: "lineVisible",
      attribute: "boolean,optional",
      description: "후방 배경에서 y축의 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
    {
      name: "lineOpacity",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineColor",
      attribute: "hex-code,optional",
      description: "후방 배경에서 y축 라인의 색상을 의미합니다.",
      type: "color",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineWidth",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 굵기를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDash",
      attribute: "boolean,optional",
      description: "후방 배경에서 y축의 라인을 점선으로 생성할 지 여부입니다.",
      type: "boolean",
      dependency: "axisYGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDashWidth",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 점선에서 점의 길이를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisYGridLineSettings-lineVisible", "axisYGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineDashGap",
      attribute: "number,optional",
      description: "후방 배경에서 y축 라인의 점선에서 점 사이의 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisYGridLineSettings-lineVisible", "axisYGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineRound",
      attribute: "boolean,optional",
      description: "후방 배경에서 y축의 점선 라인을 둥글게 할 지 여부입니다.",
      type: "boolean",
      dependency: ["axisYGridLineSettings-lineVisible", "axisYGridLineSettings-lineDash"],
      show: [true, true],
    },
  ],
  axisXGridLineSettings: [
    {
      name: "lineVisible",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 라인을 보여줄 지 여부입니다.",
      type: "boolean",
    },
    {
      name: "lineOpacity",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 투명도를 의미합니다.",
      type: "number",
      unit: "",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineColor",
      attribute: "hex-code,optional",
      description: "후방 배경에서 x축 라인의 색상을 의미합니다.",
      type: "color",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineWidth",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 굵기를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDash",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 라인을 점선으로 생성할 지 여부입니다.",
      type: "boolean",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
    {
      name: "lineDashWidth",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 점선에서 점의 길이를 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisXGridLineSettings-lineVisible", "axisXGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineDashGap",
      attribute: "number,optional",
      description: "후방 배경에서 x축 라인의 점선에서 점 사이의 간격을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: ["axisXGridLineSettings-lineVisible", "axisXGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "lineRound",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 점선 라인을 둥글게 할 지 여부입니다.",
      type: "boolean",
      dependency: ["axisXGridLineSettings-lineVisible", "axisXGridLineSettings-lineDash"],
      show: [true, true],
    },
    {
      name: "showEndLine",
      attribute: "boolean,optional",
      description: "후방 배경에서 x축의 양 끝 라인을 생성할 지 여부입니다.",
      type: "boolean",
      dependency: "axisXGridLineSettings-lineVisible",
      show: true,
    },
  ],
  leftLabelSettings: [
    {
      name: "useLabel",
      attribute: "boolean",
      description: "좌측 라벨 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "labelOnLeft",
      attribute: "boolean",
      description: "라벨을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMargin",
      attribute: "number",
      description: "라벨과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelSize",
      attribute: "number",
      description: "라벨의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelWeight",
      attribute: "number",
      description: "라벨의 굵기를 나타냅니다.",
      type: "number",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number",
      description: "라벨의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelColor",
      attribute: "hex-code",
      description: "라벨의 색상을 나타냅니다.",
      type: "color",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelRotate",
      attribute: "number",
      description: "라벨의 회전 각도를 나타냅니다.",
      type: "number",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMove",
      attribute: "number",
      description: "라벨 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLabelSettings-useLabel",
      show: true,
    },
    {
      name: "sideLineVisible",
      attribute: "boolean",
      description: "사이드 라인의 표시 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "sideLineSize",
      attribute: "number",
      description: "사이드 라인의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineOpacity",
      attribute: "number",
      description: "사이드 라인의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "leftLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineColor",
      attribute: "hex-code",
      description: "사이드 라인의 색상을 나타냅니다.",
      type: "color",
      dependency: "leftLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineWidth",
      attribute: "number",
      description: "사이드 라인의 굵기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLabelSettings-sideLineVisible",
      show: true,
    },
  ],
  rightLabelSettings: [
    {
      name: "useLabel",
      attribute: "boolean",
      description: "우측 라벨 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "labelOnLeft",
      attribute: "boolean",
      description: "라벨을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMargin",
      attribute: "number",
      description: "라벨과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelSize",
      attribute: "number",
      description: "라벨의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelWeight",
      attribute: "number",
      description: "라벨의 굵기를 나타냅니다.",
      type: "number",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number",
      description: "라벨의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelColor",
      attribute: "hex-code",
      description: "라벨의 색상을 나타냅니다.",
      type: "color",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelRotate",
      attribute: "number",
      description: "라벨의 회전 각도를 나타냅니다.",
      type: "number",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMove",
      attribute: "number",
      description: "라벨 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLabelSettings-useLabel",
      show: true,
    },
    {
      name: "sideLineVisible",
      attribute: "boolean",
      description: "사이드 라인의 표시 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "sideLineSize",
      attribute: "number",
      description: "사이드 라인의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineOpacity",
      attribute: "number",
      description: "사이드 라인의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "rightLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineColor",
      attribute: "hex-code",
      description: "사이드 라인의 색상을 나타냅니다.",
      type: "color",
      dependency: "rightLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineWidth",
      attribute: "number",
      description: "사이드 라인의 굵기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLabelSettings-sideLineVisible",
      show: true,
    },
  ],
  bottomLabelSettings: [
    {
      name: "useLabel",
      attribute: "boolean",
      description: "하단 라벨 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "labelOnBottom",
      attribute: "boolean",
      description: "라벨을 아래쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMargin",
      attribute: "number",
      description: "라벨과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelSize",
      attribute: "number",
      description: "라벨의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelWeight",
      attribute: "number",
      description: "라벨의 굵기를 나타냅니다.",
      type: "number",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number",
      description: "라벨의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelColor",
      attribute: "hex-code",
      description: "라벨의 색상을 나타냅니다.",
      type: "color",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelRotate",
      attribute: "number",
      description: "라벨의 회전 각도를 나타냅니다.",
      type: "number",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMove",
      attribute: "number",
      description: "라벨 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLabelSettings-useLabel",
      show: true,
    },
    {
      name: "sideLineVisible",
      attribute: "boolean",
      description: "사이드 라인의 표시 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "sideLineSize",
      attribute: "number",
      description: "사이드 라인의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineOpacity",
      attribute: "number",
      description: "사이드 라인의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "bottomLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineColor",
      attribute: "hex-code",
      description: "사이드 라인의 색상을 나타냅니다.",
      type: "color",
      dependency: "bottomLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineWidth",
      attribute: "number",
      description: "사이드 라인의 굵기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLabelSettings-sideLineVisible",
      show: true,
    },
  ],
  topLabelSettings: [
    {
      name: "useLabel",
      attribute: "boolean",
      description: "상단 라벨 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "labelOnbottom",
      attribute: "boolean",
      description: "라벨을 아래쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMargin",
      attribute: "number",
      description: "라벨과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelSize",
      attribute: "number",
      description: "라벨의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelWeight",
      attribute: "number",
      description: "라벨의 굵기를 나타냅니다.",
      type: "number",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelOpacity",
      attribute: "number",
      description: "라벨의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelColor",
      attribute: "hex-code",
      description: "라벨의 색상을 나타냅니다.",
      type: "color",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelRotate",
      attribute: "number",
      description: "라벨의 회전 각도를 나타냅니다.",
      type: "number",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "labelMove",
      attribute: "number",
      description: "라벨 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLabelSettings-useLabel",
      show: true,
    },
    {
      name: "sideLineVisible",
      attribute: "boolean",
      description: "사이드 라인의 표시 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "sideLineSize",
      attribute: "number",
      description: "사이드 라인의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineOpacity",
      attribute: "number",
      description: "사이드 라인의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "topLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineColor",
      attribute: "hex-code",
      description: "사이드 라인의 색상을 나타냅니다.",
      type: "color",
      dependency: "topLabelSettings-sideLineVisible",
      show: true,
    },
    {
      name: "sideLineWidth",
      attribute: "number",
      description: "사이드 라인의 굵기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLabelSettings-sideLineVisible",
      show: true,
    },
  ],
  leftLegendSettings: [
    {
      name: "useLegend",
      attribute: "boolean",
      description: "좌측 축 제목 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "legendOnLeft",
      attribute: "boolean",
      description: "좌측 축 제목을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMargin",
      attribute: "number",
      description: "좌측 축 제목과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendSize",
      attribute: "number",
      description: "좌측 축 제목의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendWeight",
      attribute: "number",
      description: "좌측 축 제목의 굵기를 나타냅니다.",
      type: "number",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOpacity",
      attribute: "number",
      description: "좌측 축 제목의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "hex-code",
      description: "좌측 축 제목의 색상을 나타냅니다.",
      type: "color",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendReverse",
      attribute: "boolean",
      description: "좌측 축 제목의 순서를 반전할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMove",
      attribute: "number",
      description: "좌측 축 제목의 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "leftLegendSettings-useLegend",
      show: true,
    },
  ],
  rightLegendSettings: [
    {
      name: "useLegend",
      attribute: "boolean",
      description: "우측 축 제목 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "legendOnLeft",
      attribute: "boolean",
      description: "우측 축 제목을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMargin",
      attribute: "number",
      description: "우측 축 제목과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendSize",
      attribute: "number",
      description: "우측 축 제목의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendWeight",
      attribute: "number",
      description: "우측 축 제목의 굵기를 나타냅니다.",
      type: "number",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOpacity",
      attribute: "number",
      description: "우측 축 제목의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "hex-code",
      description: "우측 축 제목의 색상을 나타냅니다.",
      type: "color",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendReverse",
      attribute: "boolean",
      description: "우측 축 제목의 순서를 반전할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMove",
      attribute: "number",
      description: "우측 축 제목 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "rightLegendSettings-useLegend",
      show: true,
    },
  ],
  bottomLegendSettings: [
    {
      name: "useLegend",
      attribute: "boolean",
      description: "하단 축 제목 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "legendOnLeft",
      attribute: "boolean",
      description: "하단 축 제목을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMargin",
      attribute: "number",
      description: "하단 축 제목과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendSize",
      attribute: "number",
      description: "하단 축 제목의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendWeight",
      attribute: "number",
      description: "하단 축 제목의 굵기를 나타냅니다.",
      type: "number",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOpacity",
      attribute: "number",
      description: "하단 축 제목의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "hex-code",
      description: "하단 축 제목의 색상을 나타냅니다.",
      type: "color",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendReverse",
      attribute: "boolean",
      description: "하단 축 제목의 순서를 반전할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMove",
      attribute: "number",
      description: "하단 축 제목 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "bottomLegendSettings-useLegend",
      show: true,
    },
  ],
  topLegendSettings: [
    {
      name: "useLegend",
      attribute: "boolean",
      description: "상단 축 제목 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "legendOnLeft",
      attribute: "boolean",
      description: "하단 축 제목을 왼쪽에 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMargin",
      attribute: "number",
      description: "하단 축 제목과 차트 간의 여백을 의미합니다.",
      type: "number",
      unit: "px",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendSize",
      attribute: "number",
      description: "하단 축 제목의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendWeight",
      attribute: "number",
      description: "하단 축 제목의 굵기를 나타냅니다.",
      type: "number",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOpacity",
      attribute: "number",
      description: "하단 축 제목의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "hex-code",
      description: "하단 축 제목의 색상을 나타냅니다.",
      type: "color",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendReverse",
      attribute: "boolean",
      description: "하단 축 제목의 순서를 반전할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
    {
      name: "legendMove",
      attribute: "number",
      description: "하단 축 제목 이동 거리를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "topLegendSettings-useLegend",
      show: true,
    },
  ],
  legendSettings: [
    {
      name: "useLegend",
      attribute: "boolean",
      description: "범례 사용 여부를 나타냅니다.",
      type: "boolean",
    },
    {
      name: "position",
      attribute: "string",
      description: "범례의 위치를 나타냅니다. (bottom, center, top, left, right)",
      type: "'bottom' | 'center' | 'top' | 'left' | 'right'",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "xLocation",
      attribute: "number",
      description: "범례의 X 위치를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "yLocation",
      attribute: "number",
      description: "범례의 Y 위치를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "directionColumn",
      attribute: "boolean",
      description: "범례 항목을 열 방향으로 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "itemWidth",
      attribute: "number",
      description: "범례 항목의 너비를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "itemMargin",
      attribute: "number",
      description: "범례 항목 간의 여백을 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "symbolSize",
      attribute: "number",
      description: "심볼의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "symbolRadius",
      attribute: "number",
      description: "심볼의 반지름을 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "symbolMargin",
      attribute: "number",
      description: "심볼과 텍스트 간의 여백을 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "symbolOpacity",
      attribute: "number",
      description: "심볼의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendSize",
      attribute: "number",
      description: "범례 텍스트의 크기를 나타냅니다.",
      type: "number",
      unit: "px",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendWeight",
      attribute: "number",
      description: "범례 텍스트의 굵기를 나타냅니다.",
      type: "number",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOpacity",
      attribute: "number",
      description: "범례 텍스트의 투명도를 나타냅니다.",
      type: "number",
      unit: "",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendColor",
      attribute: "hex-code",
      description: "범례 텍스트의 색상을 나타냅니다.",
      type: "color",
      dependency: "legendSettings-useLegend",
      show: true,
    },
    {
      name: "legendOnStart",
      attribute: "boolean",
      description: "시작 시에 범례를 표시할지 여부를 나타냅니다.",
      type: "boolean",
      dependency: "legendSettings-useLegend",
      show: true,
    },
  ],
  animationSettings: {
    barSettings: [
      {
        name: "useAnimation",
        attribute: "boolean,optional",
        description: "bar에서 애니메이션 사용 여부를 의미합니다.",
        type: "boolean",
      },
      {
        name: "renderType",
        attribute: "string,optional",
        description: "bar에서 시작 애니메이션을 의미합니다.",
        type: "select",
        candidate: ["grow", "grow-async", "fade"],
        dependency: "animationSettings-barSettings-useAnimation",
        show: true,
      },
      {
        name: "renderDuration",
        attribute: "number,optional",
        description: "bar 시작 애니메이션 기간을 의미합니다.",
        type: "number",
        unit: "s",
        dependency: "animationSettings-barSettings-useAnimation",
        show: true,
      },
      {
        name: "renderStartDelay",
        attribute: "number,optional",
        description: "bar 시작 애니메이션 대기 시간을 의미합니다.",
        type: "number",
        unit: "s",
        dependency: "animationSettings-barSettings-useAnimation",
        show: true,
      },
      {
        name: "translateBar",
        attribute: "boolean,optional",
        description: "bar에서 이동 애니메이션 사용 여부를 의미합니다.",
        type: "boolean",
        dependency: "animationSettings-barSettings-useAnimation",
        show: true,
      },
    ],
  },
};
