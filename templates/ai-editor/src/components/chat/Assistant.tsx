import React from "react";
import clsx from "clsx";

function BackgroundImage27({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">{children}</div>
    </div>
  );
}

type ExtensionDefaultBackgroundImage1Props = {
  additionalClassNames?: string[];
};

function ExtensionDefaultBackgroundImage1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ExtensionDefaultBackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center p-[4px] relative">
          {children}
        </div>
      </div>
    </div>
  );
}

type ExtensionDefaultBackgroundImageProps = {
  additionalClassNames?: string[];
};

function ExtensionDefaultBackgroundImage({
  additionalClassNames = [],
}: ExtensionDefaultBackgroundImageProps) {
  return (
    <div
      className={clsx(
        "flex-none h-[18.667px] w-[3.394px]",
        additionalClassNames,
      )}
    >
      <div
        className="bg-[#ffffff] rounded-[2.03636px] size-full"
        data-name="Rectangle"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4=)",
        }}
      />
    </div>
  );
}

export default function Assistant() {
  return (
    <div
      className="relative rounded-2xl size-full"
      data-name="Extension (Default)"
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative size-full">
        <div
          className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0"
          data-name="Panel Area"
        >
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
            <BackgroundImage27>
              <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-4 pt-0 px-0 relative w-full">
                <div
                  className="h-12 relative rounded-md shrink-0 w-full"
                  data-name="container"
                >
                  <div className="flex flex-row items-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-4 h-12 items-center justify-start px-4 py-1 relative w-full">
                      <div
                        className="basis-0 grow h-6 min-h-px min-w-px relative rounded-[9px] shrink-0"
                        data-name="Tab Container"
                      >
                        <div className="h-6 w-full" />
                      </div>
                      <ExtensionDefaultBackgroundImage1
                        additionalClassNames={[
                          "bg-[rgba(255,255,255,0)]",
                          "rounded-md",
                        ]}
                      >
                        <div
                          className="overflow-clip relative shrink-0 size-4"
                          data-name="pen-square"
                        >
                          <div
                            className="absolute bottom-[12.5%] left-[12.5%] right-[7.592%] top-[7.593%]"
                            data-name="Union"
                          >
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 13 13"
                            >
                              <g id="Union">
                                <path
                                  d="M6 0.785063C6.36819 0.785063 6.66667 1.08354 6.66667 1.45173C6.66662 1.81988 6.36816 2.1184 6 2.1184H3.33333C2.22876 2.1184 1.33333 3.01383 1.33333 4.1184V9.45173C1.33338 10.5563 2.22879 11.4517 3.33333 11.4517H8.66667C9.7712 11.4517 10.6666 10.5563 10.6667 9.45173V6.78506L10.6699 6.7167C10.7041 6.38062 10.9882 6.1184 11.3333 6.1184C11.6785 6.1184 11.9625 6.38062 11.9967 6.7167L12 6.78506V9.45173C11.9999 11.2926 10.5076 12.7851 8.66667 12.7851H3.33333C1.49242 12.7851 5.02467e-05 11.2926 0 9.45173V4.1184C-8.04704e-08 2.27745 1.49238 0.785063 3.33333 0.785063H6Z"
                                  fill="var(--fill-0, #707070)"
                                />
                                <path
                                  clipRule="evenodd"
                                  d="M9.32943 0.509021C10.1152 -0.194729 11.3226 -0.168402 12.0768 0.585844L12.1992 0.70824L12.2702 0.782459C12.9547 1.53978 12.9571 2.69523 12.276 3.45564L12.2057 3.53051L6.92383 8.85993C6.54831 9.23877 6.03667 9.45168 5.50325 9.45173H4.66667C3.93032 9.45173 3.33339 8.85473 3.33333 8.1184V7.28181C3.33338 6.74839 3.54629 6.23676 3.92513 5.86123L9.25456 0.579334L9.32943 0.509021ZM11.1341 1.52855C10.8746 1.26902 10.454 1.26822 10.1934 1.5266L4.86393 6.8085C4.73773 6.93364 4.66671 7.10408 4.66667 7.28181V8.1184H5.50325C5.68098 8.11835 5.85142 8.04733 5.97656 7.92113L11.2585 2.5917L11.304 2.54092C11.5158 2.279 11.4997 1.89422 11.2565 1.65095L11.1341 1.52855Z"
                                  fill="var(--fill-0, #707070)"
                                  fillRule="evenodd"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </ExtensionDefaultBackgroundImage1>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="title">
                  <div className="relative size-full">
                    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-4 py-0 relative w-full">
                      <div
                        className="overflow-clip relative shrink-0 size-8"
                        data-name="genesis"
                      >
                        <div className="absolute bottom-[20.753%] flex items-center justify-center left-[20.751%] right-[20.752%] top-[20.75%]">
                          <ExtensionDefaultBackgroundImage
                            additionalClassNames={["rotate-[45deg]"]}
                          />
                        </div>
                        <div
                          className="absolute bg-[#ffffff] bottom-[15%] left-[43.637%] right-[43.635%] rounded-[2.03636px] top-[15%]"
                          data-name="Rectangle"
                          style={{
                            backgroundImage:
                              "url(data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgIHZpZXdCb3g9IjAgMCAxIDEiCiAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiCiAgICAgIHdpZHRoPSIxMDAlIgogICAgICBoZWlnaHQ9IjEwMCUiCiAgICA+CiAgICAgIDxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFRUUiIC8+CiAgICA8L3N2Zz4=)",
                          }}
                        />
                        <div className="absolute bottom-[43.637%] flex items-center justify-center left-[15%] right-[15%] top-[43.636%]">
                          <ExtensionDefaultBackgroundImage
                            additionalClassNames={["rotate-[90deg]"]}
                          />
                        </div>
                        <div className="absolute bottom-[20.753%] flex items-center justify-center left-[20.751%] right-[20.752%] top-[20.75%]">
                          <ExtensionDefaultBackgroundImage
                            additionalClassNames={["rotate-[135deg]"]}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[20px] text-center text-nowrap tracking-[-0.2px]">
                        <p className="block leading-[25px] whitespace-pre">
                          Assistant
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage27>
            <div
              className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full"
              data-name="Content Area"
            >
              <div className="box-border content-stretch flex flex-col items-center justify-end overflow-clip p-0 relative size-full">
                <div
                  className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0 w-full"
                  data-name="Content Area"
                >
                  <div className="box-border content-stretch flex flex-col items-center justify-end overflow-clip p-0 size-full" />
                </div>
              </div>
            </div>
            <div
              className="bg-[#ffffff] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full"
              data-name="AI Chat text field"
            >
              <div className="flex flex-col justify-center overflow-clip relative size-full">
                <div className="box-border content-stretch flex flex-col items-start justify-center p-[16px] relative w-full">
                  <div
                    className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
                    data-name="Prompt Field"
                  >
                    <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
                      <div
                        className="relative shrink-0 w-full"
                        data-name="prompt"
                      >
                        <div className="flex flex-row items-end relative size-full">
                          <div className="box-border content-stretch flex flex-row items-end justify-start px-4 py-3 relative w-full">
                            <div
                              className="h-[21px] relative shrink-0 w-0.5"
                              data-name="Cursor"
                            >
                              <div
                                className="absolute bottom-0 left-1/2 overflow-clip top-0 translate-x-[-50%] w-0.5"
                                data-name="cursor"
                              >
                                <div className="absolute flex h-[21px] items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[0px]">
                                  <div className="flex-none rotate-[90deg]">
                                    <div
                                      className="h-0 relative w-[21px]"
                                      data-name="Line"
                                    >
                                      <div
                                        className="absolute bottom-[-0.75px] left-[-3.571%] right-[-3.571%] top-[-0.75px]"
                                        style={
                                          {
                                            "--stroke-0":
                                              "rgba(28.000000230968, 28.000000230968, 28.000000230968, 1)",
                                          } as React.CSSProperties
                                        }
                                      >
                                        <svg
                                          className="block size-full"
                                          fill="none"
                                          preserveAspectRatio="none"
                                          viewBox="0 0 23 2"
                                        >
                                          <path
                                            d="M1 1H22"
                                            id="Line"
                                            stroke="var(--stroke-0, #1C1C1C)"
                                            strokeLinecap="round"
                                            strokeWidth="1.5"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="basis-0 flex flex-col font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#707070] text-[14px] text-left">
                              <p className="block leading-[21px]">Ask AI</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <BackgroundImage27>
                        <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start pb-3 pt-2 px-3 relative w-full">
                          <div
                            className="basis-0 grow min-h-px min-w-px relative shrink-0"
                            data-name="Context"
                          >
                            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative w-full">
                              <ExtensionDefaultBackgroundImage1
                                additionalClassNames={[
                                  "bg-[rgba(255,255,255,0)]",
                                  "rounded-lg",
                                ]}
                              >
                                <div
                                  className="relative rounded-md shrink-0 size-4"
                                  data-name="plus"
                                >
                                  <div
                                    className="absolute left-1 size-4 top-1"
                                    data-name="Union"
                                  >
                                    <svg
                                      className="block size-full"
                                      fill="none"
                                      preserveAspectRatio="none"
                                      viewBox="0 0 11 11"
                                    >
                                      <path
                                        d="M5.33301 0C5.70109 1.60894e-08 5.99982 0.297975 6 0.666016V4.66602H10L10.0684 4.66992C10.4043 4.70431 10.666 4.98801 10.666 5.33301C10.666 5.678 10.4043 5.96171 10.0684 5.99609L10 6H6V10L5.99609 10.0684C5.96171 10.4043 5.678 10.666 5.33301 10.666C4.98801 10.666 4.70431 10.4043 4.66992 10.0684L4.66602 10V6H0.666016C0.297975 5.99982 0 5.70109 0 5.33301C1.28875e-07 4.96493 0.297975 4.66619 0.666016 4.66602H4.66602V0.666016C4.66619 0.297975 4.96493 1.12779e-07 5.33301 0Z"
                                        fill="var(--fill-0, #707070)"
                                        id="Union"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </ExtensionDefaultBackgroundImage1>
                            </div>
                          </div>
                          <ExtensionDefaultBackgroundImage1
                            additionalClassNames={[
                              "bg-[#2e2e2e]",
                              "opacity-40",
                              "rounded-lg",
                            ]}
                          >
                            <div
                              className="overflow-clip relative shrink-0 size-4"
                              data-name="arrow-up"
                            >
                              <div
                                className="absolute bottom-[16.666%] left-[20.835%] right-[20.833%] top-[16.668%]"
                                data-name="icon"
                              >
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 10 11"
                                >
                                  <g id="icon">
                                    <path
                                      d="M4.19516 0.195238C4.45551 -0.0650628 4.87753 -0.0650956 5.13786 0.195238L9.13786 4.19524C9.3981 4.45558 9.39813 4.87763 9.13786 5.13795C8.87755 5.39826 8.45551 5.39819 8.19516 5.13795L5.33318 2.27597V9.99993C5.33315 10.368 5.03461 10.6665 4.66651 10.6666C4.29834 10.6666 3.99987 10.3681 3.99984 9.99993V2.27597L1.13786 5.13795L1.08708 5.18352C0.82527 5.39706 0.439239 5.38193 0.195156 5.13795C-0.0489211 4.89387 -0.0639836 4.50787 0.149583 4.24602L0.195156 4.19524L4.19516 0.195238Z"
                                      fill="var(--fill-0, white)"
                                      id="Vector"
                                    />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </ExtensionDefaultBackgroundImage1>
                        </div>
                      </BackgroundImage27>
                    </div>
                    <div className="absolute border-[#d9d9d9] border-[0.5px] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border-[#d9d9d9] border-[0.5px] border-solid inset-[-0.25px] pointer-events-none rounded-[16.25px]" />
    </div>
  );
}
