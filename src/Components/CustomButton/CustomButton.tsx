import React, { CSSProperties } from "react";
import { Button } from "react-bootstrap";
// import Loader from "../loader/Loader";
import "./CustomButton.css";
// import CommanImg from "src/Utils/CommanImg";
import CommanText from "../CommanText/CommanText";

interface buttonProps {
    name?: string;
    background_color?: "primary" | "light" | "secondary" | "warm" | "transparent" | "themeGray";
    iconColor?: "primary" | "light" | "secondary" | "warm" | "transparent" | "themeGray";
    buttonOutline?: boolean;
    borderColor?: "primary" | "light" | "secondary" | "green" | "transparent";
    textColor?: "primary" | "light" | "secondary" | "green" | "dark";
    fontSize?: number;
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    icon?: string;
    iconWidth?: string | number;
    subText?: string;
    subTextSize?: number | undefined;
    isLoading?: boolean;
    loaderSize?: number | undefined;
    loaderColor?: string | undefined;
    style?: CSSProperties;
    height?: number;
    width?: number;
    pureIcons?: any;
    pureIconFontSize?: number;
    fontWeight?: number;
    borderRadius?: number;
    type?: any;
}

function CustomButton({
    name,
    background_color = "primary",
    buttonOutline = false,
    borderColor = "secondary",
    textColor = "light",
    fontSize = 16,
    fontWeight,
    onClick,
    className,
    icon,
    iconWidth,
    subText,
    subTextSize,
    isLoading = false,
    loaderSize = 20,
    loaderColor,
    style,
    height,
    width,
    type,
    pureIcons,
    pureIconFontSize,
    borderRadius = 4,
    iconColor = "light",
}: buttonProps) {
    const changeColor = (colorType: string) => {
        switch (colorType) {
            case "light":
                return "#FFFFFF";

            case "primary":
                return "#047FF7";

            case "secondary":
                return "#FCA827";

            case "warm":
                return "#FE9F24";

            case "green":
                return "#1BD741"

            case "transparent":
                return "#ffffff00"

            case "themeGray":
                return "#F2F2F2"

            case "dark":
                return "#000"

            default:
                return "#FFFFFF";
        }
    };

    return (
        <>
            <Button
                style={{
                    height: height,
                    width: width,
                    backgroundColor: changeColor(background_color),
                    border: "1px solid",
                    borderRadius: `${borderRadius} !important`,
                    borderColor: buttonOutline
                        ? changeColor(borderColor)
                        : changeColor(background_color),
                    color: changeColor(textColor),
                    fontSize: fontSize,
                    fontWeight: fontWeight,
                    ...style,
                }}
                className={`buttonstyle align-items-center justify-content-center ${className} d-flex`}
                onClick={onClick}
                disabled={isLoading}
                type={type}
            >
                {icon && (
                    <></>
                    // <CommanImg src={icon} width={iconWidth} />
                )}

                {pureIcons && (
                    <div className="d-flex align-items-center justify-content-center h-100"><div style={{ fontSize: pureIconFontSize, marginRight: 5, color: changeColor(iconColor), display: 'flex' }} >{pureIcons}</div></div>
                )}

                <>
                    {isLoading ? (
                        <span>
                            {/* <Loader color={loaderColor} size={loaderSize} /> */}
                        </span>
                    ) : (
                            <span>
                                {name}

                                <CommanText
                                    text={subText}
                                    tag="p"
                                    fontSize={subTextSize}
                                    colorType={textColor}
                                />
                            </span>
                        )}
                </>
            </Button>
        </>
    );
}

export default CustomButton;
