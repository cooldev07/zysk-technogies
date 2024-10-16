import React from 'react';
function Accordion() {
    return (
        <div className="accordion accordion-flush text-dark" id="accordionFlushExample">
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                        Is there a free trial available?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>
                </div>
            </div>
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Can I change my plan later?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, incidunt reiciendis. Et, similique blanditiis. Voluptatibus quia suscipit pariatur quaerat architecto excepturi, voluptates id rerum explicabo!</div>
                </div>
            </div>
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        What is your cancellation policy?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quaerat explicabo odio autem hic eligendi iusto porro omnis, delectus quas minima architecto saepe sapiente pariatur, adipisci quae blanditiis accusamus numquam.</div>
                </div>
            </div>
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        Can other info be added to an invoice?
                    </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quaerat explicabo odio autem hic eligendi iusto porro omnis, delectus quas minima architecto saepe sapiente pariatur, adipisci quae blanditiis accusamus numquam.</div>
                </div>
            </div>
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        How does billing work?
                    </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quaerat explicabo odio autem hic eligendi iusto porro omnis, delectus quas minima architecto saepe sapiente pariatur, adipisci quae blanditiis accusamus numquam.</div>
                </div>
            </div>
            <div className="accordion-item border-0 mb-lg-3">
                <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        How do I change my account email?
                    </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, quaerat explicabo odio autem hic eligendi iusto porro omnis, delectus quas minima architecto saepe sapiente pariatur, adipisci quae blanditiis accusamus numquam.</div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;

