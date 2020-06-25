import styled from "styled-components";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

export const ContainerDrawer = styled.div`
  overflow: auto;
  margin-top: 60px;
  text-align: center;
`;

export const StyledDrawer = styled(Drawer)`
  width: 240;
  flex-shrink: 0;
`;

export const StyledButton = styled(Button)`
  min-width: 180px;
  min-height: 40px;
  margin-left: 8px;
  background-color: ${(props) =>
    props.backcolor ? props.backcolor : "#f8f7f7"};
  color: ${(props) => (props.backcolor ? "#fff" : "#66625c")};
`;
