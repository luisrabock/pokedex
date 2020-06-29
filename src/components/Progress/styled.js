import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

export const LinearProgressStyled = styled(LinearProgress)`
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.colorback ? props.colorback : "#a39f99"};
`;
