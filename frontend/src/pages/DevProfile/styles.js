import styled from "styled-components";

export const Container = styled.body`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 10vh 25vh 25vh 15vh;

  grid-gap: 70px;

  .tecs {
    grid-column-start: 1;
    grid-column-end: 1;

    grid-row-start: 4;
    grid-row-end: 4;

    margin-left: 40px;

    justify-content: center;
  }
  .ap {
    grid-column-start: 1;
    grid-column-end: 1;

    grid-row-start: 3;
    grid-row-end: 3;

    margin-left: 40px;

    justify-content: center;
  }

  .projects {
    grid-column-start: 2;
    grid-column-end: 3;

    grid-row-start: 2;
    grid-row-end: 2;

    justify-content: center;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;

  grid-column-start: 1;
  grid-column-end: 6;

  grid-row-start: 1;
  grid-row-end: 1;

  font-size: 24px;
  justify-content: center;
  align-items: center;
  background-color: rgba(82, 158, 188, 0.5);
`;

export const RenderPhoto = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;

  grid-row-start: 2;
  grid-row-end: 2;

  width: 250px;
  height: 250px;
  margin-left: 40px;

  border-radius: 20px;
  border: 3px solid lightblue;
  background-color: white;
`;

export const RenderProjects = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;

  grid-row-start: 2;
  grid-row-end: 5;

  background-color: rgba(138, 138, 138, 0.57);
  border-radius: 20px;

  height: 100%;
  width: 100%;
`;

export const WppButton = styled.button`
  grid-column-start: 4;
  grid-column-end: 4;

  grid-row-start: 2;
  grid-row-end: 2;

  width: 200px;
  height: 80px;

  background-color: #25d366;
  color: white;

  border-radius: 25px;
  border: 1px solid black;

  margin-top: 90px;
  margin-right: 40px;
`;
