import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spin, Row, Col } from "antd";
import styles from "./Detail.module.css";
import { Header, Footer, ProductIntro } from "../../components";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `/api/touristRoutes/${touristRouteId}`
        );
        setProduct(data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        {/* 产品简介 与 日期选择 */}
        <div className={styles["product-intro-container"]}>
          <Row>
            <Col span={13}>
              <ProductIntro
                title={product.title}
                shortDescription={product.description}
                price={product.originalPrice}
                coupons={product.coupons}
                points={product.points}
                discount={product.price}
                rating={product.rating}
              />
            </Col>
            <Col span={11}>
              <RangePicker open style={{ marginTop: 20 }} />
            </Col>
          </Row>
        </div>
        {/* 锚点菜单 */}
        <div className={styles["product-detail-anchor"]}></div>
        {/* 产品特色 */}
        <div id="feature" className={styles["product-detail-container"]}></div>
        {/* 费用 */}
        <div id="fees" className={styles["product-detail-container"]}></div>
        {/* 预订须知 */}
        <div id="notes" className={styles["product-detail-container"]}></div>
        {/* 商品评价*/}
        <div id="comments" className={styles["product-detail-container"]}></div>
      </div>
      <Footer />
    </>
  );
};
