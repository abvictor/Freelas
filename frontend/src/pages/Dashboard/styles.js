import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  position: fixed;
  top: 0;
`;

export const StyledMap = styled(MapContainer)`
  position: relative;
  height: 100vh;
  width: 100vw;
`;
