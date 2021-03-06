import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0px 10px;
    background-color:rgba(20, 20, 20, 0.0);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    border-bottom: 5px solid ${props => props.currunt ? "#3498db" : "transparent"};
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({ location: { pathname }}) => (
    <Header>
        <List>
            <Item currunt={pathname === "/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item currunt={pathname === "/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item currunt={pathname === "/search"}>
                <SLink to="/search">search</SLink>
            </Item>
        </List>
    </Header>
));