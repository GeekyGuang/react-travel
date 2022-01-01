import { useParams } from 'react-router'

export const DetailPage = () => {
  const { touristRouteId } = useParams()
  return <h1>产品详情, ID: {touristRouteId}</h1>
}
