import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Travel from '../Travel'
import {
  BgContainer,
  TravelGuideHeading,
  UnorderedListContainer,
} from './styledComponents'

const Home = () => {
  const [data, setData] = useState({packages: []})
  const [loading, setLoading] = useState(true)

  const changeSnakeCaseToCamelCase = dataFormat =>
    dataFormat.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      description: eachItem.description,
    }))

  const fetchTravelData = async () => {
    try {
      const response = await axios.get(`https://apis.ccbp.in/tg/packages`)
      console.log(response.data)
      setData({packages: response.data.packages})
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(`Error fetching travel data`, error)
    }
  }
  useEffect(() => {
    fetchTravelData()
  }, [])

  const checkArrayData = Array.isArray(data.packages)
    ? changeSnakeCaseToCamelCase(data.packages)
    : []

  return (
    <BgContainer>
      <TravelGuideHeading>Travel Guide</TravelGuideHeading>
      {loading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        </div>
      ) : (
        <UnorderedListContainer>
          {checkArrayData.map(travelData => (
            <Travel key={travelData.id} travelData={travelData} />
          ))}
        </UnorderedListContainer>
      )}
    </BgContainer>
  )
}
export default Home
