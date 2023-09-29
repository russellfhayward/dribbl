import React, {useState} from "react";
import styled from "styled-components";

const Toolbar = styled.div``;

const Button = styled.button``;

interface props {
    children?: React.ReactNode,
    color: string,
    lineWidth: number,
    handleColor: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleLineWidth: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleClear: (() => void) | undefined,
}

const ToolbarComponent : React.FC<props> = ({ handleLineWidth, handleClear, handleColor, color, lineWidth }) => {
    return (
        <Toolbar>
            <label>
                Color: <input type="color" value={color} onChange={handleColor}></input>
            </label>
            <label>
                Line Width: <input type="number" min={1} value={lineWidth} onChange={handleLineWidth}></input>
            </label>
            <Button onClick={handleClear}> Clear </Button>
        </Toolbar>
    )
}

export default ToolbarComponent;