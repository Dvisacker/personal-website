import { Pane } from "evergreen-ui";
import styled from "styled-components";

const GhostButton = styled(Pane)`
    text-decoration: none;
    font-size: 150%;
    font-weight: 600;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.65em 1.7em;
    display: inline-block;
    overflow: hidden;
    border-radius: 2px;
    transition: all 0.6s ease 0s;
    cursor: pointer;
    width: 250px;
    text-align: center;

    :hover {
        background: rgba(255, 255, 255, 0.5);
        color: #000;
    }
`;

export default GhostButton;
