'use client';

import Layout from "@/components/Layout/Layout";
import CategorySection from "../home/components/_CategorySection";

function Contact() {
    function submit(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let subject = document.getElementById('subject').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        let html = "Subject: " + subject + "Name: " + name + "<br/>Email: " + email + "<br/>Message: " + message;

        let data = {
            service_id: 'service_wkfknxf',
            template_id: 'template_zjontmc',
            user_id: '3RcWHdROgn7u4g4aE',
            template_params: {
                'name': name,
                'html': html,
            }
        };

        document.getElementById('submit').disabled = true;

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            document.getElementById('submit').disabled = false;

            document.getElementById('name').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    }

    return (
        <>
            <Layout>
                <CategorySection />

                <section className="content-section px-3 mt-5">
                    <h1>Contact</h1>

                    <div>
                        <form onSubmit={submit}>
                            <div className="form-group mb-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter name" required />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="name">Subject</label>
                                <input type="text" className="form-control" id="subject" placeholder="Enter subject" required />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="3" required></textarea>
                            </div>

                            <button type="submit" id="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Contact;
