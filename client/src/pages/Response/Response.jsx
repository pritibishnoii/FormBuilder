import React, { useState, useEffect } from 'react';
import Nav from '../../Components/Nav/Nav';
import styles from './Response.module.css';
import { fetchResponses } from '../../api/user';

function Response() {
  const [responses, setResponses] = useState({ data: [], views: 0, starts: 0, completionRate: 0 });

  useEffect(() => {
    const getResponses = async () => {
      try {
        const data = await fetchResponses();
        setResponses(data);
      } catch (error) {
        console.log(error);

      };
    }
    getResponses();
  }, [])



  return (
    <div className={styles.container}>
      <Nav />
      {
        responses.data.length === 0 ? (
          <h1 className={`${styles.heading} sans-font flex justify-center`}>No Response yet collected</h1>
        ) :
          <div className={styles.response}>
            <section className={styles.content}>
              <div className={styles.brief}>
                <div className={styles.card}>
                  <p>Views</p>
                  <p>{responses.views}</p>
                </div>
                <div className={styles.card}>
                  <p>Starts</p>
                  <p>{responses.starts}</p>
                </div>
                <div className={styles.card}>
                  <p>Completion rate</p>
                  <p>{responses.completionRate}%</p>
                </div>
              </div>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>First interaction time</th>
                      <th>Button 1</th>
                      <th>Email 1</th>
                      <th>Text 1</th>
                      <th>Button 2</th>
                      <th>Rating 1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {responses.data.map((response, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{response.interactionTime}</td>
                        <td>{response.button1}</td>
                        <td>{response.email1}</td>
                        <td>{response.text1}</td>
                        <td>{response.button2}</td>
                        <td>{response.rating1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
      }



    </div>
  );
}

export default Response;
