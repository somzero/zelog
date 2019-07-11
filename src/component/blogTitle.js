import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  height: 169px;
  padding-left: 14vw;
  font-size: 36px;
`

export default () => (
  <Wrapper>
    <span style={{ color: "#FFAE00" }}>zelog </span>
    <span style={{ color: "#B9B9B9" }}>blog</span>
  </Wrapper>
)
