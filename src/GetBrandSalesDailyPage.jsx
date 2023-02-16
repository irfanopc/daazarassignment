import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import './brand.css'
function GetBrandSalesDailyPage() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/brand_sales_daily")
      .then((response) => {
        setSalesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Brand</Th>
          <Th>Date</Th>
          <Th>Total Orders</Th>
          <Th>Total Order Value</Th>
          <Th>Gross Margin Percentage</Th>
        </Tr>
      </Thead>
      <Tbody>
        {salesData.map((data) => (
          <Tr key={data._id}>
            <Td>{data.brand}</Td>
            <Td>{new Date(data.date).toLocaleDateString()}</Td>
            <Td>{data.totalOrders}</Td>
            <Td>{data.totalOrderValue}</Td>
            <Td>{data.grossMarginPercentage}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default GetBrandSalesDailyPage;
