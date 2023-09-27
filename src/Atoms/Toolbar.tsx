import React, {useState} from "react";
import styled from "styled-components";

const Toolbar = styled.div``;

interface props {
    children?: React.ReactNode,
    color: string,
    lineWidth: number,
    handleColor: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleLineWidth: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const ToolbarComponent : React.FC<props> = (props) => {
    return (
        <Toolbar>
            <label>
                Color:
                <input type="color" value={props.color} onChange={props.handleColor}></input>
            </label>
            <label>
                Line Width:
                <input type="number" min={1} value={props.lineWidth} onChange={props.handleLineWidth}></input>
            </label>
        </Toolbar>
    )
}

export default ToolbarComponent;