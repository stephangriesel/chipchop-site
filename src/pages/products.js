import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Products = ({ data }) => {

  const { items: { info } } = data
  console.log("info page query data test", info);

  const [filter, setFilter] = useState('All');
  const [treatments, setTreatments] = useState([])

  useEffect(() => {
    setTreatments(info)
  }, [info]);

  useEffect(() => {

    setTreatments([])

    const filtered = info.map(t => ({ ...t, filtered: t.category.includes(filter) }))

    setTreatments(filtered)
  }, [info, filter])

  console.log("filter test", filter)

  return (
    <Layout>
      <SEO title="Products | Coming soon" />

      <Labels>
        <div className="treatment-labels">
          <Button className="nav-btn" active={filter === 'All'} onClick={() => setFilter('All')}>All</Button>
          <Button className="nav-btn" active={filter === 'Body'} onClick={() => setFilter('Body')}>Coffee Table</Button>
          <Button className="nav-btn" active={filter === 'Eyes'} onClick={() => setFilter('Eyes')}>Eyes</Button>
          <Button className="nav-btn" active={filter === 'Face'} onClick={() => setFilter('Face')}>Face</Button>
          <Button className="nav-btn" active={filter === 'Feet'} onClick={() => setFilter('Feet')}>Feet</Button>
          <Button className="nav-btn" active={filter === 'Hairfree'} onClick={() => setFilter('Hairfree')}>Hairfree</Button>
          <Button className="nav-btn" active={filter === 'Hands'} onClick={() => setFilter('Hands')}>Hands</Button>
        </div>
      </Labels>
      <Wrapper>
        <div className="row-group">
          {treatments.map(item => item.filtered === true ? (
            <ListedItemWrapper>
              <span class="listed-item" key={item.id}>
                {item.title}:
              </span>
              <span class="listed-price" key={item.id}><strong>R{item.price}</strong></span>
            </ListedItemWrapper>
          ) : '')}
        </div>
      </Wrapper>
    </Layout >
  )
}

export const data = graphql`
query MyQuery {
  items: allContentfulItem(sort: {fields: title, order: ASC}) {
    info:nodes {
      title
      category
      price
      id
    }
  }
}
`

const Button = styled.main`
cursor: pointer;
padding:0.5rem;
margin:0 0.5rem;
border-radius:10%;
background: var(--mainYellowish);
transition:background 0.5s ease-out;
&:hover {
  background:var(--mainWhite);
}
`

const Labels = styled.main`
.treatment-labels {
  margin:1rem 0;
  display:flex;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
  gap:0.5rem;
  a {
    color:#000;
    gap:0.5rem;
    text-transform:uppercase;
  }
}
`

const Wrapper = styled.main`

.row-group {
  display:flex;
  flex-direction:column;
  align-items:center;
}

.column-item {
  margin:0;
  align-content:center;
  justify-content:center;
}


@media only screen and (min-width: 768px) {
  
  .row-group {
    display:flex;
    flex-wrap:wrap;
    height:70vh;
  }
}

`

const ListedItemWrapper = styled.main`
margin:0.5rem 0.5rem;;
display:flex;
flex-direction:column;
align-items:center;
.listed-price {
  margin-left:0.5rem;
}

@media only screen and (min-width: 768px) {
  display:flex;
  flex-direction:row;
}

`

export default Products
