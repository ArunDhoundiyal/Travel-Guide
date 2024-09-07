import {
  TravelListItem,
  TravelImage,
  TravelContentContainer,
  TravelHeading,
  TravelParagraph,
} from './styledComponents'

const Travel = ({travelData}) => {
  const {id, imageUrl, name, description} = travelData

  return (
    <TravelListItem key={id}>
      <TravelImage src={imageUrl} alt={name} />
      <TravelContentContainer>
        <TravelHeading>{name}</TravelHeading>
        <TravelParagraph>{description}</TravelParagraph>
      </TravelContentContainer>
    </TravelListItem>
  )
}

export default Travel
