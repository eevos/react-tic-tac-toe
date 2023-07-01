import React from "react";
import { useState } from "react";
import Dropdown from "./dropdown";

export default function Header() {

    return (
        <div className="header">
            <Dropdown></Dropdown>
                <p>Item 1</p>
                <p>Item 2</p>
                <p>Item 3</p>
        </div>
    );
}