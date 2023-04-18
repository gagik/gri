import * as React from "react"
import styled from "styled-components"
import GriVideo from "../assets/gri.mp4"
import type { HeadFC, PageProps } from "gatsby"
import "../components/layout.css"

const pageStyles = {
  color: "#fff",
  backgroundColor: "#000000",
  padding: 96,
  fontFamily: "Barlow, sans-serif",
  fontWeight: 300,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}
const Header = styled.div`
  font-size: 34px;
` 

const Blur = styled.div`
  width: 100%;
  height: 100%;
  background: #B57061;
  filter: blur(3px);
  border-radius: 100px;
`

const Button = styled.div`
  margin-top: 30px;
  cursor: pointer;
  position: relative;
  width: 200px;
  height: 40px;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    font-size: 15px;
  }
`


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <video width="200px" autoPlay muted loop playsInline>
      <source src={GriVideo} type="video/mp4" />
        </video>
      <Header>gri</Header>
      <p style={{textAlign: "center"}}
      >Text yourself thoughts, todos, and notes.<br />
      Journaling, productivity, and more through quick messages.
      </p>
      <p>Coming soon.</p>
      <a href="https://tally.so/r/3lBkRB"><Button><Blur /><div>Sign up for the beta</div></Button></a>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>gri app - Text yourself notes, todos, and thoughts.</title>
