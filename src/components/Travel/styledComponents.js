import styled from 'styled-components'

export const TravelListItem = styled.li`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 12px;

  @media screen and (max-width: 1048px) {
    width: 400px;
  }
  @media screen and (max-width: 850px) {
    width: 350px;
  }
  @media screen and (max-width: 750px) {
    width: 300px;
  }
  @media screen and (max-width: 650px) {
    width: 250px;
  }
`
export const TravelImage = styled.img`
  width: 100%;
`
export const TravelContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`
export const TravelHeading = styled.h2`
  color: #475569;
`
export const TravelParagraph = styled.p`
  color: #64748b;
`
