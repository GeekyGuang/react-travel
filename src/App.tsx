import styles from './App.module.css'
import { Header, Footer } from './components'
import { Row, Col } from 'antd'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: 'red' }}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{ background: 'blue' }}>走马灯</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  )
}

export default App
