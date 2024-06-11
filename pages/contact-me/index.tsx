import React, { useEffect, useState } from 'react';
import styles from "../../styles/contactme.module.css";
import { ContactInfoTable } from '@/data/types/types';

const Contact = () => {
  const [items, setItems] = useState<any[]>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/contactme/contact');
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data : ContactInfoTable[] = await response.json();
      
      setItems(data);
      console.log(data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {

    // Call the fetch function
    fetchData();
  }, []);

  const handleChange = (e : any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/contactme/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
          subject: '',
        });
        fetchData();
        setSubmitting(false);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  const handleDelete = async (id : number) => {
    try {
      const response = await fetch(`/api/contactme/contact`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });
  
      if (response.ok) {
        console.log('Delete successful');
        // Refresh or update your data as needed
        fetchData();
      } else {
        console.error('Delete failed:', response.statusText);
        // Handle failure as needed
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };
  
  const handleUpdate = async (id : number) => {
    try {
      const response = await fetch(`/api/contactme/contact`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      });
      
      if (response.ok) {
        console.log('Update successful');
        fetchData();
        // Refresh or update your data as needed
      } else {
        console.error('Update failed:', response.statusText);
        // Handle failure as needed
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Me</h1>
        <br />
      <form onSubmit={handleSubmit}>
        <label className={styles.input}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input__field} />
        </label>
        <br />
        <label className={styles.input}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input__field} />
        </label>
        <br />
        <label className={styles.input}>
          Subject:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={styles.input__field} />
        </label>
        <br />
        <label className={styles.input}>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required className={styles.input__field} />
        </label>
        <br />
        <div className={styles.buttonContainer}>
            <button type="submit" className={styles.calculateButton} disabled={submitting}>Send Message</button>
        </div>
      </form>
      {items ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Subject</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className={styles.row}>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td><button onClick={async () => await handleDelete(item.id)} className={styles.calculateButton}>Delete</button></td>
                <td><button onClick={async () => await handleUpdate(item.id)} className={styles.calculateButton}>{item.recieved ? 'Reviewed' : 'Nope' }</button></td>
              </tr>
            ))}
            {items.map((item) => (
              <tr key={item.id} className={styles.row}>
                <td> 
                  Name: {item.name}
                  <br/>
                  Message: {item.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Contact;