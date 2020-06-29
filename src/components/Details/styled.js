import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

export const Container = styled.main`
  margin-left: 280px;
  margin-top: 70px;
  margin-right: 70px;
  min-height: 100%;
  width: 100%;
  padding: 30px;
`;

export const ContainerDetails = styled.div`
  display: block;
`;

export const LinearProgressStyled = styled(LinearProgress)`
  height: 20px;
  border-radius: 5px;
`;
