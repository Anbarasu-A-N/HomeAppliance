import React from 'react';
import "./Warranty.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

const Warranty = () => {
  const warrantyData = [
    {
      product: 'Washing Machines',
      standardWarranty: '3 years',
      extendedWarranty: '12 years (only on motor)',
    },
    {
      product: 'Washer Dryer',
      standardWarranty: '2 years',
      extendedWarranty: '12 years (only on motor)',
    },
    {
      product: 'Dryer',
      standardWarranty: '2 years',
      extendedWarranty: 'Not applicable',
    },
    {
      product: 'Refrigerator',
      standardWarranty: '1 year',
      extendedWarranty: '10 years (only on compressor)',
    },
    {
      product: 'Hoods',
      standardWarranty: '2 years',
      extendedWarranty: '10 years (only on BLDC motors)',
    },
    {
      product: 'Dishwashers',
      standardWarranty: '2 years',
      extendedWarranty: '10 years (against rust-through on inner tub)',
    },
    {
      product: 'Built-in Refrigerator',
      standardWarranty: '1 year',
      extendedWarranty: '5 years (only on compressor)',
    },
    {
      product: 'All Other Appliances',
      standardWarranty: '2 years',
      extendedWarranty: 'Not applicable',
    },
  ];

  return (
    <>
    <Navbar></Navbar>
    <div id='warranty'>
      <h2>Warranty Terms & Conditions</h2>
      <div id='warranty1'>
      <table id='warranty'>
        <thead id='warranty'>
          <tr>
            <th id='warranty'>Product</th>
            <th id='warranty'>Standard Warranty Period</th>
            <th id='warranty'>Extended Warranty Period <br />
                (applicable only on the parts mentioned below)</th>
          </tr>
        </thead>
        <tbody>
          {warrantyData.map((warranty, index) => (
            <tr key={index}>
              <td id='warranty'>{warranty.product}</td>
              <td id='warranty'>{warranty.standardWarranty}</td>
              <td id='warranty'>{warranty.extendedWarranty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <h3>Warranty Conditions</h3>
      <ol id='warranty'>
        <li id='warranty'>The warranty is confined only to the first purchase of the appliance and is non-transferable...</li>
        <li id='warranty'>The Warranty period (both Standard Warranty Period and Extended Warranty Period) starts from the date of purchase of the appliance...</li>
        {/* Add other warranty conditions */}
      </ol>

      <h3>Warranty is not applicable in any of the following cases:</h3>
      <ol id='warranty'>
        <li id='warranty'>If the warranty card is not duly filled and does not bear the stamp, date, and signature of an Authorised Service Personnel...</li>
        <li id='warranty'>The warranty does not cover any consequential or resulting liability, damage or loss to property or life arising directly or indirectly as a result of appliance failure...</li>
        {/* Add other non-applicable warranty cases */}
      </ol>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Warranty;
