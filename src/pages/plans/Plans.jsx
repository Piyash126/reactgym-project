import React from 'react';
import './Plans.css';
import Header from '../../components/Header';
import plansimg from '../../images/header_bg_4.jpg';
import {plans} from '../../data';
import Card from '../../UI/Card';

function Plans() {
  return (
    <>
      <Header title="Membership Plans" image={plansimg}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore neque enim aliquid dolor distinctio possimus.
      </Header>
      <section className='plans'>
        <div className="container container__plans">
          {
            plans.map(({id, name, desc, price, features}) => {
              return(
                <Card key={id} className="plans">
                  <h3>{name}</h3>
                      <small>{desc}</small>
                      <h1>{`$${price}`}</h1><h2>/mo</h2>
                      <h4>Features</h4>
                      {
                        features.map(({feature, available}, index) => {
                          return (
                            <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                          )
                        })
                      }
                      <buton className="btn lg plans-btn">Chose Plan</buton>  
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans