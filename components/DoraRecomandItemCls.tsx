import { Chip, Divider } from '@mui/material';
import { GetServerSideProps } from 'next';
import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface MyProps {
  ObjId: Number,
}
interface MyState {
  apiDB: Object[],  RecomandItem: Object,   recTrainer: Object,   lifeCycListener: Boolean,
}

class DoraRecomandItemCls extends React.PureComponent<MyProps, MyState> {
 
  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);
    this.state = { apiDB: [], RecomandItem: {}, recTrainer: {}, lifeCycListener: true };
  }

  // lifeCycListener = true;
  getServerSideProps:GetServerSideProps = async(context) => {
      const response = await fetch("https://developer.tadarab.com/wp-json/api/courses/31222/?country_code=EG");
      const data = await response.json();
      this.setState({ 
        apiDB: data.data['related_courses'], 
        RecomandItem: data.data['related_courses'].filter( (item: any, i: Number) => i === this.props.ObjId )[0],
        recTrainer: data.data['related_courses'].filter( (item: any, i: Number) => i === this.props.ObjId )[0]['trainer']
      });      
      return { props: {  } }
  }
  
  componentDidMount = () => {
    // this.lifeCycListener = true;
    // if( this.state.lifeCycListener === true ){ this.getServerSideProps(this.context); }
    this.getServerSideProps(this.context);
  }

  componentDidUpdate = () => {
    // this.lifeCycListener = true;
    // if( this.state.lifeCycListener === true ){ this.getServerSideProps(this.context); }
    this.getServerSideProps(this.context);
  }

  // componentWillUnmount = () => { this.setState({ lifeCycListener: false }) }

  render() {          
      return (
      <section className='DoraRecomandItem'>        
          <div style={{ backgroundImage: `url(${this.state.RecomandItem['image']})` }}>
              <Chip label={this.state.RecomandItem['type']} className='chipTags'/>
          </div>
          <div>
              <img src={`${this.state.recTrainer['image']}`} alt="" />
              <p className='cardHd'> {this.state.RecomandItem['title']} </p>
              <span className='cardNm'> {this.state.recTrainer['name_ar']} </span>
          </div>
          <Divider />
          <div>
              <div>
                  {
                      (this.state.RecomandItem['discounted_price']) && <p> <span>{this.state.RecomandItem['discounted_price']}</span> جنيه مصرى</p>
                  }                
                  <p> <span>{this.state.RecomandItem['price']}</span> جنيه مصرى</p>
              </div>
              <div>
                  <ShoppingCartOutlinedIcon />
                  <FavoriteBorderRoundedIcon />                    
              </div>
          </div>
      </section>
    )
  }

}

export default DoraRecomandItemCls;