import React from "react";
import "./CommanText.css";

interface textTypes {
    text: string | undefined;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "b";
    colorType?:
    | "dark"
    | "primary"
    | "textGrey"
    | "textRed"
    // | "orange"
    | "light"
    | "secondary"
    | "blue"
    | "green"
    | "success"
    | "lightRed"
    | "blueGray";
    fontSize?: number;
    fontWeight?: number;
    align?: "center" | "left" | "right" | "justify";
    className?: string;
    textCase?: "capitalize" | "none" | "uppercase";
    onClick?: () => void;
    style?: React.CSSProperties;
    isDisabled?: boolean;
    lineHeight?: string;
    marginTop?: number;
    wordBreak?: any;
    marginLeft?: number;
    marginBottom?: number;
}

function CommanText({
    text,
    tag,
    colorType = "dark",
    fontSize,
    fontWeight,
    align = "left",
    className,
    textCase = "none",
    onClick,
    style,
    isDisabled,
    lineHeight,
    marginTop,
    marginLeft,
    marginBottom,
    wordBreak = "break-all",
}: textTypes) {
    const changeColor = (colorType: string) => {
        switch (colorType) {
            case "dark":
                return "#000000";

            case "secondary":
                return "#FCA827";

            case "light":
                return "#FFFFFF";

            case "primary":
                return "#047FF7";

            case "textRed":
                return "#ff0000";

            case "textGrey":
                return "#9E9E9E";

            case "blue":
                return "#0084BD";

            case "green":
                return "#009846";

            case "success":
                return "#70C3A3";

            case "lightRed":
                return "#F3506E";

            case "blueGray":
                return "#5D7790";

            default:
                return "#202020";
        }
    };

    return (
        <>
            {tag === "h1" && (
                <h1
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h1>
            )}

            {tag === "h2" && (
                <h2
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h2>
            )}

            {tag === "h3" && (
                <h3
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h3>
            )}

            {tag === "h4" && (
                <h4
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h4>
            )}

            {tag === "h5" && (
                <h5
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h5>
            )}

            {tag === "h6" && (
                <h6
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </h6>
            )}

            {tag === "p" && (
                <p
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        marginTop: marginTop,
                        marginLeft: marginLeft,
                        marginBottom: marginBottom,
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        wordBreak: wordBreak,
                        ...style,
                    }}
                >
                    {text}
                </p>
            )}

            {tag === "b" && (
                <button
                    disabled={isDisabled}
                    className={className}
                    onClick={onClick}
                    style={{
                        color: changeColor(colorType),
                        textAlign: align,
                        textTransform: textCase,
                        fontWeight: fontWeight,
                        fontSize: fontSize,
                        lineHeight: lineHeight,
                        ...style,
                    }}
                >
                    {text}
                </button>
            )}
        </>
    );
}

export default CommanText;
