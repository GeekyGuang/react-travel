import { useParams } from 'react-router'

export const DetailPage = () => {
  const { id } = useParams()
  return <h1>产品详情, ID: {id}</h1>
}
