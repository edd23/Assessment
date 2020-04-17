import React from 'react';
import './App.css';
import { Card, Image, Icon, Container, } from "semantic-ui-react";
import axios from 'axios';
import styled from 'styled-components';
import ItemForm from './components/ItemForm.js';

class App extends React.Component {
  state = { items: []}

  componentDidMount() {
    axios.get('/api/items')
      .then( (res) => {
        this.setState({ items: res.data, })
      })
      .catch( (err) => {
        console.log(err)
      })
  }
  addItem = (itemName, itemImage, itemDescription, itemLikes) => {
    axios
    .post('/api/items', { 
      name: itemName,
      image: itemImage,
      description: itemDescription,
      likes: itemLikes, 
    })
    .then( (res) => {
      this.setState({
        items: [
          { ...res.data, item_id: res.data.id, items: [] },
          ...this.state.items
        ]
      });
    })
    .catch(e => {
      console.log(e);
    });
};

render(){
  const { items, } = this.state
        return (
          <AppContainer>
            <Container>
          
        <ItemForm/>
      <Card.Group itemsPerRow={5}>
        { items.map( item =>
          <Card key={item.id} style={styles.cardPosition}>
            <Image src={item.image} />
            <Card.Content>
              <Card.Header>
                { item.name }
              </Card.Header>
              <Card.Meta>
                { item.description}
              </Card.Meta>
              <Card.Content extra style={styles.iconPosition}>
                <Icon name="thumbs up outline" color="blue" /> {item.likes}
            </Card.Content>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </Container>
      </AppContainer>
    )
  }
}

const styles = {
  iconPosition: {
    float:"right",
    position: "absolute",
    bottom: "0",
    right: "0",
    clear: "right",
    paddingRight: "5%"
  },
  cardPosition: {
    marginRight: "10px",
  },
};

const AppContainer = styled.div`
  background: url(https://1.bp.blogspot.com/-pJzQop7Y-vI/XF3VBE-9isI/AAAAAAAAAs8/zd4_J6wKWj8_pYQp3-TLP5q5EDUM8-ZpwCK4BGAYYCw/s1600/pexels-photo-531880%2B%25281%2529.jpeg);
  background-size: cover;
  background-position: center;
`;

export default App;