import React from "react";

export default function HR(props) {
    return (
        <div
            style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
            }}
        >
            {props.dark ? (
                <div
                    style={{
                        width: "5rem",
                        height: "0.25rem",
                        backgroundColor: "black",
                        borderRadius: "0.2rem",
                    }}
                ></div>
            ) : (
                <div
                    style={{
                        width: "5rem",
                        height: "0.25rem",
                        backgroundColor: "white",
                        borderRadius: "0.2rem",
                    }}
                ></div>
            )}
            <div style={{ fontSize: "2.25rem", marginBottom: "5px" }}>
                {"\u2605"}
            </div>
            {props.dark ? (
                <div
                    style={{
                        width: "5rem",
                        height: "0.25rem",
                        backgroundColor: "black",
                        borderRadius: "0.2rem",
                    }}
                ></div>
            ) : (
                <div
                    style={{
                        width: "5rem",
                        height: "0.25rem",
                        backgroundColor: "white",
                        borderRadius: "0.2rem",
                    }}
                ></div>
            )}
        </div>
    );
}
