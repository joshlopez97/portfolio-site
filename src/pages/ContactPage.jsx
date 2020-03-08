import React, {Component} from 'react';
import '../styles/contact.css';

class ContactPage extends Component {
  render() {
    return (
      <div className="contact page">
        <h1 className="page-header">Get in touch</h1>
        <ContactInfo
          Email={{ text: "josh@joshlopez.co", link: this.props.links.email }}
          LinkedIn={{ text: "josh-lopez-1", link: this.props.links.linkedin }}
          Resume={{ text: "Resume.pdf", link: this.props.files.resume }}
        />
      </div>
    );
  }
}

const ContactInfo = props => {
  const keys = [], values = [];
  for (const [key, value] of Object.entries(props)) {
    keys.push(<div key={key} className="contact-entry">{`${key}:`}</div>);
    values.push(<div key={key} className="contact-entry"><a href={value.link}>{value.text}</a></div>);
  }
  return (
    <div className="contact-info box">
      <div className="contact-info-section">
        {keys}
      </div>
      <div style={{textAlign: "right"}} className="contact-info-section">
        {values}
      </div>
    </div>
  );
};

export default ContactPage;